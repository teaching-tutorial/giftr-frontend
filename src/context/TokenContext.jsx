import { useContext, createContext, useState, useEffect } from "react";

const TokenContext = createContext();
const tokenKey = "giftr_access_token";

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState();
  const saveToken = (token) => {
    setToken(token);
    if (token === null) {
      sessionStorage.removeItem(tokenKey);
    }
    sessionStorage.setItem(tokenKey, token);
  };

  const removeToken = () => {
    saveToken(null);
    sessionStorage.removeItem(tokenKey);
  };

  useEffect(() => {
    if (!token) {
      setToken(sessionStorage.getItem(tokenKey));
    }
  }, [token]);

  console.log("token get from session", sessionStorage.getItem(tokenKey));
  const value = {
    token,
    saveToken,
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
