import React, { useState } from 'react'

const Chaild = (props) => {
    const [state,setState] = useState('');

    const hc = () => {
        props.getData(state)
    }
  return (
    <div>Chaild
        <input type="text" value={state} onChange={(e)=>setState(e.target.value)} />
        <button onClick={hc}>send to app</button>
    </div>
  )
}

export default Chaild