import React from 'react'
import { render } from '@testing-library/react'

import Welcome from './'

test('renders a warm welcome message', () => {
  const { getByText } = render(<Welcome />)
  const welcomeMessage = /👋 hi there!/i

  expect(getByText(welcomeMessage)).toBeInTheDocument()
})
