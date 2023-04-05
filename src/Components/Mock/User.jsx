import React, { useEffect, useState } from 'react'

const User = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json())
        .then(data => {
            setData(data)
        })
    },[])
  return (
    <div>
        <h1>User Page</h1>
        <div>
            {
                data.map((eachitem) => {
                    const {name,id} = eachitem
                    return(
                        <div key={id}>
                            <p>id:{id}</p>
                            <p>name:{name}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default User