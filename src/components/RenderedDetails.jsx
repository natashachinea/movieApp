import '../pages/MovieDetailsPage.css';
function RenderedDetails ({ movie, genres, tv }) {
    if (movie) {
    return (
            <div>
                <div className='bg-image' style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: '0.7',
                }}></div>

                <div className='movie-details-container'>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>
                    <div className='movie-details'>
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