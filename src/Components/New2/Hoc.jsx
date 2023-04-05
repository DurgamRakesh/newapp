import React from 'react'
import LoginPage from './Redux/LoginPage';

const Hoc = (Component) => {
  return () => {
    let userauth = false;
    return(
        userauth ? <Component/> : <LoginPage/>
    )
  }
}

export default Hoc