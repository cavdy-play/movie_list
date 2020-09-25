import React, { useEffect, useState } from 'react';
import Carousel from '../components/Carousel';
import MovieList from '../components/MovieList';
import {getMovies} from '../services/movie.services';

const Home = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const movieFunc = async () => {
            const result = await getMovies();
            setMovies(result.data.results);
        }
        movieFunc()
    }, []);

    return (
        <main role="main">
            <Carousel movies={movies} />
            <MovieList movies={movies} />
        </main>
    )
}

export default Home;
