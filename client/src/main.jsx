
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import{BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store/store.js";
import { Toaster } from "./components/ui/toaster.jsx";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <Toaster/>
    </Provider>
  </BrowserRouter>
);
