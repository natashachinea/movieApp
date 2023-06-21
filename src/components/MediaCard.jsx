import {Card, createStyles, Flex, rem, Text} from "@mantine/core";
import {Link, useLocation} from "react-router-dom";
import Image from "./Image.jsx";


const useStyles = createStyles((theme) => ({
    card: {
        borderRadius: rem(10),
        border: 'lightgray solid 1px',
        maxHeight: rem(160),
        minHeight: rem(160),
        width: rem(1000),
        padding: rem(0),
        margin: rem(10),
        overflow: 'hidden',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    },
    image: {
        margin: rem(0),
        padding: rem(0),
        height: "auto",
    },
    description: {
        padding: rem(10),
        margin:'0%',
        overflow: 'hidden',

    }
}));
function MediaCard({results}) {
    const {classes} = useStyles();
    console.log(results)


    return (
        <div>
            <div className="movie-card">
                    {results.map((result) => (
                        <Card className={classes.card} style={{padding: 0}} key={result.id}>
                            <Flex justify="flex-start"
                                  align="flex-start"
                                  direction="row">
                                <Card.Section className={classes.image}>
                                    <Link to={`/${result.media_type}/${result.id}`}>
                                        <Image src={result.poster_path} alt={result.title}/>
                                    </Link>
                                </Card.Section>
                                <Card.Section className={classes.description} style={{margin: 0}}>
                                    <Flex
                                        align="flex-start"
                                        justify='flex-start'
                                        direction="column"
                                        gap='5px'>
                                        <div className={classes.title}>
                                            <Link to={`/tv/${result.id}`}>
                                                <Text fz="sm" fw={700}>{result.name}</Text>
                                            </Link>
                                            <Link to={`/movie/${result.id}`}>
                                                <Text fz="sm" fw={700}>{result.title}</Text>
                                            </Link>
                                        </div>
                                        <Text fz='xs' c='dimmed'> Release date: {result.release_date}{result.first_air_date}</Text>
                                        <Text mt='sm' c='dimmed' fz='xs'>
                                            {result.overview}
                                        </Text>
                                    </Flex>
                                </Card.Section>
                            </Flex>
                        </Card>
                    ))}
            </div>
        </div>
    )
}

export default MediaCard;

//display date in card with Moth, day, year format.
//display overview in card with 2 lines max.
//tittle font bigger.

