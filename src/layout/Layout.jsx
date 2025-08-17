import React, { useEffect } from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/Reducers/userSlice'

function Layout() {
  const dispatch = useDispatch()

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