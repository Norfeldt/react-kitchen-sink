import React from 'react'
import styles from './Photo.module.css'

function Photo({ farm, server, id, secret, title }) {
  const src = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_z.jpg`
  return (
    <div className={styles.container}>
      <img width="100%" data-testid="flickr-grid-photo" src={src} alt={title} />
    </div>
  )
}

export default Photo
