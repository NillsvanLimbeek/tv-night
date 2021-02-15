import { useForm } from 'react-hook-form';
import { auth, firestore } from '../lib/firebase';

import { CreatePost as CreatePostType } from '../lib/types';

export const CreatePostTwo = () => {
    const { register, handleSubmit, errors } = useForm<CreatePostType>({ mode: 'onChange' });

    const onSubmit = ({ title, description }: CreatePostType) => {
        if (auth.currentUser) {
            const post: CreatePostType = {
                title,
                description,
                stars: 0,
                createdAt: new Date(),
                userId: auth.currentUser?.uid,
            };

            firestore.collection('posts').add(post);
        } else {
            console.error('not authticated...');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex mb-3">
                <label htmlFor="title" className="w-1/4">
                    Title
                </label>
                <input
                    name="title"
                    type="text"
                    className="border border-gray-400 rounded px-2 py-1 w-3/4"
                    ref={register({ required: true })}
                />
                {errors.title && <p>required</p>}
            </div>

            <div className="flex mb-3">
                <label htmlFor="title" className="w-1/4">
                    Description
                </label>
                <input
                    name="description"
                    type="text"
                    className="border border-gray-400 rounded px-2 py-1 w-3/4"
                    ref={register({ required: true })}
                />
            </div>

            <div className="flex mt-3 mb-3">
                <button
                    type="submit"
                    className="bg-blue-400 hover:bg-green-400 px-1 py-2 w-full mr-3"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};
