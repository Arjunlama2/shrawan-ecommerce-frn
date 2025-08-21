import React from "react";
import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Details, { } from "./components/Details";
import LoginForm from "./pages/Login";
import SignupForm from "./pages/Signup";
import ProtectedRoute from "./hoc/ProtectedRoute";
import Cart from "./pages/Cart";
import AdminLayout from "./layout/AdminLayout";
import Product from "./pages/product/Product";

function App() {



  // console.log(user)
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Product/>} />
          <Route path="product/:id" element={<Details />} />

          <Route path="/cart" element={<ProtectedRoute>
            <Cart />
          </ProtectedRoute>} />
        </Route>

        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />

      </Routes>



      <Routes>
        <Route path="/admin" element={<AdminLayout/>}>
          <Route index element={<div>This is dahoard home page</div>} />
          <Route path="orders" element={<div>This is all orders page</div>} />
        </Route>

      </Routes>



    </>
  );
}

export default App;
