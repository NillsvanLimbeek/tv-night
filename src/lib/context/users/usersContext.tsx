import { useEffect, useReducer, createContext, useContext } from 'react';

import { userReducer } from './usersReducer';
import { State, Dispatch, Props } from './Types';
import { auth } from '../../firebase';
import { getUserDocument } from '../../utils';

const initialState: State = {
    user: undefined,
};

const UsersStateContext = createContext<State | undefined>(undefined);
const UsersDispatchContext = createContext<Dispatch | undefined>(undefined);

function UsersProvider({ children }: Props) {
    const [state, dispatch] = useReducer(userReducer, initialState);

    useEffect(() => {
        const unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
            if (user) {
                const userDoc = await getUserDocument(user.uid);

                if (userDoc) {
                    dispatch({ type: 'SET_USER', payload: userDoc });
                }
            }
        });

        return () => {
            unsubscribeFromAuth();
        };
    }, []);

    return (
        <UsersStateContext.Provider value={{ user: state.user }}>
            <UsersDispatchContext.Provider value={dispatch}>
                {children}
            </UsersDispatchContext.Provider>
        </UsersStateContext.Provider>
    );
}

function useUsersState() {
    const context = useContext(UsersStateContext);

    if (context === undefined) {
        throw new Error('useUsersState must be used within a UsersProvider');
    }
    return context;
}

function useUsersDispatch() {
    const context = useContext(UsersDispatchContext);

    if (context === undefined) {
        throw new Error('useUsersState must be used within a UsersProvider');
    }
    return context;
}

export { UsersProvider, useUsersDispatch, useUsersState };
