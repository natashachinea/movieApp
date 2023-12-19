import {useEffect, useState} from "react";
import {getPopularMovies, getPopularTV} from "../Api.jsx";
import {createStyles, rem} from "@mantine/core";

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
function useCarousel () {
    const [popularMovies, setPopularMovies] = useState([]);
    const [popularMedia, setPopularMedia] = useState([]);
    const {classes} = useStyles();

    //custom hook
    useEffect(() => {
        getPopularMovies()
            .then(data => {
                setPopularMovies(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        getPopularTV()
            .then(data => {
                setPopularMedia(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);





return {popularMedia, popularMovies, classes}


}
export default useCarousel;

