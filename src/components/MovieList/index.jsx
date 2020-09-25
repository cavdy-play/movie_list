import React, {useEffect, useState} from 'react';
import Movie from '../Movie';

const MovieList = ({movies}) => {
    const [allMovies, setAllMovies] = useState([])

    useEffect(() => {
        const newMovies = [...movies]
        setAllMovies(newMovies.splice(0, movies.length-2))
    }, [movies])
    return (
        <div className="album py-5 bg-light">
            <div className="container">
                <div className="row">
                    {allMovies
                        .map(movie => <Movie key={movie.id} movie={movie} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList;
