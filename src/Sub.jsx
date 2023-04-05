import React, { useContext } from 'react'
import { UserContext } from './ConProvider'

const Sub = () => {
    const d = useContext(UserContext)

  return (
    <UserContext.Consumer>
        <p>{d}</p>
    </UserContext.Consumer>
  )
}

export default Sub