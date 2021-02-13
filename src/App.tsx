import { usePostsState, useUsersState } from './lib/context';

import { Header } from './components/Header';
import { CreatePostTwo } from './components/CreatePostTwo';
import { PostList } from './components/PostList';
import { Signup } from './components/SignUp';

function App() {
    const { posts } = usePostsState();
    const { user } = useUsersState();

    return (
        <div className="App">
            <Header user={user} />

            <div className="w-screen flex justify-center items-center flex-col">
                <Signup />
                <CreatePostTwo />
                {posts && <PostList posts={posts} />}
            </div>
        </div>
    );
}

export default App;
