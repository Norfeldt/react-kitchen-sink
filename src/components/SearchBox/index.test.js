import React from 'react'
import { render, fireEvent, act } from '@testing-library/react'
import * as axiosMock from 'axios'

import SearchBox from '.'

jest.mock('axios')

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
  axiosMock.get.mockImplementation(() =>
    Promise.resolve({ data: { photos: { photos: [] } } })
  )
  const { getByLabelText } = render(<SearchBox />)
  const input = getByLabelText('Search Flickr')
  const submitButton = getByLabelText('Submit search')

  await act(async () => {
    await fireEvent.change(input, { target: { value: 'Finding Wally' } })
    await fireEvent.click(submitButton)
  })

  expect(axiosMock.get).toHaveBeenCalledWith(
    `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_API_KEY}&per_page=10&format=json&nojsoncallback=1'&text=Finding%20Wally`
  )
})
