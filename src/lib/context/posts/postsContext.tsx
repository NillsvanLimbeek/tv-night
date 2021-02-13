import { useEffect, useReducer, createContext, useContext } from 'react';

import { postReducer } from './postsReducer';
import { State, Dispatch, Props } from './Types';
import { addIdsToSnapshot } from '../../utils';
import { Post } from '../../types';
import { firestore } from '../../firebase';

const initialState: State = {
    posts: [],
};

const PostsStateContext = createContext<State | undefined>(undefined);
const PostsDispatchContext = createContext<Dispatch | undefined>(undefined);

function PostsProvider({ children }: Props) {
    const [state, dispatch] = useReducer(postReducer, initialState);

    useEffect(() => {
        const unsubscribeFromFirestore = firestore.collection('posts').onSnapshot((snapshot) => {
            const posts = snapshot.docs.map((doc) => {
                return addIdsToSnapshot<Post>(doc);
            });

            dispatch({ type: 'SET_POSTS', payload: posts });
        });

        return () => {
            unsubscribeFromFirestore();
        };
    }, []);

    return (
        <PostsStateContext.Provider value={{ posts: state.posts }}>
            <PostsDispatchContext.Provider value={dispatch}>
                {children}
            </PostsDispatchContext.Provider>
        </PostsStateContext.Provider>
    );
}

function usePostsState() {
    const context = useContext(PostsStateContext);

    if (context === undefined) {
        throw new Error('usePostsState must be used within a PostsProvider');
    }
    return context;
}

function usePostsDispatch() {
    const context = useContext(PostsDispatchContext);

    if (context === undefined) {
        throw new Error('usePostsState must be used within a PostsProvider');
    }
    return context;
}

export { PostsProvider, usePostsDispatch, usePostsState };
