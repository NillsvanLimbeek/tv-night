import React, { useState } from 'react';

import { fetchData } from '../lib/utils/fetchData';
import { MOVIE_GENRES, TV_GENRES, FILTERS } from '../lib/constants';
import { Button } from './Button';

export const DiscoverForm = () => {
    const [medium, setMedium] = useState('');
    const [genres, setGenres] = useState<number[]>([]);
    const [year, setYear] = useState('');
    const [filter, setFilter] = useState('');
    const [data, setData] = useState<any>();

    const addGenre = (id: number) => {
        if (genres.includes(id)) {
            const newGenres = genres.filter((num) => num !== id);
            setGenres(newGenres);
        } else {
            setGenres([...genres, id]);
        }
    };

    const fetchMovies = async () => {
        const url = `discover/${medium}?sort_by=${filter}&include_adult=false&include_video=false&with_original_language=en&page=1&primary_release_year=${year}&with_genres=${genres}`;
        const data = await fetchData<any>(url);

        setData(data);
    };

    return (
        <div>
            <section className="mb-10">
                <h3 className="font-light text-gray-800 text-lg mb-4">What do you want to see?</h3>

                <div>
                    <Button onClick={() => setMedium('movie')} className="mr-3">
                        Movie
                    </Button>
                    <Button onClick={() => setMedium('tv')}>TV Serie</Button>
                </div>
            </section>

            <section className="mb-10">
                <h3 className="font-light text-gray-800 text-lg mb-4">
                    Wich genres would you like to see?
                </h3>

                {medium.length && medium === 'movie' ? (
                    <ul>
                        {MOVIE_GENRES.map((movie) => (
                            <Button
                                key={movie.id}
                                onClick={() => addGenre(movie.id)}
                                className="mr-3 mb-2"
                            >
                                {movie.name}
                            </Button>
                        ))}
                    </ul>
                ) : (
                    <ul>
                        {TV_GENRES.map((tv) => (
                            <Button
                                key={tv.id}
                                onClick={() => addGenre(tv.id)}
                                className="mr-3 mb-2"
                            >
                                {tv.name}
                            </Button>
                        ))}
                    </ul>
                )}
            </section>

            <section className="mb-10">
                <h3 className="font-light text-gray-800 text-lg mb-4">From wich year?</h3>

                <input
                    type="number"
                    onChange={(e) => setYear(e.target.value)}
                    className="border border-gray-400 px-2 py-1 rounded-sm"
                />
            </section>

            <section className="mb-10">
                <h3 className="font-light text-gray-800 text-lg mb-4">Any filters?</h3>

                <ul>
                    {FILTERS.map((filter) => (
                        <Button
                            key={filter.id}
                            onClick={() => setFilter(filter.id)}
                            className="mr-3"
                        >
                            {filter.title}
                        </Button>
                    ))}
                </ul>
            </section>

            <button onClick={fetchMovies} className="bg-red-400">
                Show me the stuff!
            </button>

            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
    );
};
