import React from 'react'

const Movie = ({movie}) => (
    <div className="col-md-4">
        <div className="card mb-4 shadow-sm">
            <img className="bd-placeholder-img card-img-top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <div className="card-body">
                <p className="card-text">{`${movie.overview.substring(0, 100)}...`}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">{movie.release_date}</small>
                </div>
            </div>
        </div>
    </div>
)

export default Movie;
