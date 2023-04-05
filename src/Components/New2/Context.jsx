import { createContext, useState } from 'react'

export const store = createContext();
const Context = ({children}) => {
    const [user,setUser] = useState([
        {
            firstName:'d',
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
            lastName:'srikanth',
            age:22
        }
    ])
    return(
        <store.Provider value={[user,setUser]}>
            {children}
        </store.Provider>
    )
}
export default Context