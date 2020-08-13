import React from 'react'
import Masonry from 'react-masonry-css'
import './index.css'

import Photo from 'components/Photo'

function PhotoGrid({ photos, numberOfPhotos = 9 }) {
  const imgs = photos ? photos.slice(0, numberOfPhotos) : []

  const breakpointColumnsObj = {
    default: 4,
    1300: 3,
    900: 2,
    700: 1,
  }

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {imgs &&
        imgs.map(({ id, secret, server, farm }, index) => (
          <div key={index} className="masonry-item">
            <Photo id={id} secret={secret} server={server} farm={farm} />
          </div>
        ))}
    </Masonry>
  )
}

export default PhotoGrid
