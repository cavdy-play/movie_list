import React, {useEffect, useState} from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const CarouselTop = ({movies: allMovies}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const newMovies = [...allMovies]
    setMovies(newMovies.slice(0, 4))
  }, [allMovies])

  const next = () => {
    if (animating) return;
        const nextIndex = activeIndex === movies.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? movies.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    return (
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            <CarouselIndicators items={movies} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {movies.map(movie => (
                    <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={movie.id} >
                        <img width="100%" height="500px" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
                        <CarouselCaption captionText={movie.title} captionHeader={movie.title} />
                    </CarouselItem>
                ))}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    )
}

export default CarouselTop;
