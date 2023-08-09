import '../pages/MovieDetailsPage.css';
import {createStyles, rem} from "@mantine/core";

const useStyles = createStyles((theme) => ({
    bgImage: {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: rem(500),
        width:'100%',
        position: 'absolute',
        zIndex: '-1',
        border:'2px solid red',

    },
    detailsContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '100%',
        height: '100%',
        marginBottom: rem(30),
        marginLeft: rem(50),
        marginRight: rem(20),
        overflowX: 'hidden',
        zIndex: '1',
        border: '2px solid black',
    },
    poster: {
        width: rem(300),
        height: rem(450),
        marginRight: rem(20),
        marginTop: rem(20),
        borderRadius: rem(10),
        flexBasis: '30%',
        border: '2px solid red',
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


    },

}));

function RenderedDetails ({ movie, genres, tv }) {
    const {classes} = useStyles();
    if (movie) {
    return (
            <div style={{border: '2px solid blue'}}>
                <div className={classes.bgImage} style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: '0.5',
                }}></div>

                <div className={classes.detailsContainer}>
                    <img className={classes.poster} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>
                    <div className={classes.details}>
                        <div className='title-section'>
                            <h2>{movie.title}</h2>
                            <p>{movie.release_date} - {genres} - {movie.runtime} mins</p>
                        </div>
                        <div className='overview-section'>
                            <h4>{movie.tagline}</h4>
                            <h3>Overview</h3>
                            <p>{movie.overview}</p>
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