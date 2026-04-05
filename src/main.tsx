import { createRoot } from "react-dom/client";
import App from "./App";
import { AppProvider } from "./AppContext";
import "./style.css";

// biome-ignore lint/style/noNonNullAssertion: root element is guaranteed in index.html
createRoot(document.getElementById("root")!).render(
  <AppProvider>
    <App />
  </AppProvider>,
);
