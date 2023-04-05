import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { inc,dec } from './Slice';

const Counter = () => {
    const dispatch = useDispatch();
    const sel = useSelector((s) => s.myKey.value)
    console.log(sel);
  return (
    <div>
        <p>{sel}</p>
        <button onClick={() => dispatch(inc(10))}>+</button>
        <button onClick={() => dispatch(dec())}>-</button>
    </div>
  )
}

export default Counter