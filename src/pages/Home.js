import React, { useEffect, useState } from 'react';
import Loader from 'react-spinners/HashLoader';
import Carousel from '../components/Carousel';
import MovieList from '../components/MovieList';
import {getMovies} from '../services/movie.services';

const Home = () => {
    const [movies, setMovies] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const movieFunc = async () => {
            const result = await getMovies();
            setMovies(result.data);
            setLoading(false)
        }
        movieFunc()
    }, []);

    const handlePageClick = async (data) => {
        const selected = data.selected;
        const page = selected + 1;
        const result = await getMovies(page);
        setMovies(result.data);
    };

    return (
        <main role="main">
            {loading ?
            <div style={{display: 'flex',alignItems: 'center',justifyContent:'center',width: 'auto',height: '500px'}}>
                <Loader loading={loading} />
            </div> :
            <>
                <Carousel movies={movies} />
                <MovieList movies={movies} handlePageClick={handlePageClick} />
            </>
            }
        </main>
    )
}

export default Home;
