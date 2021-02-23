import { useUsersState } from '../lib/context';

import { Header } from '../components/Header';
import { DiscoverForm } from '../components/DiscoverForm';

export const Home = () => {
    const { user } = useUsersState();

    return (
        <div className="App">
            <Header user={user} />
            <DiscoverForm />
        </div>
    );
};
