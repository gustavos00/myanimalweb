import Global from "./assets/styles/global";
import Home from "./pages/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./contexts/user";

function App() {
  return (
    <div>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
      <Global />
    </div>
  );
}

export default App;
