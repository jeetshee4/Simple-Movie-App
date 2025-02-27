import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import "./css/App.css"





function App() {

  return (
    <>
      <div>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/favorites" element={<Favorites />}></Route>

          </Routes>
        </main>
      </div>

    </>
  )
}

export default App
