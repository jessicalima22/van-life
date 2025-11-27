import { Link } from "react-router-dom"
import aboutVanImage from "../assets/about_van.png"

export default function About (){
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