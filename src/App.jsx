import React from "react";
import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Details, {} from "./components/Details";

function App() {
  

  
  // console.log(user)
  return (
    <>
   <Routes> 
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="product" element={<div>THis is all product page</div>} />
          <Route path="product/:id" element={<Details/>} />
        </Route>


      </Routes>

    </>
  );
}

export default App;
