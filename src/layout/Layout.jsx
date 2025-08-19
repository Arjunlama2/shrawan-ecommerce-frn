import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/Reducers/userSlice'
import axios from 'axios'
import useFetch from '../hook/useFetch'

function Layout() {
  const dispatch = useDispatch()

const {data,error}=useFetch("/product")

console.log(error)


  return (
    <>
      <Header />




      <button className='primary-btn' onClick={() => dispatch(setUser({
        userName: "Milan",
        role: "buyer",
        email: "skillspark",
      }))}>Set User</button>
      <Outlet />

      <Footer />
    </>
  )
}

export default Layout