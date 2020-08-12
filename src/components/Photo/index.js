import React from 'react'

function Photo({ farm, server, id, secret }) {
  const src = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_q.jpg`
  return <img data-testid="flickr-grid-photo" src={src} />
}

export default Photo
