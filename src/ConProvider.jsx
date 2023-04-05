import React, { createContext } from "react";

export const UserContext = createContext();
export const UserContextProvider = ({Children}) => {
    return(
        <UserContext.Provider value={'please context'}>
            {Children}
        </UserContext.Provider>
    )
}