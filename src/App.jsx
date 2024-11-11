import React from "react";
import {Routes,Route,BrowserRouter as Router} from 'react-router-dom'
import Home from "./pages/Home";
import Nav from './components/Nav'
import NotFound from "./components/NotFound";
import Profile from "./pages/Profile";
import Super from "./pages/Super";
import  '../src/index.css'
import Login from "./pages/Login";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

const APP = ()=>{
  return(
    <>
      <Router>
        <Nav></Nav>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path="/product" element={<Product/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default APP