import React from 'react'
import { render, fireEvent, act, wait } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import SearchBox from '.'

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

test('there is an input field with a placeholder', () => {
  const { getByLabelText } = render(<SearchBox />)

  expect(getByLabelText('Search Flickr')).toBeInTheDocument()
})

test('three is a submit search term button with the word SEARCH', () => {
  const { getByLabelText } = render(<SearchBox />)

  expect(getByLabelText('Submit search')).toBeInTheDocument()
  expect(getByLabelText('Submit search')).toHaveTextContent('SEARCH')
})

test('it calls Flickr REST request when submitting search term', async () => {
  const fakeSetPhotos = jest.fn(() => {})
  const { getByLabelText } = render(<SearchBox setPhotos={fakeSetPhotos} />)
  const input = getByLabelText('Search Flickr')
  const submitButton = getByLabelText('Submit search')

  await act(async () => {
    await fireEvent.change(input, { target: { value: 'Finding Wally' } })
    await fireEvent.click(submitButton)
  })

  await wait()

  expect(fakeSetPhotos).toHaveBeenCalledWith([1, 2, 3])
})
