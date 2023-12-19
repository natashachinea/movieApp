import {createStyles, rem} from "@mantine/core";
import {format, parseISO} from "date-fns";
import {BsFillRecordFill} from "react-icons/bs";




function RenderedDetails ({ movie, genres, tv }) {

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


    // if (movie) {
    // return (
    //         <div>
    //             <div className={classes.page}>
    //                 <div className={classes.bgImage} style={{
    //                     backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
    //                     backgroundSize: 'cover',
    //                     backgroundPosition: 'center',
    //                     }}>
    //                     <div className={classes.background}></div>
    //                 </div>
    //                 <div className={classes.detailsContainer}>
    //                     <img className={classes.poster} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>
    //                     <div className={classes.details}>
    //                         <div>
    //                             <h2 className={classes.title}>{movie.title} </h2> <p className={classes.facts}>{formatYear(movie.release_date)}</p>
    //                             <p className={classes.facts}>{formatDate(movie.release_date)} <BsFillRecordFill size={7} /> {genres} <BsFillRecordFill size={7} /> {formatRuntime(movie.runtime)}</p>
    //                         </div>
    //                         <div>
    //                             <h4 className={classes.tagline}>{movie.tagline}</h4>
    //                             <h3>Overview</h3>
    //                             {movie.overview === "" ? (<p>No overview available.</p>
    //                             ) : (
    //                                 <p>{movie.overview}</p>
    //                             )}
    //
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    // )}
    if (tv) {
        return (

            <div>
                <div className="details-page">
                    <div className="details-page__background" style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original/${tv.backdrop_path})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}>
                        <div className="details-page__background__item"></div>
                    </div>
                    <div className='details-page__content'>
                        <div className="details-page__content__poster">
                            <img  src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`} alt={tv.name}/>
                        </div>
                        <div className="details-page__content__details">
                            <div>
                                <h2 className="details-page__content__details__title">{tv.name} {formatYear(tv.first_air_date)}</h2>
                                <p className="details-page__content__details__facts">{formatDate(tv.first_air_date)} <BsFillRecordFill size={7} /> {genres} <BsFillRecordFill size={7} /> {formatRuntime(tv.episode_run_time)}</p>
                            </div>
                            <div>
                                <h4 className="details-page__content__details__tagline">{tv.tagline}</h4>
                                <h3 className="details-page__content__details__overview">Overview</h3>
                                {tv.overview === "" ? (<p>We don't have an overview translated in English. Help us expand our database by adding one. </p>
                                ) : (
                                    <p>{tv.overview}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RenderedDetails;

// import {createStyles, rem} from "@mantine/core";
// import {format, parseISO} from "date-fns";
// import {BsFillRecordFill} from "react-icons/bs";
//
// const useStyles = createStyles((theme) => ({
//     details-page: {
//         display: 'flex',
//         flexDirection: 'column',
//         flex: 1,
//         border: '1px solid black',
//         minHeight: '100vh', // 100% of the viewport height
//     },
//
//     bgImage: {
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'center',
//         height: rem(700),
//         width:'100%',
//         position: 'absolute',
//         zIndex: '-1',
//         border:'2px solid red',
//
//     },
//     background: {
//         backgroundImage: `linear-gradient(
//           to right,
//           rgba(1.2, 20, 35.3, 1) calc((50vw - 170px) - 340px),
//           rgba(1.2, 20, 35.3, 0.60) 50%,
//           rgba(1.2, 20, 35.3, 0.60) 100%
//         )`,
//         height: '100%',
//     },
//
//
//     details-page__content: {
//         display: 'flex',
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         height: '100%',
//         width: '100%',
//         zIndex: '1',
//         color: 'white',
//         padding: rem(30),
//         paddingLeft: '15%',
//         paddingRight: '15%',
//     },
//     content__poster: {
//         width: rem(250),
//         height: rem(450),
//         marginTop: rem(20),
//         borderRadius: rem(10),
//         flexBasis: rem(300),
//         zIndex: '2',
//     },

//     content__details {
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'flex-start',
//         justifyContent: 'center',
//         flexBasis: '70%',
//         width: '50%',
//         paddingLeft: rem(30),
//     },
//     details__facts: {
//         paddingTop: rem(0),
//         marginTop: rem(0),
//         fontSize: rem(15),
//     },
//     details__title: {
//         fontSize: rem(35),
//         fontWeight: '650',
//         marginBottom: rem(0),
//     },
//     details__tagline: {
//         fontSize: rem(15),
//         fontStyle: 'italic',
//         fontWeight: '450',
//
//     },
//
//
// }));
//
// function RenderedDetails ({ movie, genres, tv }) {
//     const {classes} = useStyles();
//     console.log(movie);
//     const formatDate = (date) => {
//         return format(parseISO(date), 'MM/dd/yyyy');
//     };
//     const formatYear = (date) => {
//         return format(parseISO(date), '(yyyy)');
//     };
//     const formatRuntime = (minutes) => {
//         const hours = Math.floor(minutes / 60);
//         const mins = minutes % 60;
//         return `${hours}h ${mins}m`;
//     }
//
//
//     if (movie) {
//         return (
//             <div>
//                 <div className={classes.page}>
//                     <div className={classes.bgImage} style={{
//                         backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
//                         backgroundSize: 'cover',
//                         backgroundPosition: 'center',
//                     }}>
//                         <div className={classes.background}></div>
//                     </div>
//                     <div className={classes.detailsContainer}>
//                         <img className={classes.poster} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>
//                         <div className={classes.details}>
//                             <div>
//                                 <h2 className={classes.title}>{movie.title} </h2> <p className={classes.facts}>{formatYear(movie.release_date)}</p>
//                                 <p className={classes.facts}>{formatDate(movie.release_date)} <BsFillRecordFill size={7} /> {genres} <BsFillRecordFill size={7} /> {formatRuntime(movie.runtime)}</p>
//                             </div>
//                             <div>
//                                 <h4 className={classes.tagline}>{movie.tagline}</h4>
//                                 <h3>Overview</h3>
//                                 {movie.overview === "" ? (<p>No overview available.</p>
//                                 ) : (
//                                     <p>{movie.overview}</p>
//                                 )}
//
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )}
//     if (tv) {
//         return (
//
//             <div>
//                 <div className={classes.page}>
//                     <div className={classes.bgImage} style={{
//                         backgroundImage: `url(https://image.tmdb.org/t/p/original/${tv.backdrop_path})`,
//                         backgroundSize: 'cover',
//                         backgroundPosition: 'center',
//                     }}>
//                         <div className={classes.background}></div>
//                     </div>
//                     <div className={classes.detailsContainer}>
//                         <img className={classes.poster} src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`} alt={tv.name}/>
//                         <div className={classes.details}>
//                             <div>
//                                 <h2 className={classes.title}>{tv.name} {formatYear(tv.first_air_date)}</h2>
//                                 <p className={classes.facts}>{formatDate(tv.first_air_date)} <BsFillRecordFill size={7} /> {genres} <BsFillRecordFill size={7} /> {formatRuntime(tv.episode_run_time)}</p>
//                             </div>
//                             <div>
//                                 <h4 className={classes.tagline}>{tv.tagline}</h4>
//                                 <h3>Overview</h3>
//                                 {tv.overview === "" ? (<p>We don't have an overview translated in English. Help us expand our database by adding one. </p>
//                                 ) : (
//                                     <p>{tv.overview}</p>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
//
// export default RenderedDetails;