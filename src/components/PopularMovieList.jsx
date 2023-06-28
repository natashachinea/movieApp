import React, {useEffect, useState} from "react";
import {getPopularMovies} from "../Api.jsx";
import './PopularMovieList.css'
import { Link } from "react-router-dom";
import { Carousel } from '@mantine/carousel';
import {  BackgroundImage } from '@mantine/core';


function PopularMovieList() {
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        // Call the fetch or axios function when the component mounts
        getPopularMovies()
            .then(data => {
                setPopularMovies(data);
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
                    backgroundImage: theme.fn.gradient({ from: 'white', to: 'white', deg: 135 }),
                    color: theme.white,
                })}>

            <h2 className='subtitle'>Trending</h2>
                <Carousel  withIndicators
                           height={350}
                           slideSize="30%"
                           slideGap="sm"
                           loop
                           align="start"
                           slidesToScroll={3}
                           >
                        {popularMovies.map(movie => (
                            <Carousel.Slide size="15%" gap="sm" key={movie.id} >
                                <div className='movie-item' >
                                    <Link to={`/movie/${movie.id}`}>
                                        <img className='image' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                             alt={movie.title}/>
                                    </Link>
                                    <Link to={`/movie/${movie.id}`}>
                                        <h3 className='title'>{movie.title}</h3>
                                    </Link>
                                    <p className='date'>{movie.release_date}</p>
                                </div>
                            </Carousel.Slide>
                        ))}
                </Carousel>
            </BackgroundImage>
        </div>
    );
}

export default PopularMovieList;