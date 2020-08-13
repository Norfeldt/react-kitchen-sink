import React from 'react'
import { render, wait } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import App from 'App'
import { act } from 'react-dom/test-utils'

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

test('it calls Flickr REST request on initial load to show some photos', async () => {
  const { getAllByTestId } = render(<App />)

  await act(async () => {})
  await wait()

  expect(getAllByTestId(PHOTO_COMP_TEST_ID)).toHaveLength(3)
})
