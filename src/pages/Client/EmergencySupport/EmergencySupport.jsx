import React, { useEffect, useState } from 'react'
import EmergencyTable from '../../../components/EmergencyTable/EmergencyTable'
import { getEmergencyAPI } from '../../../Services/allAPI';


const EmergencySupport = () => {
  const [allContacts,setAllContacts] = useState([])
  console.log({allContacts});

  const getEmergency=async()=>{
    const result = await getEmergencyAPI();
    console.log({result});
    if(result.status===200){
      setAllContacts(result.data.emergency_details)
    }
  }
  useEffect(()=>{
  getEmergency();
  },[])
  return (
    <div className='mb-5'>
      <EmergencyTable allContacts={allContacts}/>
    </div>
  )
}

export default EmergencySupport
