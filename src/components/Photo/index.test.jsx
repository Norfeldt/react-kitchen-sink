import React from 'react'
import { render } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import Photo from '.'

// Not sure if overkill, but making sure that no real fetching occurs
const fakeServer = setupServer(
  rest.get('https://farm', (req, res, ctx) => res(ctx.status(200)))
)

beforeAll(() => fakeServer.listen())
afterEach(() => fakeServer.resetHandlers())
afterAll(() => fakeServer.close())

test('has a test id', () => {
  const { getByTestId } = render(<Photo />)

  expect(PHOTO_COMP_TEST_ID).toBeTruthy()
  expect(getByTestId(PHOTO_COMP_TEST_ID)).toBeInTheDocument()
})

test('builds img src url based on passed props', () => {
  const fakeProps = {
    id: 'some_id',
    secret: 'some_secret',
    server: 'some_server',
    farm: 123,
  }

  const { getByTestId } = render(<Photo {...fakeProps} />)

  const src = `https://farm${fakeProps.farm}.staticflickr.com/${fakeProps.server}/${fakeProps.id}_${fakeProps.secret}_z.jpg`
  expect(getByTestId(PHOTO_COMP_TEST_ID)).toHaveAttribute('src', src)
})
