import {Link} from "react-router-dom";
import Image from "./Image.jsx";
import './MediaCard.css';



function MediaCard({results}) {


    const isMovieOrTv = (mediaType) => {
       return results.media_type === mediaType
    }

    return (
            <div className='card'>
                    {results.map((result) => (
                        <Link to={`/${result.media_type}/${result.id}`}>
                            <div className='card-container' key={result.id}>
                                <div className='card-image-item'>
                                        <Image src={result.poster_path} alt={result.title}/>
                                </div>
                                <div className='description-container'>
                                        <div className='title-item'>
                                            <div> { isMovieOrTv('movie') ?  <p>{result.title}</p> : <p>{result.name}</p> } </div>
                                        </div>
                                        <div className='release-date-item'> Release date:
                                            { result.media_type === 'movie' ? result.release_date : result.first_air_date }
                                        </div>
                                        <div className='overview-item'>Overview: {result.overview}</div>
                                </div>
                            </div>
                        </Link>
                    ))}
            </div>
    )
}

export default MediaCard;


