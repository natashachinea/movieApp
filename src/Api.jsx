import axios from 'axios';


//get popular movies
const getPopularMovies = () => {

    const apiKey = 'd4f76f51ce49c6ba9868883742e5fa03';
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

    return axios.get(apiUrl)
        .then(response => {
         // Use the data returned from the API
          return response.data.results;
        })
        .catch(error => {
            // Handle any errors that occur during the request
            console.error(error);
        })
}


// get movies/tv shows/ people by search query


const getPopularTV = () => {

    const apiKey = 'd4f76f51ce49c6ba9868883742e5fa03';
    const apiUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`;

    return axios.get(apiUrl)
        .then(response => {
            // Use the data returned from the API
            return response.data.results;
        })
        .catch(error => {
            // Handle any errors that occur during the request
            console.error(error);
        })

}
//get movie by movie_id
const getMovieDetails = (movie_id) => {
    const apiKey = 'd4f76f51ce49c6ba9868883742e5fa03';

    return axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error(error);
        })
}

const getTVDetails = (tv_id) => {
    const apiKey = 'd4f76f51ce49c6ba9868883742e5fa03';

    return axios.get(`https://api.themoviedb.org/3/tv/${tv_id}?api_key=${apiKey}`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error(error);
        })
}




    const search = (query, category = "multi", page = 1 ) => {
        const apiKey = 'd4f76f51ce49c6ba9868883742e5fa03';

        return axios.get(`https://api.themoviedb.org/3/search/${category}?api_key=${apiKey}&query=${query}&page=${page}`)
            .then(response => {
                return response.data;
            }).catch(error => {
            console.error(error);
        })
    }


// const searchTerm = async (query, page = 1) => {
//     const apiKey = 'd4f76f51ce49c6ba9868883742e5fa03';
//     const apiUrl = `https://api.themoviedb.org/3/search/multi`;
//     const response = await axios.get(apiUrl, {
//         params: {
//             api_key: apiKey,
//             query,
//             page: page
//         }
//     });
//
//     return response.data;
// }




export {getPopularMovies, getMovieDetails, getPopularTV, getTVDetails, search};
export default getPopularMovies;