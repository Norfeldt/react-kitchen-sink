import React, { useState } from 'react'
import Axios from 'axios'
import { MagnifyingGlass } from 'icons'

import styles from './SearchBox.module.css'

function SearchBox({ setPhotos }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [error, setError] = useState(false)

  const handleTyping = (event) => {
    event.preventDefault()
    setSearchTerm(event.currentTarget.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (searchTerm === '') {
      return null
    }

    try {
      const restURL = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${
        process.env.REACT_APP_API_KEY
      }&per_page=10&format=json&nojsoncallback=1'&text=${encodeURIComponent(searchTerm)}`
      const { data } = await Axios.get(restURL)
      const fetchedPhotos = data.photos.photo
      setPhotos(fetchedPhotos)
      setSearchTerm('')
    } catch (error) {
      if (!Axios.isCancel(error)) {
        setError(true)
        throw error
      }
    }
  }

  return (
    <section className={styles.container}>
      <form action="none">
        <input
          aria-label="Search Flickr"
          placeholder="What are you looking for?"
          value={searchTerm}
          onChange={handleTyping}
        />
        <button type="submit" aria-label="Submit search" onClick={handleSubmit}>
          <MagnifyingGlass />
        </button>
      </form>

      <dialog open={error}>Oops! Something went wrong..</dialog>
    </section>
  )
}

export default SearchBox
