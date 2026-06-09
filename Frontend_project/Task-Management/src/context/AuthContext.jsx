import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [registerUsers, setRegisterUsers] = useState(() => {
    const savedUsers = localStorage.getItem("registerUsers");
    return savedUsers?JSON.parse(savedUsers):[];
  });
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem("currentUser");
    return savedUser?JSON.parse(savedUser) : null;
  });

  const register = (name, email, password)=>{
    const newUser = {
        id: Date.now(),
        name,
        email,
        password

    };

    const updatedSave = [...registerUsers, newUser];

    setRegisterUsers(updatedSave);

    localStorage.setItem("registerUsers", JSON.stringify(updatedSave));
  

  }

  const login = (email, password)=>{

    const user = registerUsers.find((u)=> u.email === email && u.password === password)

    if(user){
        setCurrentUser(user)

        localStorage.setItem("currentUser", JSON.stringify(user));
      
        return true;
    }
    return false
  };

  const logout =()=>{
    setCurrentUser( null)
    localStorage.removeItem("currentUser");
    
  }

  return(
    <AuthContext.Provider value={{registerUsers, currentUser, register, login,logout}}>
        {children}
    </AuthContext.Provider>
  )

}

export function useAuth(){
    return useContext(AuthContext);
}
