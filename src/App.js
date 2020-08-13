import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Welcome from './components/Welcome'
import PhotoGrid from 'components/PhotoGrid'
import SearchBox from 'components/SearchBox'

function App() {
  const [photos, setPhotos] = useState([])

  const fetchInitialPhotos = async () => {
    try {
      const restURL = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_API_KEY}&per_page=10&format=json&nojsoncallback=1'&text=planning`
      const { data } = await axios.get(restURL)
      const fetchedPhotos = data.photos.photo
      setPhotos(fetchedPhotos)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchInitialPhotos()
  }, [])

  return (
    <div style={styles.container}>
      <SearchBox />
      <Welcome />
      <PhotoGrid photos={photos} />
    </div>
  )
}

const styles = {
  container: {
    marginBottom: '3rem',
  },
}

export default App
