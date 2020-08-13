import React from 'react'
import { render, wait } from '@testing-library/react'
import * as axiosMock from 'axios'

import App from 'App'

jest.mock('axios')

test('it calls Flickr REST request on initial load', async () => {
  axiosMock.get.mockImplementation(() =>
    Promise.resolve({ data: { photos: { photo: [1, 2, 3] } } })
  )
  render(<App />)

  await wait()

  expect(axiosMock.get).toHaveBeenCalledTimes(1)
  expect(axiosMock.get).toHaveBeenCalledWith(
    `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_API_KEY}&per_page=10&format=json&nojsoncallback=1'&text=planning`
  )
})
