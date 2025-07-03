import { createContext, useState } from "react";
import { Navigate } from "react-router-dom";

export const Authcontext= createContext()

 export function AuthProvider (props:any){
const [isLoggedIn,setIsLoggedIn]= useState(true)
 

const login=()=>{
    setIsLoggedIn(false)
    console.log(isLoggedIn)
  
  return  <Navigate to="/login"/>
}
const logout =()=>{
    setIsLoggedIn(true);
     
}

    return (
<Authcontext.Provider  value={{isLoggedIn,login,logout}}>
    {props.children}
</Authcontext.Provider>

    )
}