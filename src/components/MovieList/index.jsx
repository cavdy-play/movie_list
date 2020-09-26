import React, {useEffect, useState} from 'react';
import Movie from '../Movie';
import Pagination from '../Pagination';

const MovieList = ({movies, handlePageClick}) => {
    const [allMovies, setAllMovies] = useState([])

    useEffect(() => {
        const newMovies = movies.results ? [...movies.results] : []
        setAllMovies(newMovies.splice(0, newMovies.length-2))
    }, [movies])

    return (
        <div className="album py-5 bg-light">
            <div className="container">
                <div className="row">
                    {allMovies
                        .map(movie => <Movie key={movie.id} movie={movie} />)
                    }
                </div>

                <Pagination handlePageClick={handlePageClick} movies={movies} />
            </div>
        </div>
    )
}

export default MovieList;
