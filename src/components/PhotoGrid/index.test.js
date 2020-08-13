import React from 'react'
import { render } from '@testing-library/react'

import PhotoGrid from '.'

test('default renders 9 photos if provided 9', () => {
  const photos = [...Array(10).keys()]
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
  const { getAllByTestId } = render(
    <PhotoGrid photos={photos} numberOfPhotos={4} />
  )

  expect(getAllByTestId(PHOTO_COMP_TEST_ID)).toHaveLength(4)
})

test('renders with masonry grid style', () => {
  const photos = [...Array(9).keys()]
  const { container } = render(<PhotoGrid photos={photos} />)

  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="my-masonry-grid"
      >
        <div
          class="my-masonry-grid_column"
          style="width: 33.333333333333336%;"
        >
          <div
            class="masonry-item"
          >
            <img
              data-testid="flickr-grid-photo"
              src="https://farmundefined.staticflickr.com/undefined/undefined_undefined_z.jpg"
              style="border-radius: 1.5rem; opacity: 0.8;"
              width="300px"
            />
          </div>
          <div
            class="masonry-item"
          >
            <img
              data-testid="flickr-grid-photo"
              src="https://farmundefined.staticflickr.com/undefined/undefined_undefined_z.jpg"
              style="border-radius: 1.5rem; opacity: 0.8;"
              width="300px"
            />
          </div>
          <div
            class="masonry-item"
          >
            <img
              data-testid="flickr-grid-photo"
              src="https://farmundefined.staticflickr.com/undefined/undefined_undefined_z.jpg"
              style="border-radius: 1.5rem; opacity: 0.8;"
              width="300px"
            />
          </div>
        </div>
        <div
          class="my-masonry-grid_column"
          style="width: 33.333333333333336%;"
        >
          <div
            class="masonry-item"
          >
            <img
              data-testid="flickr-grid-photo"
              src="https://farmundefined.staticflickr.com/undefined/undefined_undefined_z.jpg"
              style="border-radius: 1.5rem; opacity: 0.8;"
              width="300px"
            />
          </div>
          <div
            class="masonry-item"
          >
            <img
              data-testid="flickr-grid-photo"
              src="https://farmundefined.staticflickr.com/undefined/undefined_undefined_z.jpg"
              style="border-radius: 1.5rem; opacity: 0.8;"
              width="300px"
            />
          </div>
          <div
            class="masonry-item"
          >
            <img
              data-testid="flickr-grid-photo"
              src="https://farmundefined.staticflickr.com/undefined/undefined_undefined_z.jpg"
              style="border-radius: 1.5rem; opacity: 0.8;"
              width="300px"
            />
          </div>
        </div>
        <div
          class="my-masonry-grid_column"
          style="width: 33.333333333333336%;"
        >
          <div
            class="masonry-item"
          >
            <img
              data-testid="flickr-grid-photo"
              src="https://farmundefined.staticflickr.com/undefined/undefined_undefined_z.jpg"
              style="border-radius: 1.5rem; opacity: 0.8;"
              width="300px"
            />
          </div>
          <div
            class="masonry-item"
          >
            <img
              data-testid="flickr-grid-photo"
              src="https://farmundefined.staticflickr.com/undefined/undefined_undefined_z.jpg"
              style="border-radius: 1.5rem; opacity: 0.8;"
              width="300px"
            />
          </div>
          <div
            class="masonry-item"
          >
            <img
              data-testid="flickr-grid-photo"
              src="https://farmundefined.staticflickr.com/undefined/undefined_undefined_z.jpg"
              style="border-radius: 1.5rem; opacity: 0.8;"
              width="300px"
            />
          </div>
        </div>
      </div>
    </div>
  `)
})
