import React from 'react'

function MovieCard({ movie }) {
  const { title, poster_path, vote_average, overview, release_date } = movie
  const posterURL = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : 'https://via.placeholder.com/200x300?text=No+Image'

  return (
    <div className="movie-card">
      <img src={posterURL} alt={title} />
      <div className="movie-info">
        <h2>{title}</h2>
        <p>⭐ {vote_average} | 📅 {release_date}</p>
        <p className="overview">{overview.slice(0, 120)}...</p>
      </div>
    </div>
  )
}

export default MovieCard
