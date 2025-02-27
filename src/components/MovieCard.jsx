import React from 'react'
import "../css/MovieCard.css"
import { useMovieContext } from '../contexts/MovieContext'
// What specific things do we need to pass to this Component ? movie details such as image , or other details etc.
// We will pass movie details as props to this component
const MovieCard = ({ movie }) => {
    const { isFavorite , addToFavorites , removeFromFavorites} = useMovieContext()
    const favorite = isFavorite(movie.id)
  function onFavouriteClick(e) {
    e.preventDefault();
    if (favorite) removeFromFavorites(movie.id)
    else addToFavorites(movie)
  }


  return (

    // {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" /> */ }
    < div className="movie-card" >
      <div className="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <div className="movie-overlay">
          <button className={`favorite-btn ${favorite ? 'active' : ''}`} onClick={onFavouriteClick}>
            ♥
            {/* Alt + 3 */}
          </button>
        </div>
      </div>

      <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>
             {movie.release_date?.split("-")[0]}
          </p>
      </div>

    </div >

  )
}

export default MovieCard  