import { Link } from "react-router-dom";
import { Carousel } from '@mantine/carousel';
import { Card, rem, Text} from '@mantine/core';
import {format, parseISO} from "date-fns";
import useCarousel from "../hooks/use-carousel.jsx";



function PopularTVCarousel () {
    const {popularMedia, classes} = useCarousel();

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

                {popularMedia.map(tv => (

                    <Carousel.Slide size="15%" gap="sm" key={tv.id}>
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

export default PopularTVCarousel;