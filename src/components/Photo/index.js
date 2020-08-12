import React from 'react'

function Photo({ farm, server, id, secret, title }) {
  const src = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_z.jpg`
  return (
    <img
      width="300px"
      style={styles.container}
      data-testid="flickr-grid-photo"
      src={src}
      alt={title}
    />
  )
}

const styles = {
  container: {
    borderRadius: '1.5rem',
  },
}

export default Photo
