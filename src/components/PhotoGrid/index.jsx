import React from 'react'
import Masonry from 'react-masonry-css'
import styles from './PhotoGrid.module.css'

import Photo from 'components/Photo'

function PhotoGrid({ photos = [], numberOfPhotos = 9 }) {
  photos = photos.filter((value, index) => index + 1 <= numberOfPhotos ?? value)

  const breakpointColumnsObj = {
    default: 4,
    1300: 3,
    900: 2,
    700: 1,
  }

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles.grid}
      columnClassName={styles.column}>
      {photos &&
        photos.map(({ id, secret, server, farm }, index) => (
          <Photo key={index} id={id} secret={secret} server={server} farm={farm} />
        ))}
    </Masonry>
  )
}

export default PhotoGrid
