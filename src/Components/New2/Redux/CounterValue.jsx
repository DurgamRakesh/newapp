import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { inc, dec, byamt } from './Silce';
const CounterValue = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.myKey.value);
    console.log(data);

  return (
    <div>CounterValue

        <div>
            <h1>{data}</h1>
            <button onClick={() => dispatch(inc())}>+</button>
            <button onClick={() => dispatch(dec())}>-</button>
            <button onClick={() => dispatch(byamt(10))}>10</button>
        </div>
    </div>
  )
}

export default CounterValue