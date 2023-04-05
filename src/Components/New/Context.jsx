import React, { createContext } from 'react'
export const store = createContext();
const Context = (props) => {
    const data = [
        {
            firstName:'durgam',
            lastName:'rakesh',
            age:23
        },
        {
            firstName:'k',
            lastName:'vishnu',
            age:25
        },
        {
            firstName:'b',
            lastName:'santhosh',
            age:24
        },
        {
            firstName:'k',
            lastName:'sri',
            age:22
        }
    ]
  return (
    <store.Provider value={data}>
        {props.children}
    </store.Provider>
  )
}

export default Context