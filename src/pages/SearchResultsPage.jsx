import {useEffect, useState} from "react";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import {search} from "../Api.jsx";
import './SearchResultsPage.css';
import SearchBar from "../components/SearchBar.jsx";
import { Pagination} from '@mantine/core';
import Categories from "../components/Categories.jsx";
import MediaCard from "../components/MediaCard.jsx";
import ItemList from "../components/ItemList.jsx";
import PersonList from "../components/PersonList.jsx";


function SearchResultsPage() {
    const [results, setResults] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [searchParamsValue, setSearchParams] = useSearchParams();
    const category = searchParamsValue.get("category") || "multi";
    const query = searchParamsValue.get("query");
    const page = Number(searchParamsValue.get("page")) || 1;
    const navigate = useNavigate()
    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search);
    const categoryQuery = searchQuery.get("category")


//useEffect hook that runs when the page number changes and updates the results, it's the first thing that runs when the page loads
    useEffect(() => {
        const executeSearch = async () => {
            const response = await search(query, category, page);
            setResults(response.results);
            setTotal(response.total_results);
            setTotalPages(response.total_pages);
        }
        if (query) {
            executeSearch()
                .catch(error => {
                    console.error(error);
                })}

    }, [query, page, category]);



//getComponents function takes in the category and results and returns the appropriate component from where does it
// the categoryQuery variable which is the category from the url search params.
// It's the category that the user clicked on.
    const getComponent = () => {
        switch (categoryQuery) {
            case "movie":
            case "tv":
            case "collection":
                return <div>
                    <MediaCard results={results}/>
                </div>
            case "keyword":
            case "company":
            case "network":
                return  <div>
                    <ItemList results={results}/>
                </div>
            case "person":
                return <PersonList results={results}/>

            default:
                return <MediaCard results={results}/>
        }
    }

//handlePageChange is a function that takes a page number and updates the page number in the URL
    const handlePageChange = (newNumber) => {
        navigate(`/search?category=${category}&query=${query}&page=${newNumber}`);
    }


    return (
        <div >
            <div className='bar'>
                <SearchBar />
            </div>
            <div className='results-container'>
                <div className='categories-section'>
                    <Categories query={query} category={category} page={page}/>
                </div>
                <div className="search-results">
                    {getComponent()}
                </div>
                </div>
            <div className='pagination'>
                <Pagination value={page} onChange={handlePageChange} total={totalPages} />
            </div>
        </div>
    );
}

export default SearchResultsPage;

//details I need to fix:
// 1. the search bar is not working properly (catch errors, misspells, missing images, and no found titles)
//there is an error in the console when the network fetch is clicked. it says that the api key is missing.
// the app is crashing when People is clicked.