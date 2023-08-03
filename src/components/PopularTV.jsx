import React, {useEffect, useState} from "react";
import {getPopularTV} from "../Api.jsx";
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
        leftPadding: rem(10),

    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        leftMargin: rem(50),
    }

}));

function PopularTV () {
    const [popularShows, setPopularShows] = useState([]);
    const {classes} = useStyles();


    useEffect(() => {
        getPopularTV()
            .then(data => {
                setPopularShows(data);
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
            <h2 className='subtitle'>Trending on TV</h2>
            <Carousel  withIndicators
                       height={400}
                       slideSize="30%"
                       slideGap="sm"
                       loop
                       align="start"
                       slidesToScroll={3}
                       controlSize={40}
            >

                {popularShows.map(tv => (

                    <Carousel.Slide size="15%" gap="sm" key={tv.id} >
                        <Card>
                            <Card.Section className={classes.movieItem} >
                                <Link to={`/tv/${tv.id}`}>
                                    <img className={classes.image} src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`}
                                         alt={tv.title}/>
                                </Link>
                            </Card.Section>
                            <Card.Section className={classes.card}>
                                <Link to={`/tv/${tv.id}`}>
                                    <Text className={classes.title} >{tv.original_name}</Text>
                                    {tv.first_air_date ?
                                        <Text className={classes.subtitle}>
                                            {formatDate(tv.first_air_date)}
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

export default PopularTV;