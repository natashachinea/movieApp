import {useEffect, useState} from "react";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import {search} from "../Api.jsx";
import './SearchResultsPage.css';
import SearchBar from "../components/SearchBar.jsx";
import { Pagination} from '@mantine/core';
import Categories from "../components/Categories.jsx";
import MediaCard from "../components/MediaCard.jsx";
import ItemList from "../components/ItemList.jsx";



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
                return  <div>"keyword", "company", "network"</div>
            case "person":
                return <div>"person"</div>

            default:
                return <MediaCard results={results}/>
        }
    }

    const handlePageChange = (newNumber) => {
        navigate(`/search?category=${category}&query=${query}&page=${newNumber}`);
    }



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
//2. transform the vote average into rating stars or something similar
