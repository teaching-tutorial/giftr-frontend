import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { TokenProvider } from "./context/TokenContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Routes, Route } from "react-router-dom";
import People from "./components/People";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="457188597101-qflpifqkdtorfnmh03qmha2k6i1tr3ks.apps.googleusercontent.com">
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TokenProvider>
          <App />
        </TokenProvider>
        <Routes>
        <Route path="/people" element={<People />} />
      </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
  </GoogleOAuthProvider>
);
