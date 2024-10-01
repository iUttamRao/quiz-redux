import React from 'react'
import Navbar from '../Navbar/Navbar'
import homebg from '../../assets/HomeBg1.png'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { LOGIN } from '../../routing/keys'

const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      {/* <Navbar /> */}
      <div className='home-container'>
        <img src={homebg} alt="bg" />
        <Button className='home-button' type='primary' onClick={() => navigate(LOGIN)}>Login</Button>
      </div>
    </>
  )
}

export default Home