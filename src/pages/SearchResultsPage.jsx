import {useEffect, useState} from "react";
import {Link, useNavigate, useParams, useSearchParams} from "react-router-dom";
import {search} from "../Api.jsx";
import './SearchResultsPage.css';
import SearchBar from "../components/SearchBar.jsx";
import Image from "../components/Image.jsx";
import {createStyles, Card, Text, rem, Flex, Pagination} from '@mantine/core';
import Categories from "../components/Categories.jsx";

const useStyles = createStyles((theme) => ({
    card: {
        borderRadius: rem(10),
        border: 'lightgray solid 1px',
        maxHeight: rem(160),
        minHeight: rem(160),
        width: rem(1000),
        padding: rem(0),
        margin: rem(10),
        overflow: 'hidden',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    },
    image: {
        margin: rem(0),
        padding: rem(0),
        height: "auto",
    },
    description: {
        padding: rem(10),
        margin:'0%',
        overflow: 'hidden',

    },


}));
function SearchResultsPage() {
    const { classes } = useStyles();
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
                    {results.map(result => (
                            <Card className={classes.card} style={{padding: 0}} key={result.id} >
                                <Flex justify="flex-start"
                                      align="flex-start"
                                      direction="row">
                                <Card.Section className={classes.image}>
                                    <Link to={`/${result.media_type}/${result.id}`}>
                                    <Image src={result.poster_path} alt={result.title}  />
                                    </Link>
                                </Card.Section>
                                <Card.Section className={classes.description} style={{margin: 0}}>
                                    <Flex
                                          align="flex-start"
                                          justify='flex-start'
                                          direction="column"
                                          gap='5px'>
                                            <div className={classes.title}>
                                                <Link to={`/tv/${result.id}`}>
                                                    <Text fz="sm" fw={700}>{result.name}</Text>
                                                </Link>
                                                <Link to={`/movie/${result.id}`}>
                                                    <Text fz="sm" fw={700}>{result.title}</Text>
                                                </Link>
                                            </div>
                                            <Text fz='xs' c='dimmed'> Release date: {result.release_date}{result.first_air_date}</Text>
                                            <Text mt='sm' c='dimmed' fz='xs' >
                                                {result.overview}
                                            </Text>
                                    </Flex>
                                </Card.Section>
                                </Flex>
                            </Card>
                    ))}
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
