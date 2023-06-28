import React, {useEffect, useState} from "react";
import {getPopularTV} from "../Api.jsx";
import './PopularMovieList.css'
import { Link } from "react-router-dom";
import { Carousel } from '@mantine/carousel';
import {  BackgroundImage } from '@mantine/core';
function PopularTV () {
    const [popularShows, setPopularShows] = useState([]);

    useEffect(() => {
        // Call the fetch or axios function when the component mounts
        getPopularTV()
            .then(data => {
                setPopularShows(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (

        <div className='container-popular-movies' >
            <BackgroundImage
                sx={(theme) => ({
                    height: '100%',
                    backgroundImage: theme.fn.gradient({ from: 'white', to: 'white', deg: 15 }),
                    color: theme.white,
                })}>
            <h2 className='subtitle'>On TV</h2>
                <Carousel  withIndicators
                           height={350}
                           slideSize="30%"
                           slideGap="sm"
                           loop
                           align="start"
                           slidesToScroll={3}
                >
                {popularShows.map(tvShow => (
                    <Carousel.Slide size="15%" gap="sm"  key={tvShow.id}>
                    <div  className='movie-item'>
                        <Link to={`/tv/${tvShow.id}`}>
                            <img className='image' src={`https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`} alt={tvShow.title} />
                        </Link>
                        <Link to={`/tv/${tvShow.id}`}>
                            <h3 className='title'>{tvShow.name}</h3>
                        </Link>
                        <p className='date'>{tvShow.first_air_date}</p>
                    </div>
                    </Carousel.Slide>
                ))}
                </Carousel>
            </BackgroundImage>
        </div>
    );
}

export default PopularTV;