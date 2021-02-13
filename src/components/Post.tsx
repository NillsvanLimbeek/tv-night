import { firestore } from '../lib/firebase';

import { Post as PostType } from '../lib/types';

type Props = {
    post: PostType;
};

export const Post = ({ post }: Props) => {
    const docRef = firestore.doc(`posts/${post.id}`);

    const remove = () => {
        docRef.delete();
    };

    const star = () => {
        docRef.update({ stars: post.stars + 1 });
    };

    return (
        <div className="flex justify-between mb-4 w-full border border-gray-400 py-2 px-3 rounded">
            <div>
                <h2 className="text-xl">{post.title}</h2>
                <p className="text-sm">Stars: {post.stars}</p>
            </div>

            <div className="flex w-1/3">
                <button
                    className="w-1/2 border border-gray-500 px-2 py-1 mr-2 rounded hover:bg-blue-400"
                    onClick={star}
                >
                    Star
                </button>
                <button
                    className="w-1/2 border border-gray-500 rounded hover:bg-red-400"
                    onClick={remove}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};
