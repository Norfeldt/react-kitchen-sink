import React from 'react'
import styles from './Title.module.css'
import { SearchCamera } from 'icons'

function Title(props) {
  return (
    <div className={styles.container}>
      <SearchCamera />
      <h1>
        <span className={styles.verb} data-testid="verb">
          Search
        </span>{' '}
        <span className={styles.adjectives} data-testid="adjectives">
          Good Old
        </span>{' '}
        <span className={styles.noun} data-testid="noun">
          Flickr
        </span>
      </h1>
      <SearchCamera />
    </div>
  )
}

export default Title
