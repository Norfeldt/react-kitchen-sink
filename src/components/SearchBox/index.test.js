import React from 'react'
import { render } from '@testing-library/react'

import SearchBox from '.'

test('there is an input field with a placeholder', () => {
  const { getByLabelText } = render(<SearchBox />)

  expect(getByLabelText('Search Flickr')).toBeInTheDocument()
})

test('three is a submit search term button with the word SEARCH', () => {
  const { getByLabelText } = render(<SearchBox />)

  expect(getByLabelText('Submit search')).toBeInTheDocument()
  expect(getByLabelText('Submit search')).toHaveTextContent('SEARCH')
})
