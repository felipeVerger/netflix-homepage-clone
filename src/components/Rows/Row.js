import React, { useState, useEffect } from 'react';
import { 
  RowContainer,
  RowTitle,
  RowPosters,
  Poster
} from './RowStyle';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import axios from '../../request/axios';

const base_url = 'https://image.tmdb.org/t/p/original/';

// this component will be reused to create all categories and genre rows
const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  // A snnipet of code which runs based on a specific condition/variable
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <RowContainer>
      <RowTitle>{title}</RowTitle>
      <Carousel
        centerMode={true}
        centerSlidePercentage={isLargeRow ? 10 : 16}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        infiniteLoop={true}
        // emulateTouch={true}
        swipeScrollTolerance={10}
      >
        {movies.map((movie) => (
          <Poster
            key={movie.id}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
            isLargeRow={isLargeRow}
          />
        ))}
      </Carousel>
    </RowContainer>
  );
}

export default Row