import { useState, useCallback, useMemo } from 'react'

export function useCorrectCallback() {
  const [count, setCount] = useState(0)
  let increment = () => setCount(c => c + 1)

  let memoized = useCallback(increment, [])
  return {
    constant: 1,
    count,
    increment: memoized
  }
}
