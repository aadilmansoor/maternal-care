import React from 'react'
import { Footer, UserHeader } from '../components'
import { Outlet } from 'react-router-dom'


const ProviderLayout = () => {
  return (
    <div>
       <UserHeader role='provider'/>
       <Outlet/>
        <Footer/>
    </div>
  )
}

export default ProviderLayout
