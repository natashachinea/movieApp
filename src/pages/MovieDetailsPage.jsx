import {useState, useEffect } from "react";
import { getMovieDetails } from "../Api.jsx";
import { useParams } from "react-router-dom";
import './MovieDetailsPage.css'
import RenderedDetails from "../components/RenderedDetails.jsx";

function MovieDetailsPage() {
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);
    console.log({movie})
    const { id } = useParams();


    useEffect(() => {
        setLoading(true)
        getMovieDetails(id)
            .then(data => {
                setMovie(data);
            })
            .catch(error => {
                console.error(error);
                }
            )
            .finally(() => {
                setLoading(false)
            })
    }, []);


         const genres = movie?.genres?.map(genre => genre.name).join(', ')

    if(loading) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <RenderedDetails movie={movie} genres={genres}/>
        </div>

    )
}

export default MovieDetailsPage;

//somewhere here I need a person component where I render actor pictures and previous movies they were in.