import React from 'react'

import Photo from 'components/Photo'

function PhotoGrid({ photos, numberOfPhotos = 9 }) {
  photos = photos ? photos.slice(0, numberOfPhotos) : []

  return (
    <div style={style.container}>
      {photos &&
        photos.map(({ id, secret, server, farm }, index) => (
          <div key={index} style={style.item}>
            <Photo id={id} secret={secret} server={server} farm={farm} />
          </div>
        ))}
    </div>
  )
}

const style = {
  container: {
    display: 'grid',
    width: '80%',
    margin: '1rem auto',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '1rem',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    display: 'grid',
    alignContent: 'center',
    justifyItems: 'center',
    overflow: 'hidden',
  },
}

export default PhotoGrid
