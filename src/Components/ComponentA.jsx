import React, { useContext } from 'react'
import { useState } from 'react'
import { store } from '../App'

const ComponentA = () => {
    const [data,setData] = useContext(store)
    const [a, seta] = useState('')
    const hc = (e) => {
        e.preventDefault()
setData([...data,{name:a}])
    }
  return (
    <div>
        <div>ComponentA</div>
        <form onSubmit={hc}>
        <input type="text" value={a} onChange={e=>seta(e.target.value)} />
        <input type="submit" value="clicl" />
        </form>
        <div>
            {
                data.map((e,i) => {
                    return<li key={i}>{e.name}</li>
                })
            }
        </div>
        
    </div>
  )
}

export default ComponentA