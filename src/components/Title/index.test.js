import React from 'react'
import { render, screen, act, fireEvent, waitFor } from '@testing-library/react'

import Welcome from '.'
test('renders a title', () => {
  const { getByText } = render(<Welcome />)
  const title = /flickr/i

  expect(getByText(title)).toBeInTheDocument()
})

test('renders a responsive title', () => {
  const { rerender, container } = render(<Welcome />)
  let title = /search good old flickr/i

  expect(screen.getByText('Good Old')).toBeVisible()
  expect(container).toHaveTextContent(title)

  // window.innerWidth = 199
  // fireEvent(window, new Event('resize'))
  // rerender(<Welcome />)

  waitFor(() => expect(screen.getByText('Good Old')).not.toBeVisible())
})
