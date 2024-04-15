import React from 'react'
import { Footer, UserHeader } from '../components'

const AdminLayout = ({children}) => {
  return (
    <div>
      <UserHeader role='admin'/>
        {children}
        <Footer/>
    </div>
  )
}

export default AdminLayout
