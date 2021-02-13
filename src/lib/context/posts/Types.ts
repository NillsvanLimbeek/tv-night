import { Post } from '../../types';

export type Action = { type: 'SET_POSTS'; payload: Post[] };
export type State = { posts: Post[] };
export type Dispatch = (action: Action) => void;
export type Props = { children: React.ReactNode };
