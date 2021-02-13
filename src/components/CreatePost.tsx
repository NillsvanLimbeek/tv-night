import { useState } from 'react';
import { firestore, auth } from '../lib/firebase';

import { CreatePost as CreatePostType } from '../lib/types';

export const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (auth.currentUser) {
            const post: CreatePostType = {
                title,
                description,
                stars: 0,
                createdAt: new Date(),
                userId: auth.currentUser?.uid,
            };

            firestore.collection('posts').add(post);

            setTitle('');
            setDescription('');
        } else {
            console.error('not authticated...');
        }
    };

    const handleReset = () => {
        setTitle('');
        setDescription('');
    };

    return (
        <>
            <h2 className="w-1/2 text-center text-xl mt-3 mb-2 pb-2 border-b border-gray-400">
                Create a Post
            </h2>
            <form
                className="w-1/2 p-3 border-b border-gray-400 mb-2"
                onSubmit={(e) => handleSubmit(e)}
            >
                <div className="flex mb-3">
                    <label htmlFor="title" className="w-1/4">
                        Title
                    </label>
                    <input
                        name="title"
                        type="text"
                        onChange={(e) => setTitle(e.currentTarget.value)}
                        value={title}
                        className="border border-gray-400 rounded px-2 py-1 w-3/4"
                        required
                    />
                </div>

                <div className="flex">
                    <label htmlFor="description" className="w-1/4">
                        Description
                    </label>
                    <input
                        name="description"
                        type="text"
                        onChange={(e) => setDescription(e.currentTarget.value)}
                        value={description}
                        className="border border-gray-400 rounded px-2 py-1 w-3/4"
                        required
                    />
                </div>

                <div className="flex mt-3 mb-3">
                    <button
                        type="submit"
                        className="bg-blue-400 hover:bg-green-400 px-1 py-2 w-full mr-3"
                    >
                        Submit
                    </button>
                    <button
                        type="button"
                        onClick={handleReset}
                        className="bg-red-400 hover:bg-red-600 px-1 py-2 w-full"
                    >
                        Clear
                    </button>
                </div>
            </form>
        </>
    );
};
