import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import SloganMaker from './components/SloganMaker'
import Features from './components/Features'
import FreeProducts from './components/FreeProducts'
import Footer from './components/Footer'

function App() {


  return (
    <div className="App">
      <Header />
      <SloganMaker />
      <Features />
      <FreeProducts />
      <Footer />
    </div>
  )
}

export default App
