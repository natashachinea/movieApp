import {useEffect, useState} from "react";
import { useNavigate,  useSearchParams} from "react-router-dom";
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
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate()
    const query = searchParams.get("query");
    const page = Number(searchParams.get("page")) || 1;
    const category = searchParams.get("category") || "multi";



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
                    <MediaCard results={results}  />
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
// 3. render people list in the search results
