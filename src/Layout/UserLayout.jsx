import React from 'react'
import { Footer, UserHeader } from '../components'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div>
       <UserHeader/>
        <Outlet />
        <Footer/>
    </div>
  )
}

export default UserLayout
