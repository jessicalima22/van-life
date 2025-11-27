import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"

function App() {
  return (
    <BrowserRouter basename='/van-life'>
      <header>
        <span>
          <Link to="/">#VANLIFE</Link>
        </span>
        <div>
          <Link to="/about" className='header_link'>About</Link>
          <Link to="/vans" className='header_link'>Vans</Link>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
      <footer>Ⓒ 2026 #VANLIFE</footer>
    </BrowserRouter>
  )
}

export default App
