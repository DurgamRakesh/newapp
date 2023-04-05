import React, { useContext } from 'react'
import { store } from './Context'

const SubChaildComponent = () => {
    const data = useContext(store)
    console.log(data);
  return (
    <div>SubChaildComponent
        {
            data.map((eachitem, index) => {
                const {firstName , lastName, age} = eachitem;

                return (
                    <div key={index} style={{border:'1px solid black',margin:'10px'}}>
                        <p>firstName:{firstName}</p>
                        <p>lastName:{lastName}</p>
                        <p>age:{age}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default SubChaildComponent