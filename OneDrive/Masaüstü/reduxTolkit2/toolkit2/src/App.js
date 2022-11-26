import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import { useEffect } from "react";
import useApi from "./Hooks/useApi";


import { setCategory } from "./redux/categoriesSlice";
import { useDispatch } from "react-redux";


function App() {
  const api = useApi()
  const dispatch = useDispatch()

useEffect(() => {
  api.get('https://api.adoptez1artisan.com/public/categories/listMainCategories')
   .then(response => {
    dispatch(setCategory("test category datasi"))
   })
   .catch(err => {
    console.log('CatchErr', err)
   })

},[])


  return (
    <div className="container py-3">
    <Header />
    <HashRouter>
    <Routes>
    <Route index element={<Home />}/>
    <Route path="/Login" element={<Login />}/>
    
    </Routes>
    </HashRouter>
    <Footer />
    </div>
  );
}

export default App;
