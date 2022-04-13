import Global from "./assets/styles/global";
import Login from "./pages/Login";
import Home from "./pages/Home";

import { UserProvider } from "./contexts/user";
import { StatesProvider } from "./contexts/states";
import { FilesProvider } from "./contexts/files";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UpdateReport from "./pages/UpdateReport";

function App() {
  return (
    <div>
      <UserProvider>
        <FilesProvider>
          <StatesProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/update" element={<UpdateReport />} />
              </Routes>
            </BrowserRouter>
          </StatesProvider>
        </FilesProvider>
      </UserProvider>
      <Global />
    </div>
  );
}

export default App;
