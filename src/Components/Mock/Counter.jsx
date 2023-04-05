import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './Slice'

const Counter = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.myKey.value)
    console.log(data);
  return (
    <div>
        <h1>Counter Page</h1>
        <div>
            <p>{data}</p>
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
        </div>
    </div>
  )
}

export default Counter