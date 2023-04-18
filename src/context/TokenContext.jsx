import { useContext, createContext, useState, useEffect } from "react";

const TokenContext = createContext();
const tokenKey = "giftr_access_token";

export const TokenProvider = ({ children }) => {
  const setToken = (token) => {
    if (token === null) {
      sessionStorage.removeItem(tokenKey);
    }
    sessionStorage.setItem(tokenKey, token);
  };

  const removeToken = () => {
    setToken(null);
    sessionStorage.removeItem(tokenKey);
  };

  console.log("token get from session", sessionStorage.getItem(tokenKey));
  const value = {
    token: sessionStorage.getItem(tokenKey),
    setToken,
    removeToken,
  };

  return (
    <TokenContext.Provider value={value}>{children}</TokenContext.Provider>
  );
};

const useToken = () => {
  const context = useContext(TokenContext);
  if (!context) throw new Error("No Token Context");
  return context;
};

export default useToken;
