import Home from "./pages/Home";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth";

const App = () => {
  const auth = 1

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              {auth ? (
                <Home />
              ) : (
                <Auth />
              )}
            </>
          } />
          <Route path="*" element={
            <h1>404 Not Found</h1>
          } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
