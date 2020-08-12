import React from 'react'

import Welcome from './components/Welcome'

function App() {
  return (
    <div style={styles.container}>
      <Welcome />
    </div>
  )
}

const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#85FFBD',
    backgroundImage: 'linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)',
  },
}

export default App
