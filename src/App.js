import React from 'react'

import Welcome from './components/Welcome'
import PhotoGrid from 'components/PhotoGrid'
import SearchBox from 'components/SearchBox'

function App() {
  const photos = [
    {
      id: '50218408732',
      owner: '189679156@N04',
      secret: '70517c27eb',
      server: '65535',
      farm: 66,
      title: 'Online Insurance For Two Wheeler',
      ispublic: 1,
      isfriend: 0,
      isfamily: 0,
    },
    {
      id: '50218402077',
      owner: '113662236@N07',
      secret: '465ef7349f',
      server: '65535',
      farm: 66,
      title:
        'Marsha Fontaine MA, LMHC | Food Is Not The Enemy Eating Disorders Counseling',
      ispublic: 1,
      isfriend: 0,
      isfamily: 0,
    },
    {
      id: '50218393217',
      owner: '144823040@N05',
      secret: 'ae8c26f01b',
      server: '65535',
      farm: 66,
      title: "Shouldn't we have a Plan?",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0,
    },
    {
      id: '50218372907',
      owner: '84263725@N08',
      secret: '9d6480d79a',
      server: '65535',
      farm: 66,
      title: 'A new journey',
      ispublic: 1,
      isfriend: 0,
      isfamily: 0,
    },
    {
      id: '50217476033',
      owner: '163499736@N06',
      secret: '7af61d53db',
      server: '0',
      farm: 0,
      title:
        'Best Marketing Plan of Action for First Year of a Bootstrapped eCommerce Business In India - DigiChefs',
      ispublic: 1,
      isfriend: 0,
      isfamily: 0,
    },
    {
      id: '50217487978',
      owner: '189664742@N05',
      secret: 'e049d6d69e',
      server: '65535',
      farm: 66,
      title: 'Homes for sale in Gilroy, CA | Coldwell Banker',
      ispublic: 1,
      isfriend: 0,
      isfamily: 0,
    },
    {
      id: '50218358212',
      owner: '187956218@N07',
      secret: 'f67ea2b1c8',
      server: '65535',
      farm: 66,
      title: 'Japanischer, Knoeterich, Fallopia, japonica, Eindringling',
      ispublic: 1,
      isfriend: 0,
      isfamily: 0,
    },
    {
      id: '50217476568',
      owner: '188455120@N04',
      secret: '8778572b93',
      server: '65535',
      farm: 66,
      title: 'Gerrit Kastein,',
      ispublic: 1,
      isfriend: 0,
      isfamily: 0,
    },
    {
      id: '50217473903',
      owner: '86741979@N08',
      secret: 'de3dc5f055',
      server: '65535',
      farm: 66,
      title: 'HMCS Regina and HMCS Winnipeg Sail Pass',
      ispublic: 1,
      isfriend: 0,
      isfamily: 0,
    },
    {
      id: '50217473918',
      owner: '86741979@N08',
      secret: 'b2e4dd90ca',
      server: '65535',
      farm: 66,
      title: 'HMCS Regina Pre RIMPAC',
      ispublic: 1,
      isfriend: 0,
      isfamily: 0,
    },
  ]

  return (
    <div style={styles.container}>
      <SearchBox />
      <Welcome />
      <PhotoGrid photos={photos} />
    </div>
  )
}

const styles = {
  container: {
    // margin: '0 10%',
    marginBottom: '3rem',
  },
}

export default App
