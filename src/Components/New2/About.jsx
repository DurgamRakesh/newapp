import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div>About
        <div>
            <Link to='/About/P1'>p1</Link>
            <Link to='/About/P2'>p2</Link>
        </div>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default About