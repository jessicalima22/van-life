import './App.css'
import aboutVanImage from "../public/about_van.png"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

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
      </Routes>
      <footer>Ⓒ 2026 #VANLIFE</footer>
    </BrowserRouter>
  )
}

function Home() {
  return (
    <>
      <main>
        <div className='main_home'>
          <div className='main_content'>
            <h1>You got the travel plans, we got the travel vans.</h1>
            <p>Add adventure to your life by joining the #vanlife movement.</p>
            <p>Rent the perfect van to make your perfect road trip.</p>
            <button className='find_your_van_button'>Find your van</button>
          </div>
        </div>
      </main>
    </>
  )
}

function About (){
  return (
    <>
    <main>
      <img src={aboutVanImage} alt="Image of a Van" className='about_image'/>
      <div className='main_about'>
        <div className='main_about_content'>
          <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
          <p> 
            Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
            (Hitch costs extra 😉)
          </p> 
          <p> 
            Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
          </p>
          <div className='about_down'>
            <h3>Your destination is waiting.</h3>
            <h3>Your van is ready.</h3>
            <Link to="/vans" className='about_down_button'>Explore our vans</Link>
          </div>
        </div>
      </div>
    </main>
    </>
    
  )
}

export default App
