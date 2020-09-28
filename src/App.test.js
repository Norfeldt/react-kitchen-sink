import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import App from 'App'

const fakeServer = setupServer(
  rest.get(
    'https://api.flickr.com/services/rest/?method=flickr.photos.search',
    (req, res, ctx) =>
      res(ctx.status(200), ctx.json({ photos: { photo: [1, 2, 3] } }))
  )
)

beforeAll(() => fakeServer.listen())
afterEach(() => fakeServer.resetHandlers())
afterAll(() => fakeServer.close())

test('it calls Flickr REST request on initial load to show some photos',  () => {
  const { getAllByTestId } = render(<App />)

  waitFor(() => expect(getAllByTestId(PHOTO_COMP_TEST_ID)).toHaveLength(3) )
})
