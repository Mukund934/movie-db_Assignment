import React from 'react'

function SearchBar({ query, setQuery }) {
  return (
    <input
      type="text"
      className="search-input"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  )
}

export default SearchBar
