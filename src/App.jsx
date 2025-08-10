import React from "react";
import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="products" element={<div>THis is all product page</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
