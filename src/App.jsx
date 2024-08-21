import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './assets/Components/Nav'
import './App.css'
import BannerImage from './assets/Components/BannerImage'
import VehicleInsurance from './assets/Components/VehicleInsurance'
import Footer from './assets/Components/Footer'

function App() {
  

  return (
    <>
    <Nav/> 
    <BannerImage/>
    <VehicleInsurance/>
    <Footer/>
    </>
   
  )
}

export default App
