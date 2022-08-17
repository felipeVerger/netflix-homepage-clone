import React, { useState, useEffect } from 'react'
import {
    Header,
    BannerContent,
    Title,
    BannerButtons,
    Button,
    Description,
    BannerFade
} from './BannerStyle';
import axios from '../../request/axios';
import requests from '../../request/request';

const base_url = 'https://image.tmdb.org/t/p/original/';

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
        const request = await axios.get(requests.fetchNetflixOriginals);
        // we set movies with a random movie from the request
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
    }
    fetchData();
  }, [])

  // function to limit the length of the description string
  // it recieves the description string and the number that limits it
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  return (
    <Header movieImg={`${base_url}${movie?.backdrop_path}`}>
        <BannerContent>
            <Title>
                {movie?.title || movie?.name || movie?.original_name}
            </Title>
            <Description>{truncate(movie?.overview, 150)}</Description>
            <BannerButtons>
                <Button>Play</Button>
                <Button>My List</Button>
            </BannerButtons>
        </BannerContent>
        <BannerFade/>
    </Header>
  )
}

export default Banner