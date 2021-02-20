import { useUsersState } from '../lib/context';
import { fetchData } from '../lib/utils/fetchData';
import { MovieResponse } from '../lib/types';

import { Header } from '../components/Header';

export const Home = () => {
    const { user } = useUsersState();

    const getData = async () => {
        const data = await fetchData<MovieResponse>('tv/4607');
        console.log(data);
    };

    return (
        <div className="App">
            <Header user={user} />

            <button onClick={getData}>Click</button>
        </div>
    );
};
