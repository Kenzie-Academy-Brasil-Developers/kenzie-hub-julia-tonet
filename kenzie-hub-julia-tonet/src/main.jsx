import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { TechProvider } from "./providers/TechContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <TechProvider>
        <App />
      </TechProvider>
    </BrowserRouter>
  </React.StrictMode>
);
