import React, { useState } from 'react'
import axios from 'axios'

import './index.css'

function SearchBox({ setPhotos}) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleTyping = (event) => {
    event.preventDefault()
    setSearchTerm(event.currentTarget.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const restURL = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${
        process.env.REACT_APP_API_KEY
      }&per_page=10&format=json&nojsoncallback=1'&text=${encodeURIComponent(
        searchTerm
      )}`
      const { data } = await axios.get(restURL)
      const fetchedPhotos = data.photos.photo
      setPhotos(fetchedPhotos)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section style={styles.container}>
      <form action="" method="" style={styles.form}>
        <input
          aria-label="Search Flickr"
          style={styles.input}
          value={searchTerm}
          onChange={handleTyping}
        />
        <button
          aria-label="Submit search"
          style={styles.button}
          onClick={handleSubmit}
        >
          SEARCH
        </button>
      </form>
    </section>
  )
}

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    flexDirection: 'row',
    padding: '0.3rem',
    border: 'thin solid #85ffbd',
    background: 'rgba(255, 255, 255, 0.5)',
    borderRadius: '0.4rem',
  },
  input: {
    flexGrow: 1,
    height: '100%',
    border: 'none',
    background: 'transparent',
    fontSize: '1.8rem',
  },
  button: {
    height: '100%',
    border: '1px solid rgba(0,0,0,0.10)',
    background: '#85ffbd',
    color: 'white',
    fontSize: '2rem',
    fontWeight: 'bold',
    letterSpacing: '0.15rem',
    textShadow: '1px 1px 3px rgba(0,0,0,0.80)',
    borderRadius: '0.4rem',
  },
}

export default SearchBox
