import { Post as PostType } from '../lib/types';
import { Post } from './Post';

type Props = {
    posts: PostType[];
};

export const PostList = ({ posts }: Props) => {
    return (
        <ul className="w-1/2 p-3">
            {posts.map((post) => (
                <Post post={post} key={post.id} />
            ))}
        </ul>
    );
};
