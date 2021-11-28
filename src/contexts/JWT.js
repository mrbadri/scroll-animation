import { createContext } from "react";

const initialState = {
    isLoggedIn: false, 
    logout: false
}

export const JWTContext = createContext({
    ...initialState , 
})

export const JWTProvider = ({ children }) => {
    return <JWTContext.Provider value={{ ...initialState }}>{children}</JWTContext.Provider>;
}