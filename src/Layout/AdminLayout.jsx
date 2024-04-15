import React from 'react'
import { Footer, UserHeader } from '../components'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div>
      <UserHeader role='admin'/>
      <Outlet/>
        <Footer/>
    </div>
  )
}

export default AdminLayout
