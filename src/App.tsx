import { FC, useEffect, useState } from 'react'
import './App.css'
import { getMovie } from './api'
import { Movie } from './api/types'

// css styles, font, framer motion

const App = () => {
  const [movie, setMovie] = useState<Movie | null>(null)
  const [movieId, setMovieId] = useState<number | null>(null)

  useEffect(() => {
    if (movieId !== null) {
      getMovie(movieId).then(setMovie)
    }
  }, [movieId])

  return (
    <div className="App">
      <div className="header">
        <div className="search-container">
          <h2 className="search-container__header">MOVIE</h2>
          <input
            className="search-container__input"
            placeholder="SEARCH"
            type="text"
            onChange={(e) => setMovieId(+e.target.value)}
            value={movieId || ''}
          />
          {movie && <MovieCard movie={movie} />}
        </div>
      </div>

      <div className="main"></div>
      <div className="footer"></div>
    </div>
  )
}

const MovieCard: FC<{ movie: Movie }> = ({ movie }) => {
  return (
    <h2>
      {movie.original_title} ({movie.release_date})
    </h2>
  )
}

export default App
