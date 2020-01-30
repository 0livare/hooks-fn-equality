import React from 'react'
import { mount } from 'enzyme'
import { act } from 'react-dom/test-utils'

export function mountArrayHook(hook) {
  return mountReactHook(hook, [], (destination, source) => {
    for (let i = 0; i < source.length; ++i) {
      destination[i] = source[i]
    }
  })
}

export function mountObjectHook(hook) {
  return mountReactHook(hook, {}, Object.assign)
}

/**
 * This function is mostly borrowed from:
 * https://dev.to/joepurnell1/how-i-m-testing-my-custom-react-hook-with-enzyme-and-jest-1deo
 */
function mountReactHook(hook, initialHookReturnValue, copyHookValues) {
  let Component = props => props.children(hook())
  let hookResult = initialHookReturnValue
  let componentMount

  act(() => {
    componentMount = mount(
      <Component>
        {hookValues => {
          copyHookValues(hookResult, hookValues)
          return null
        }}
      </Component>
    )
  })

  return { componentMount, hookResult }
}
