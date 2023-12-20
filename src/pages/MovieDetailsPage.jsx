import {useState, useEffect } from "react";
import { getMovieDetails } from "../Api.jsx";
import { useParams } from "react-router-dom";
import RenderedDetails from "../components/RenderedDetails.jsx";
import {Footer} from "../components/Footer.jsx";
import {HeaderAction} from "../components/Header.jsx";
import {Container} from "../components/styles/DetailsPage.styled.js";

function MovieDetailsPage() {
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);
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
        return <p>Loading...</p>
    }
    return (
        <Container>
            <div className='item-1'>
                <HeaderAction />
            </div>
            <div className='item-2'>
                <RenderedDetails movie={movie} genres={genres}/>
            </div>
            <div className='item-3'>
                <Footer />
            </div>
        </Container>
    )
}

export default MovieDetailsPage;

