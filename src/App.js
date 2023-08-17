import './App.css';
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

import Home from './components/Home';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import Login from './components/login/Login';
import Register from './components/register/Register';

function App() {

  return (
    <>
      <Navbar />
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:id" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </>
  );
}

export default App;
