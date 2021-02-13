import { State, Action } from './Types';

export const postReducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'SET_POSTS':
            return { posts: action.payload };

        default:
            return state;
    }
};
