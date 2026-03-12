import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";
import {getPopularMovies, searchMovies} from "../services/api";

// const movies = [
//     { id: 1, title: "John Wick", release_date: "2014" },
//     { id: 2, title: "Titanic", release_date: "1997" },
//     { id: 3, title: "Star Wars", release_date: "1997" },
//     { id: 4, title: "The Matrix", release_date: "1999" },
//     { id: 5, title: "The Godfather", release_date: "1972" },
//     { id: 6, title: "The Dark Knight", release_date: "2008" },

// ]


function Home() {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const loadpopularMovies = async () => {
            try {
                const response = await getPopularMovies();
                setMovies(response);
            } catch (err) {
                console.log(err);
            } finally {
                console.log("finally");
            }
        }
        loadpopularMovies();
    }, []);

    const handleSearch = async (e)=> {
        e.preventDefault();
        if(!searchQuery.trim()) return;

        try{
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
        } catch (err) {
            console.log(err);
        } finally {
            console.log("finally");
        }
    }

return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    value={searchQuery} 
                    onChange={(e)=> setSearchQuery(e.target.value)} 
                    type="text" 
                    placeholder="Search for movies..." 
                    className="search-input"
                />
                <button type="submit" className="search-button">Search</button>
            </form>

           
            <div className="movies-grid"> 
                {movies.map(movie => (
                   <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    )
}


export default Home