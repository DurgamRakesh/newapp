import React, { useState } from 'react'

const Chaild = (props) => {
    const [state,setState] = useState();

    const hc = () => {
        props.getData(state)
    }
  return (
    <div>
        <input type='text' value={state} onChange={(e) =>setState(e.target.value)} />
        <button onClick={hc}>click to send</button>
    </div>
  )
}

export default Chaild