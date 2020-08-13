import React from 'react'

function Welcome(props) {
  return (
    <div style={styles.container}>
      <span style={styles.emoji} role="img" aria-label="search emoji">
        🕵️‍♀️
      </span>
      Search Good Old Flickr!
      <span style={styles.emoji} role="img" aria-label="search emoji">
        🕵️‍♂️
      </span>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: '200%',
  },
  emoji: {
    fontSize: '300%',
  },
}

export default Welcome
