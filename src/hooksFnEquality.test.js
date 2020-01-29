import { act } from 'react-dom/test-utils'

import { useCorrectCallback } from './useCorrectCallback'
import { useMemoryHack } from './useMemoryHack'
import { mountObjectHook } from './util'

it('works with the memory hack', () => {
  let hookResult = executeHook(useMemoryHack)
  expect(hookResult.increment.name).toBe('increment')
  validateFunctionEquality(hookResult)
})

it('works with useCallback', () => {
  let hookResult = executeHook(useCorrectCallback)
  expect(hookResult.increment.name).toBe('increment')
  validateFunctionEquality(hookResult)
})

function executeHook(hook) {
  let mountedHook = mountObjectHook(hook)
  let hookResult = mountedHook.hookResult
  return hookResult
}

function validateFunctionEquality(hookResult) {
  // Store the last result of running the hook
  let stored = { ...hookResult }

  // Force a re-render to run the hook again
  expect(hookResult.count).toEqual(0)
  act(hookResult.increment)
  expect(hookResult.count).toEqual(1)

  // Compare the previous results to the current results
  expect(hookResult.constant).toEqual(stored.constant)
  expect(hookResult.increment).toEqual(stored.increment)
}
