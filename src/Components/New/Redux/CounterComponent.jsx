import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Increment, Decrement,IncBy } from './Slice'
const CounterComponent = () => {
    const dispatch = useDispatch()
    const select = useSelector((state) => state.CounterKey.value)
    console.log(select);
  return (
    <div>CounterComponent
        <p>{select}</p>
        <button onClick={()=>dispatch(Increment())}>+</button>
        <button onClick={()=>dispatch(Decrement())}>-</button>
        <button onClick={()=>dispatch(IncBy(10))}>10</button>
    </div>
  )
}

export default CounterComponent