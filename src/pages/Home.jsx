import React from 'react'
import MovieCard from '../components/MovieCard'
import { useState, useEffect } from "react"

import "../css/Home.css"
import { searchMovies, getPopularMovies } from '../services/api'




// import "../css/index.css"
const Home = () => {
  const [searchQuery, setsearchQuery] = useState("")

  const [movies, setmovies] = useState([]);

  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setmovies(popularMovies)
      }
      catch (err) {
        console.log(err);
        setError("Failed to load movies...")
      }
      finally {
        setLoading(false)
      }
    }

    loadPopularMovies();

  }, [])



const  handleSearch = async (e) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) return
    if (loading) return
     
    setLoading(true)
    try{
      const searchResults = await searchMovies(searchQuery);
      setmovies(searchResults);
    }
    catch (err)
    {
      console.log(err);
      setError("Failed to search movies...")
    }
    finally {
      setLoading(false);

    }

    setsearchQuery("")

  }

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input type="text" placeholder="Search for Movies.." className="search-input" value={searchQuery}
          onChange={(e) => setsearchQuery(e.target.value)} />
        <button type="submit" className="search-button"> Submit </button>
      </form>

      {loading ? (
        <div className="loading">Loading...</div>
          ) :(
           <div className="movies-grid">
            {movies.map((movie) => (
              // Here we will Use Conditional Rendering Instead of Usual Rendering
              // movie.title.toLowerCase().startsWith(searchQuery) && (<MovieCard key={movie.id} movie={movie}/>)
              // But we will not do this Exactly Like this.We will Use API to do this Search Function
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
         
         )}




        </div>
      );
}

      export default Home;