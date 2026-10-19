import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {Home} from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';


function App() {
  return (
    <BrowserRouter>
      <Routes>
                <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        </Routes>
    </BrowserRouter>
  );
}
export default App;

