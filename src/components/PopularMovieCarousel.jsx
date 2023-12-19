import React, {useEffect, useState} from "react";
import {getPopularMovies} from "../Api.jsx";
import { Link } from "react-router-dom";
import { Carousel } from '@mantine/carousel';
import {BackgroundImage, Card, createStyles, rem, Text} from '@mantine/core';
import {format, parseISO} from "date-fns";
import useCarousel from "../hooks/use-carousel.jsx";



function PopularMovieCarousel() {
    const {popularMovies, classes} = useCarousel()


    const formatDate = (date) => {
        return format(parseISO(date), 'MMM dd, yyyy');
    };

    return (
        <div className={classes.containerPopularMovies} >

            <h2 className='subtitle'>Popular Movies</h2>
                <Carousel  withIndicators
                           height={400}
                           slideSize="30%"
                           slideGap="sm"
                           loop
                           align="start"
                           slidesToScroll={3}
                           controlSize={50}
                           styles={{
                               indicator: {
                                   width: rem(12),
                                   height: rem(4),
                                   transition: 'width 250ms ease',

                                   '&[data-active]': {
                                       width: rem(40),
                                   },
                               },
                           }}
                           >

                    {popularMovies.map(movie => (

                            <Carousel.Slide size="15%" gap="sm" key={movie.id} >
                                <Card>
                                    <Card.Section className={classes.movieItem} >
                                            <Link to={`/movie/${movie.id}`}>
                                                <img className={classes.image} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                                     alt={movie.title}/>
                                            </Link>
                                        </Card.Section>
                                        <Card.Section className={classes.card}>
                                            <Link to={`/movie/${movie.id}`}>
                                                <Text className={classes.title} >{movie.title}</Text>
                                                { movie.release_date ?
                                                    <Text className={classes.subtitle}>
                                                        {formatDate(movie.release_date)}
                                                    </Text> : null}
                                            </Link>
                                        </Card.Section>
                                </Card>
                            </Carousel.Slide>
                        ))}
                </Carousel>
        </div>
    );
}

export default PopularMovieCarousel;