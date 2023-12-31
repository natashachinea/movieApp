import React, {useEffect, useState} from "react";
import {getPopularMovies} from "../Api.jsx";
import { Link } from "react-router-dom";
import { Carousel } from '@mantine/carousel';
import {BackgroundImage, Card, createStyles, rem, Text} from '@mantine/core';
import {format, parseISO} from "date-fns";

const useStyles = createStyles((theme) => ({
    containerPopularMovies: {
        overflowX: 'visible',
        height: rem(400),
    },
    movieItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: rem(10),
    },
    image: {
        borderRadius: rem(10),
        width: rem(150),
        height: rem(200),
    },
    title: {

        color: 'black',
        fontSize: rem(15),
        fontWeight: 700,
    },
    subtitle: {
        color: 'black',
        fontSize: rem(15),
        fontWeight: 200,
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        leftMargin: rem(50),
    }



}));

function PopularMovieCarousel() {
    const [popularMovies, setPopularMovies] = useState([]);
    const {classes} = useStyles();

    useEffect(() => {
        getPopularMovies()
            .then(data => {
                setPopularMovies(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

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