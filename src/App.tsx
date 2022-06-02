import Global from './assets/styles/global';
import Login from './pages/Login';
import Home from './pages/Home';

import { UserProvider } from './contexts/user';
import { StatesProvider } from './contexts/states';
import { FilesProvider } from './contexts/files';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { EventsProvider } from './contexts/events';

import UpdateReport from './pages/UpdateReport';
import CreateReport from './pages/CreateReport';
import ProtectedRoutes from './pages/ProtectedRoutes';

function App() {
  return (
    <div>
      <UserProvider>
        <EventsProvider>
          <FilesProvider>
            <StatesProvider>
              <BrowserRouter>
                <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route
                    path="/"
                    element={
                      <ProtectedRoutes>
                        <Home />
                      </ProtectedRoutes>
                    }
                  />
                  <Route
                    path="/update"
                    element={
                      <ProtectedRoutes>
                        <UpdateReport />
                      </ProtectedRoutes>
                    }
                  />
                  <Route
                    path="/create"
                    element={
                      <ProtectedRoutes>
                        <CreateReport />
                      </ProtectedRoutes>
                    }
                  />
                </Routes>
              </BrowserRouter>
            </StatesProvider>
          </FilesProvider>
        </EventsProvider>
      </UserProvider>
      <Global />
    </div>
  );
}

export default App;
