import React from 'react'
import { Footer, UserHeader } from '../components'

const UserLayout = ({children}) => {
  return (
    <div>
       <UserHeader/>
        {children}
        <Footer/>
    </div>
  )
}

export default UserLayout
