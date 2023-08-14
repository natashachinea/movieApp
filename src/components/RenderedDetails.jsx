import {createStyles, rem} from "@mantine/core";
import {format, parseISO} from "date-fns";

const useStyles = createStyles((theme) => ({
    page: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        border: '1px solid black',
        minHeight: '100vh', // 100% of the viewport height
    },

    bgImage: {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: rem(500),
        width:'100%',
        position: 'absolute',
        zIndex: '-1',
        border:'2px solid red',

    },
    background: {
        backgroundImage: `linear-gradient(
          to right,
          rgba(1.2, 20, 35.3, 1) calc((50vw - 170px) - 340px),
          rgba(1.2, 20, 35.3, 0.60) 50%,
          rgba(1.2, 20, 35.3, 0.60) 100%
        )`,
        height: '100%',
    },


    detailsContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between  ',
        height: '100%',
        marginBottom: rem(30),
        marginLeft: rem(50),
        marginRight: rem(20),
        overflowX: 'hidden',
        zIndex: '1',
        border: '4px solid blue',
        color: 'white',
    },
    poster: {
        width: rem(250),
        height: rem(450),
        marginRight: rem(20),
        marginTop: rem(20),
        borderRadius: rem(10),
        flexBasis: '22%',
        zIndex: '2',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexBasis: '70%',
        width: '50%',
        marginLeft: rem(20),
        border: '1px solid red',
        zIndex: '2',

    },

}));

function RenderedDetails ({ movie, genres, tv }) {
    const {classes} = useStyles();
    console.log(movie);
    const formatDate = (date) => {
        return format(parseISO(date), 'MM/dd/yyyy');
    };
    const formatYear = (date) => {
        return format(parseISO(date), '(yyyy)');
    };
    const formatRuntime = (minutes) => {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${hours}h ${mins}m`;

    }



    if (movie) {
    return (
            <div>
                    <div className={classes.page}>
                        <div className={classes.bgImage} style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        }}>
                            <div className={classes.background}>
                            </div>
                        </div>
                        <div className={classes.detailsContainer}>
                            <img className={classes.poster} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>
                            <div className={classes.details}>
                                <div className='title-section'>
                                    <h2>{movie.title} {formatYear(movie.release_date)}</h2>
                                    <p>{formatDate(movie.release_date)} | {genres} | {formatRuntime(movie.runtime)}</p>
                                </div>
                                <div className='overview-section'>
                                    <h4>{movie.tagline}</h4>
                                    <h3>Overview</h3>
                                    <p>{movie.overview}</p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
    )}
    if (tv) {
        return (
            <div>
                <div className='bg-image' style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${tv.backdrop_path})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: '0.7',
                }}></div>
                <div className='movie-details-container'>
                    <img src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`} alt={tv.name}/>
                    <div className='movie-details'>
                        <div className='title-section'>
                            <h2>{tv.name}</h2>
                            <p>{tv.first_air_date} - {genres} - {tv.episode_run_time} mins</p>
                        </div>
                        <div className='overview-section'>
                            <h4>{tv.tagline}</h4>
                            <h3>Overview</h3>
                            <p>{tv.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RenderedDetails;