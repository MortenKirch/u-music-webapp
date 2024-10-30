import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.DEV ? "/" : "/u-music-webapp/"}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
