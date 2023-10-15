import Image from "./Image.jsx";
import {createStyles, rem} from "@mantine/core";
import {BsFillRecordFill} from "react-icons/bs";

const useStyles = createStyles((theme) => ({
    card: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        border: 'lightgray solid 1px',


    },

    imageContainer: {
        width: rem(70),
        minWidth: rem(70),
        height: rem(75),
        overflow:'hidden',
        borderRadius: rem(8),
        marginRight: rem(20),
        border: 'red solid 1px',
    },

    image: {
        width: '100%',
        height: "auto",
    },
    description: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        border: 'red solid 1px',
        paddingTop: rem(0),
    },
    name: {
        border: 'black solid 1px',
        margin: rem(0)

    },
    occupationContainer: {
        border: 'green solid 1px',
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },

    occupation: {
        border: 'blue solid 1px',
        marginTop: rem(0)


    },
    movies: {
        display: 'flex',
        flexDirection: 'row',
        border: 'red solid 1px',
        margin: rem(0),
        padding:rem(0),


    },
    movieItem: {
        display: 'flex',
        flexDirection: 'row',
        border: "lightblue solid 1px",
        justifyContent: 'flex-start',
        marginLeft: rem(5),
    },
    icon: {

    },
    movieTitle: {
        padding: '0%',
        marginTop:'0%',
    }
}));




function PersonList ({results}) {
    const {classes} = useStyles();
    console.log(results);


    return (
        <div>{
            results.map((person, index) => {
                return (
                    <div className={classes.card} key={index}>
                        <div className={classes.imageContainer}>
                            {!!person.profile_path ? <img src={`https://image.tmdb.org/t/p/w300/${person.profile_path}`} alt={person.title} className={classes.image}/> :
                                <img src={'https://placehold.co/200x300?text=Image+no+found'} />
                            }
                        </div>
                        <div className={classes.description}>
                            <h2 className={classes.name}> {person.name}</h2>
                            <div className={classes.occupationContainer}>
                                <p className={classes.occupation}>{person.known_for_department}</p>
                                <BsFillRecordFill size={5} className={classes.icon}  />
                                <div className={classes.movies}>{person.known_for?.map((movie, index) => {
                                    return (
                                        <div className={classes.movieItem} key={movie.index}>
                                            {movie.title ? <p className={classes.movieTitle}>{movie.title}{index < person.known_for.length - 1 ? ',' : ''}</p> : <p>{movie.name}{index < person.known_for.length - 1 ? ',' : ''}</p>}
                                        </div>
                                    )})}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })
        }</div>
    );
}

export default PersonList;