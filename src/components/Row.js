import axios from 'axios'
import { useEffect, useState } from "react"

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    const response = await axios.get(`https://api.themoviedb.org/3${fetchUrl}`)
    setMovies(response.data.results)
    return response
  }

  useEffect(() => {
    getMovies()
  })

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row-posters'>
        {movies.map((movie) => {
          return (
            <img
              className={`row-poster ${isLargeRow && "row-posterLarge"}`}
              src={`https://image.tmdb.org/t/p/original${isLargeRow ? movie?.poster_path : movie.backdrop_path}`}
              alt={movie.name}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Row