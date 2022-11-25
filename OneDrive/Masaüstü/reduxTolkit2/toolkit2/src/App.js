import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <div className="container py-3">
    <Header />
    <HashRouter>
    <Routes>
    <Route index element={<Home />}/>
    <Route path="/Login" element={<Login />}/>
    
    </Routes>
    </HashRouter>
    
    </div>
  );
}

export default App;
