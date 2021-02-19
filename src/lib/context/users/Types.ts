import { User } from '../../types';

export type Action = { type: 'SET_USER'; payload: User | undefined };
export type State = { user: User | undefined };
export type Dispatch = (action: Action) => void;
export type Props = { children: React.ReactNode };
