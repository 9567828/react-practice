import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App />

  // 감싸져 있으면 render를 두번함
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
