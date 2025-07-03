 import { createContext, useState } from "react";
import type { ReactNode } from "react";

// 1. Define the type
type AuthContextType = {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
};

// 2. Create the context with a default value
export const Authcontext = createContext<AuthContextType>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

// 3. Provider component
type Props = {
  children: ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // default to not logged in

  const login = () => {
    setIsLoggedIn(true);
    console.log("Logged in:", isLoggedIn);
  };

  const logout = () => {
    setIsLoggedIn(false);
    console.log("Logged out:", isLoggedIn);
  };

  return (
    <Authcontext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </Authcontext.Provider>
  );
}
