import {useState, useEffect } from "react";
import { getTVDetails } from "../Api.jsx";
import { useParams } from "react-router-dom";
import RenderedDetails from "../components/RenderedDetails.jsx";
import {HeaderAction} from "../components/Header.jsx";
import {Footer} from "../components/Footer.jsx";
import {Container} from "../components/styles/DetailsPage.styled";
function TVShowDetailsPage() {
    const [TVShow, setTVShow] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();


    useEffect(() => {
        setLoading(true)
        getTVDetails(id)
            .then(data => {
                setTVShow(data);
            })
            .catch(error => {
                    console.error(error);
                }
            )
            .finally(() => {
                setLoading(false)
            })
    }, []);


    const genres = TVShow?.genres?.map(genre => genre.name).join(', ')

    if(loading) {
        return <div>Loading...</div>
    }
    return (
        <Container>
            <div className='item-1'>
                <HeaderAction />
            </div>
            <div className='item-2'>
                <RenderedDetails tv={TVShow} genres={genres}/>
            </div>
            <div className='item-3'>
                <Footer />
            </div>
        </Container>
    )
}

export default TVShowDetailsPage;

