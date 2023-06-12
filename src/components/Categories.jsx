import './Categories.css';
import {useNavigate} from "react-router-dom";
function Categories({category, query, page}) {
    const navigate = useNavigate();

const handleFilterClick = (category) => {
    navigate(`/search?category=${category}&query=${query}&page=${page}`);
}


    return (
        <div className="container">
            <div className="label">
                <div>Search Results</div>
            </div>
            <div className="categories">
                <ul className='links'>
                    <li className="movies" onClick={() => {handleFilterClick('movie')}}>
                        Movies
                    </li>
                    <li className="tv-shows" onClick={() => {handleFilterClick('tv')}}>
                        TV Shows
                    </li>
                    <li className="people" onClick={() => {handleFilterClick('person')}}>
                        People
                    </li>
                    <li className="collections" onClick={() => {handleFilterClick('collection')}}>
                        Collections
                    </li>
                    <li className="keywords" onClick={() => {handleFilterClick('keyword')}}>
                        Keywords
                    </li>
                    <li className="companies" onClick={() => {handleFilterClick('company')}}>
                        Companies
                    </li>
                    <li className="networks" onClick={() => {handleFilterClick('network')}}>
                        Networks
                    </li>
                </ul>
            </div>
        </div>
    );

}

export default Categories;