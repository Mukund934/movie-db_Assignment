import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import SearchBar from './SearchBar'

const API_KEY = import.meta.env.VITE_TMDB_API_KEY

function MovieExplorer() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [query, setQuery] = useState('')

  useEffect(() => {
    fetchPopularMovies()
  }, [])

  const fetchPopularMovies = async () => {
    try {
      setLoading(true)
      setError('')
      const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      const data = await res.json()
      setMovies(data.results || [])
    } catch (err) {
      setError('Failed to fetch movies.')
    } finally {
      setLoading(false)
    }
  }

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="explorer">
      <SearchBar query={query} setQuery={setQuery} />
      {loading ? (
        <p className="loading">Loading movies...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="movie-grid">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  )
}

export default MovieExplorer
