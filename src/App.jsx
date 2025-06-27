import Navbar from './Navbar'
import './App.css'
import Footer from './Footer'
import Courselist from './Courselist'
import Hero from './Hero'
import { useState } from 'react'


function App() {
  const[searchTerm,setSearchTerm]=useState("")
 

  return (
    <>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <Hero />
      <Courselist searchTerm={searchTerm}/>  
      <Footer/>
    </>
  )
}

export default App
