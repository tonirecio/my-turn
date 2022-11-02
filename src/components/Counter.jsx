import { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0)
  // let count = 0

  const increment = (step) => {
    setCount(count + step)
    console.log('count', count)
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={() => {
        increment(10)
      }}
      >+
      </button>
      <button onClick={() => {
        increment(-10)
      }}
      >-
      </button>
    </>
  )
}
