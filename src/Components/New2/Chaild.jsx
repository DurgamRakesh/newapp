import React, { useState } from 'react'

const Chaild = (props) => {
    const [name,setName] = useState('')
    const hc = () => {
        props.getData(name)
    }
  return (
    <div>Chaild
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={hc}>send to app</button>
        </div>
    </div>
  )
}

export default Chaild