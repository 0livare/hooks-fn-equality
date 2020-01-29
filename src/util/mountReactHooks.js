import React from 'react'
import { shallow } from 'enzyme'
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

function mountReactHook(hook, initialHookReturnValue, copyHookValues) {
  let Component = props => props.children(hook())
  let hookResult = initialHookReturnValue
  let componentMount

  act(() => {
    componentMount = shallow(
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
