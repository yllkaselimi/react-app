import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Raporto from "./pages/Raporto";
import Nav from "./components/Nav";
import Evente from "./pages/Evente";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useEffect, useState } from "react";
import {getLoggedInUser} from './helpers/storage'

function App() {
  const [user, setUser] = useState()

  useEffect(() => {
    setUser(getLoggedInUser())
  }, [])

  return (

    <BrowserRouter>
    <Nav user={user} setUser={setUser} />
    <div className="container"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/raporto" element={<Raporto />} />
        <Route path="/evente" element={<Evente />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
