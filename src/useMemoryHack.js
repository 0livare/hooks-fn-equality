import { useState } from 'react'

let memoryHack = {}

export function useMemoryHack() {
  const [count, setCount] = useState(0)
  let increment = () => setCount(c => c + 1)

  memoryHack.increment = memoryHack.increment || increment
  return {
    constant: 1,
    count,
    increment: memoryHack.increment
  }
}
