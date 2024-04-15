import React from 'react'
import { Footer, UserHeader } from '../components'

const ProviderLayout = ({children}) => {
  return (
    <div>
       <UserHeader role='provider'/>
        {children}
        <Footer/>
    </div>
  )
}

export default ProviderLayout
