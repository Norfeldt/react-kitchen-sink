import React from 'react'
import { render } from '@testing-library/react'

import PhotoGrid from '.'

test('default renders 9 photos if provided 9', () => {
  const photos = [...Array(9).keys()]
  const { getAllByTestId } = render(<PhotoGrid photos={photos} />)

  expect(getAllByTestId(PHOTO_COMP_TEST_ID)).toHaveLength(9)
})

test('default renders n (n<9) photos n given', () => {
  const photos = [...Array(3).keys()]
  const { getAllByTestId } = render(<PhotoGrid photos={photos} />)

  expect(getAllByTestId(PHOTO_COMP_TEST_ID)).toHaveLength(photos.length)
})

test('default renders 9 photos if n (n>9) is given ', () => {
  const photos = [...Array(11).keys()]
  const { getAllByTestId } = render(<PhotoGrid photos={photos} />)

  expect(getAllByTestId(PHOTO_COMP_TEST_ID)).toHaveLength(9)
})

test('renders only 4 photos if number of photos is set to 4', () => {
  const photos = [...Array(30).keys()]
  const { getAllByTestId } = render(<PhotoGrid photos={photos} numberOfPhotos={4} />)

  expect(getAllByTestId(PHOTO_COMP_TEST_ID)).toHaveLength(4)
})
