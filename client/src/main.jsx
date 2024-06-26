import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./globalStyles";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain={`${import.meta.env.VITE_AUTH0_DOMAIN}`}
      clientId={`${import.meta.env.VITE_AUTH0_CLIENT_ID}`}
      authorizationParams={{ redirect_uri: window.location.origin }}
      useRefreshTokens
      cacheLocation="localstorage"
    >
      <GlobalStyle />
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
