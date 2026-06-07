import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [users, setUsers] = useState(()=>{
    const savedUsers = localStorage.getItem('users');
    return savedUsers? JSON.parse(savedUsers) : [];
  });
  const [currentUser, setCurrentUser] = useState(()=>{
    const savedUser = localStorage.getItem("currentUser");
    return savedUser? JSON.parse(savedUser) : null;
  });

  const register = (name, email, password) => {
    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
    };

    const updatedUsers = [...users, newUser];

    setUsers(updatedUsers);

    localStorage.setItem("users", JSON.stringify(updatedUsers))
  };

  const login = (email, password) => {
    const user = users.find(
      (u) =>
        u.email === email &&
        u.password === password
    );

    if (user) {
      setCurrentUser(user);

      localStorage.setItem("currentUser",JSON.stringify(user));

      return true;
    }

    return false;
  };

  const logout = () => {
    setCurrentUser(null);

    localStorage.removeItem("currentUser");
  };

  return (
    <AuthContext.Provider
      value={{
        users,
        currentUser,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}