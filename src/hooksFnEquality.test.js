import { act } from 'react-dom/test-utils'

import { useCorrectCallback } from './useCorrectCallback'
import { useMemoryHack } from './useMemoryHack'
import { mountArrayHook } from './util'

let hookResult

beforeEach(() => {
  let useHack = false
  let testHook = useHack ? useMemoryHack : useCorrectCallback

  let mountedHook = mountArrayHook(testHook)
  hookResult = mountedHook.hookResult
})

it('returns constant value references', () => {
  let storedReferences = [...hookResult]
  act(() => {
    let add = hookResult[1]
    console.log('add is:', add)
    add(4)
  })
  expect(storedReferences.length).toEqual(hookResult.length)

  console.log('storedReferences', storedReferences)
  console.log('hookResult', hookResult)

  expect(hookResult[0]).toEqual(storedReferences[0])
  expect(hookResult[1]).toEqual(storedReferences[1])
})
