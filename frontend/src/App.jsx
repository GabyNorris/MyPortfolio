import React from "react";
import Navbar from "./components/common/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/admin/auth/Login";
import Home from "./pages/home/Home";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import AdminSecretListener from "./pages/admin/auth/AdminSecretListener";

function App() {  
  return (
    <BrowserRouter>
    <div >
      <Navbar/>
      <AdminSecretListener />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path ="/auth" element={<Login/>} />
        <Route path="/admin" element={<Dashboard/>} />
      </Routes>
    </div>
    </BrowserRouter>
    
  )
}

export default App
