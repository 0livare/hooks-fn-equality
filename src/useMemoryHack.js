import { useState } from 'react'

let hackyMemory = { add: null }

export function useMemoryHack() {
  const [count, setCount] = useState(0)
  let add = () => setCount(c => c + 1)

  hackyMemory.add = hackyMemory.add || add
  return [1, hackyMemory.add]
}
