import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const register = (name, email, password) => {
    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
    };

    setUsers((prev) => [...prev, newUser]);
  };

  const login = (email, password) => {
    const user = users.find(
      (u) =>
        u.email === email &&
        u.password === password
    );

    if (user) {
      setCurrentUser(user);
      return true;
    }

    return false;
  };

  const logout = () => {
    setCurrentUser(null);
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