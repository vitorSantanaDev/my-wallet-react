import React, { createContext, useState, useContext } from "react";

interface AuthContextProps {
  logged: boolean;
  signIn(email: string, password: string): void;
  signOut(): void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function useAuth(): AuthContextProps {
  const contextAuth = useContext(AuthContext)
  return contextAuth
}

const AuthProvider: React.FC = ({ children }) => {
  const [logged, setLogged] = useState<boolean>(() => {
    const isLogged = window.localStorage.getItem("@my-wallet:logged");
    return !!isLogged;
  });

  const signIn = (email: string, password: string) => {
    if (email === "email@exemple.com" && password === "passwordLogged") {
      window.localStorage.setItem("@my-wallet:logged", "true");
      setLogged(true);
    } else {
      window.alert("Invalid password or users.");
    }
  };

  const signOut = () => {
    window.localStorage.removeItem("@my-wallet:logged");
    setLogged(false);
  };

  return (
    <AuthContext.Provider value={{ logged, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export  default AuthProvider 
