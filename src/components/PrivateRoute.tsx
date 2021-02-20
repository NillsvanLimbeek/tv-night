import { ComponentType, ReactNode } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useUsersState } from '../lib/context';

type Props = {
    path: string;
    exact?: boolean;
    component: ComponentType;
    children?: ReactNode;
};

export const PrivateRoute = ({ path, exact, component, children }: Props) => {
    const { user } = useUsersState();

    return user ? (
        <Route path={path} exact={exact} component={component}>
            {children}
        </Route>
    ) : (
        <Redirect to="/signin" />
    );
};
