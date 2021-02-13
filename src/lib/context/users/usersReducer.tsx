import { State, Action } from './Types';

export const userReducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'SET_USER':
            return { user: action.payload };

        default:
            return state;
    }
};
