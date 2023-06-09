/**Dependencies */
import "antd/dist/antd.less";
import "./assets/css/override.css";
import "./assets/css/variables.css";

import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { MoenixProvider } from "./context";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <MoenixProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MoenixProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
