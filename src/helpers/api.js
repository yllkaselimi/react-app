import axios from "axios";

let api_url = "https://api.themoviedb.org/3/discover/movie?api_key=3e52e2f5350ae60de5e2fc58e818d2a0";

export default async function getMovies(page = null) {
    if(page !== null) api_url += '&page=' + page;
    const response = await axios.get(api_url);
    const {data} = response;
    return data; 
}

export async function getMovieById(id) {
    const api = `https://api.themoviedb.org/3/movie/${id}?api_key=3e52e2f5350ae60de5e2fc58e818d2a0`
    const response = await axios.get(api);
    const {data} = response;
    return data; 
}

export async function searchMovies(search) {
    const api = `https://api.themoviedb.org/3/search/movie?query=${search.toLowerCase()}&api_key=3e52e2f5350ae60de5e2fc58e818d2a0`
    const response = await axios.get(api);
    const {data} = response;
    return data; 
}