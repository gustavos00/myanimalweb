import React from "react";
import Global from "./assets/styles/global";
import Home from "./pages/Home"

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Route path="/" element={<Home />} />
      </BrowserRouter>
      <Global />
    </div>
  );
}

export default App;
