import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import SearchBox from '.'
import { act } from 'react-dom/test-utils'

const fakeServer = setupServer(
  rest.get('https://api.flickr.com/services/rest/?method=flickr.photos.search', (req, res, ctx) =>
    res(ctx.status(200), ctx.json({ photos: { photo: [1, 2, 3] } }))
  )
)

beforeAll(() => fakeServer.listen())
afterEach(() => fakeServer.resetHandlers())
afterAll(() => fakeServer.close())

test('an input field with a placeholder', () => {
  const { getByLabelText, getByPlaceholderText } = render(<SearchBox />)

  expect(getByLabelText('Search Flickr')).toBeInTheDocument()
  expect(getByPlaceholderText('What are you looking for?')).toBeInTheDocument()
})

test('a submit search term button appearance', () => {
  const { getByLabelText } = render(<SearchBox />)

  expect(getByLabelText('Submit search')).toBeInTheDocument()
})

test('it calls Flickr REST request when submitting search term and clears search field', async () => {
  const fakeSetPhotos = jest.fn(() => {})
  const { getByRole } = render(<SearchBox setPhotos={fakeSetPhotos} />)

  const inputField = getByRole('textbox', { name: /search flickr/i })
  const submitButton = getByRole('button', { name: /submit search/i })

  userEvent.type(inputField, 'Finding Walley')
  fireEvent.click(submitButton)

  await waitFor(() => {
    expect(fakeSetPhotos).toHaveBeenCalledWith([1, 2, 3])
    expect(inputField.value).toBe('')
  })
})
test('does not try to fetch if search term is empty', () => {
  const { getByRole } = render(<SearchBox setPhotos={() => {}} />)
  const inputField = getByRole('textbox', { name: /search flickr/i })
  const submitButton = getByRole('button', { name: /submit search/i })

  expect(inputField.value).toEqual('')
  // fireEvent.click(submitButton)

  // TODO: finish up this one
})
