import React, { useState, useEffect } from 'react'
import Axios from 'axios'

import SearchBox from './components/SearchBox'
import PhotoGrid from './components/PhotoGrid'
import Title from './components/Title'
import styles from './App.module.css'

function App() {
  const [photos, setPhotos] = useState([])

  const fetchInitialPhotos = async (cancelToken) => {
    try {
      const restURL = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_API_KEY}&per_page=10&format=json&nojsoncallback=1'&text=planning`
      const { data } = await Axios.get(restURL, { cancelToken })
      const fetchedPhotos = data.photos.photo
      setPhotos(fetchedPhotos)
    } catch (error) {
      if (!Axios.isCancel(error)) {
        throw error
      }
    }
  }

  useEffect(() => {
    const source = Axios.CancelToken.source()
    fetchInitialPhotos(source.token)
    return () => source.cancel()
  }, [])

  return (
    <div className={styles.container}>
      <Title />
      <SearchBox setPhotos={setPhotos} />
      <PhotoGrid photos={photos} />
    </div>
  )
}

export default App
