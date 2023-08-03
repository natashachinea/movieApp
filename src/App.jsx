import { Routes, Route } from 'react-router-dom';
import SearchResultsPage from "./pages/SearchResultsPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import {HeaderAction} from "./components/Header.jsx";
import MovieDetailsPage from "./pages/MovieDetailsPage.jsx";
import TVShowDetailsPage from "./pages/TVShowDetailsPage.jsx";
import {Footer} from "./components/Footer.jsx";

function App() {



    return (
        <div>

            <HeaderAction  />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path='/movie/:id' element={<MovieDetailsPage />} />
                <Route path="/tv/:id" element={<TVShowDetailsPage />} />
                <Route path="/search" element={<SearchResultsPage />} />

            </Routes>
            <Footer />
        </div>
    );
}

export default App;
