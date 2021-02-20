export async function fetchData<T>(request: RequestInfo): Promise<T> {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/${request}`, {
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                Authorization: `Bearer ${process.env.REACT_APP_MOVIE_DB_ACCESS_TOKEN}`,
            },
        });

        const body = await response.json();
        return body;
    } catch (error) {
        throw new Error(error);
    }
}
