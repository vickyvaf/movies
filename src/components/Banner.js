import { useEffect, useState } from 'react'
import axios from 'axios'
import requests from './request'

const Banner = () => {
  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    const response = await axios.get(`https://api.themoviedb.org/3${requests.trending}`)
    const res = response.data.results
    setMovies(res[Math.floor(Math.random() * res.length - 1)])
    return res
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div className='banner'>
      <img src={`https://image.tmdb.org/t/p/original${movies?.backdrop_path}`} alt=""/>
      <div className='banner-contents'>
        <h1 className='banner-title'>{
          movies?.original_name || movies?.name || movies?.title
        }</h1>
        <div className='banner-desc'>
          <p>{movies?.overview}</p>
        </div>
      </div>
    </div>
  )
}

export default Banner