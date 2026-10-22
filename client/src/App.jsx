import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLoginSuccess={setUser} />} />
        <Route
          path="/register"
          element={<Register onRegisterSuccess={setUser}/>}
          
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
