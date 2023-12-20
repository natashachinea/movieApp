import SearchBar from "../components/SearchBar.jsx";
import PopularMovieCarousel from "../components/PopularMovieCarousel.jsx";
import PopularTVCarousel from "../components/PopularTVCarousel.jsx";
import {createStyles, Container, Title, Text, Button, rem, Header} from '@mantine/core';
import {Footer} from "../components/Footer.jsx";
import { HeaderAction} from "../components/Header.jsx";

const useStyles = createStyles((theme) => ({
    root: {
        backgroundColor: '#11284b',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage:
            'linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80)',
        paddingTop: `calc(${theme.spacing.xl} * 3)`,
        paddingBottom: `calc(${theme.spacing.xl} * 3)`,
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',

        [theme.fn.smallerThan('md')]: {
            flexDirection: 'column',
        },
    },

    image: {
        [theme.fn.smallerThan('md')]: {
            display: 'none',
        },
    },

    content: {
        paddingTop: `calc(${theme.spacing.xl} * 2)`,
        paddingBottom: `calc(${theme.spacing.xl} * 2)`,
        marginRight: `calc(${theme.spacing.xl} * 3)`,

        [theme.fn.smallerThan('md')]: {
            marginRight: 0,
        },
    },

    title: {
        color: theme.white,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 900,
        lineHeight: 1.05,
        maxWidth: rem(500),
        fontSize: rem(48),

        [theme.fn.smallerThan('md')]: {
            maxWidth: '100%',
            fontSize: rem(34),
            lineHeight: 1.15,
        },
    },

    description: {
        color: theme.white,
        opacity: 0.75,
        maxWidth: rem(700),
        fontSize: rem(25),

        [theme.fn.smallerThan('lg')]: {
            maxWidth: '100%',
        },
    },
    }));

export function HomePage() {
    const { classes } = useStyles();
    return (
        <div>
            <HeaderAction />
                <div className={classes.root}>
                    <Container size="lg">
                        <div className={classes.inner}>
                            <div className={classes.content}>
                                <Title className={classes.title}>
                                    {' '}
                                    <Text
                                        component="span"
                                        inherit
                                        variant="gradient"
                                        gradient={{ from: 'var(--lighter-green)', to: 'yellow' }}
                                    >Welcome
                                    </Text>{' '}
                                </Title>
                                <Text className={classes.description} mt={50}>
                                    Millions of movies, TV shows and people to discover. Explore now.
                                </Text>

                                <SearchBar/>

                            </div>
                        </div>
                </Container>
            </div>
            <Container size="lg">
                <PopularMovieCarousel/>
                <PopularTVCarousel/>
            </Container>
            <Footer />
        </div>
    );
}


export default HomePage;