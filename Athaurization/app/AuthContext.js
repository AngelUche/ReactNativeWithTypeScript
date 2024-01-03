import { useState } from "react"



export const AuthContext = ({
  toek:'',
  isAuthenticated: false,
  authenticate:()=>{},
  logOut:()=>{},
})

export function AuthContextProvider({children}){
  const [authToken, setAuthToken] =useState();

  function authenticate(token){
    setAuthToken(token);
  };

  function logOut(){
    setAuthToken(null)
  }

  const values = {
    toke:authToken,
    isAuthenticated:!!authToken,
    authenticate,
    logOut
  }
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

