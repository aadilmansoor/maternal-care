import React from 'react'
import "./ServiceProviderDetails.css"
import Review from '../../../components/Review/Review'
import { Button, FloatingLabel, Form } from 'react-bootstrap'
import ShowReview from '../../../components/ShowReview/ShowReview'

const ServiceProviderDetails = () => {
  return (
    <div>
         <Review/>
         <ShowReview/>
    </div>    
  )
}

export default ServiceProviderDetails