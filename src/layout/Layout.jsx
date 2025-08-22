import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/Reducers/userSlice'
import axios from 'axios'
import useFetch from '../hook/useFetch'
import { User } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { getMe } from '../api'

function Layout() {
  const dispatch = useDispatch()

  const token = localStorage.getItem("token")
 

  if (token) {

    // const { data: user } = useFetch("api/v1/user/me")
    const {data:user}=useQuery({
      queryKey:"infor",
      queryFn:getMe
    })


    useEffect(() => {

      dispatch(setUser({
        userName: user?.username,
        role: user?.role,
        email: user?.email
      }))

    }, [user])
  }
  return (
    <>
      <Header />




      <Outlet />

      <Footer />
    </>
  )
}

export default Layout