import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Welcome from './components/Welcome'
import PhotoGrid from 'components/PhotoGrid'
import SearchBox from 'components/SearchBox'
import Axios from 'axios'

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
    return source.cancel()
  }, [])

  return (
    <div style={styles.container}>
      <Welcome />
      <SearchBox setPhotos={setPhotos} />
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
