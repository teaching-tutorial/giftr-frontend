import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { TokenProvider } from "./context/TokenContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Routes, Route } from "react-router-dom";
import People from "./components/People";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  /*<GoogleOAuthProvider clientId="457188597101-qflpifqkdtorfnmh03qmha2k6i1tr3ks.apps.googleusercontent.com"> */
  <GoogleOAuthProvider clientId="528616220795-k8ujuq42k5c1q3is6r0jj3fu7hkum6lr.apps.googleusercontent.com">

    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <TokenProvider>
            <App />
          </TokenProvider>
          
        </BrowserRouter>
      </QueryClientProvider>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
