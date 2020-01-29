import { useState, useCallback } from 'react'

export function useCorrectCallback() {
  const [count, setCount] = useState(0)
  let add = () => setCount(c => c + 1)

  let memoizedAdd = useCallback(add, [])
  return [1, memoizedAdd]
}
