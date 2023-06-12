import SearchBar from "../components/SearchBar.jsx";
import PopularMovieList from "../components/PopularMovieList.jsx";
import PopularTV from "../components/PopularTV.jsx";
import './HomePage.css';

function HomePage() {


    return (
        <div className='app-container'>
            <div className='cover-container'>
                <h2 className='welcome'>Welcome.</h2>
                <h3>Millions of movies, TV shows and people to discover. Explore now. </h3>
                <SearchBar />
            </div>
            <div className='movies-container'>
                <PopularMovieList />
            </div>
            <div className='tv'>
                <PopularTV />
            </div>
        </div>
    )
}

export default HomePage;