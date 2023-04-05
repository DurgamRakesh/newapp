import React, { useContext } from 'react'
import { store } from './Context'

const SubChail = () => {
    const [user,setUser] = useContext(store)
    console.log(user);
  return (
    <div>SubChail
       {
        user.map((eachuser,index) => {
            const {firstName,lastName,age} = eachuser;
            return(
                <div key={index}>
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

export default SubChail