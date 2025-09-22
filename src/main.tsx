import { createRoot } from "react-dom/client";
import App from "./App";

// Router
import { BrowserRouter } from "react-router-dom";

// Styles
import "./assets/scss/index.scss";

// language
import "./utils/118n";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
