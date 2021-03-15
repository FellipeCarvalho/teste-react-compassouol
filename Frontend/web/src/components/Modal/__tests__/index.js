import React from 'react'
import { shallow } from 'enzyme'

test('', () => {
  const title = shallow(<h1/>)
  expect(title.text()).toBePresent()
})