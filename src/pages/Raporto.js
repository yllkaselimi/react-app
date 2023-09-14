import React, { useState, useEffect } from 'react'
import Crud from '../components/Crud'
import { getLoggedInUser, getUsers } from '../helpers/storage'
import { Link, useNavigate } from 'react-router-dom'

function Raporto() {
  const navigate = useNavigate()

  useEffect(() => {
    if(getLoggedInUser() === null) navigate('/');
  }, [])


  return (
    <div className='container pt-[64px] mx-auto'>
      <Crud/>
    </div>
  )
}

export default Raporto