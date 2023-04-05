import React from 'react';
import LoginPage from './LoginPage';
const Hoc = (Component) => {
    return(
        () => {
            const user = false;
            return(
                user ? <Component name='react'/> : <LoginPage/>
            )
        }
    )
}
export default Hoc;