import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Header from './components/Header'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/sign-in' element={<Signin />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/projects' element={<Projects/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
