import React from 'react'



import "../css/Favorites.css"
import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard'

// import "../css/index.css"
const Favorites = () => {
  const { favorites } = useMovieContext();

  if (favorites.length > 0) {
    return (
      <div className='favorites'>
        <h2>Favorite Movies</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    )
  }

 return (
  <div className="favorites-empty">
    <h2>No Favorite Movie Yet </h2>
    <p>Start Adding your favorites here and they will appear here</p>
  </div>
 )
}






export default Favorites