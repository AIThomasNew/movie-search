import { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  // const [film, setFilm] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('http://www.omdbapi.com/?apikey=e6c21204=batman')
        const data = await response.json()
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  return (
    <div className="App">
      <div>Movie Search </div>
    </div>
  )
}

export default App
