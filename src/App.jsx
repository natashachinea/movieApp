import { Routes, Route, Link, useSearchParams } from 'react-router-dom';
import MovieDetailsPage from "./pages/MovieDetailsPage.jsx";
import SearchResultsPage from "./pages/SearchResultsPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import TVShowDetailsPage from "./pages/TVShowDetailsPage.jsx";
import {HeaderAction} from "./components/Header.jsx";
import Categories from "./components/Categories.jsx";

function App() {



    return (
        <div>

            <HeaderAction  />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/movie/:id" element={<MovieDetailsPage />} />
                <Route path="/tv/:id" element={<TVShowDetailsPage />} />
                <Route path="/search" element={<SearchResultsPage />} />
            </Routes>
        </div>
    );
}

export default App;
