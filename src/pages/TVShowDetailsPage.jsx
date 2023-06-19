import {useState, useEffect } from "react";
import { getTVDetails } from "../Api.jsx";
import { useParams } from "react-router-dom";
import RenderedDetails from "../components/RenderedDetails.jsx";

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
        <div>
            <RenderedDetails tv={TVShow} genres={genres}/>
        </div>
    )
}

export default TVShowDetailsPage;

