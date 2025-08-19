import React from "react";
import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Details, {} from "./components/Details";
import LoginForm from "./pages/Login";
import SignupForm from "./pages/Signup";

function App() {
  

  
  // console.log(user)
  return (
    <>
   <Routes> 
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="product" element={<div>THis is all product page</div>} />
          <Route path="product/:id" element={<Details/>} />F
        </Route>

<Route path="/login" element={<LoginForm/>}/>
<Route path="/signup" element={<SignupForm/>}/>

      </Routes>

    </>
  );
}

export default App;
