const API_KEY = "f5a92f03fe2bb85f5668f0a43d6e4700"
const BASE_URL = "https://api.themoviedb.org/3"


export const getPopularMovies = async ()=> {
    const response =await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
}



export const searchMovies = async (query)=> {
    const response =await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    const data = await response.json();
    return data.results;
}

