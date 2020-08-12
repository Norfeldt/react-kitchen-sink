import React from 'react'

function Welcome(props) {
  return <div style={styles.container}>👋 Hi there!</div>
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '500%',
    textAlign: 'center',
  },
}

export default Welcome
