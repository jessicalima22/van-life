import { Link } from "react-router-dom"

export default function Home() {
  return (
    <>
      <main>
        <div className='main_home'>
          <div className='main_content'>
            <h1>You got the travel plans, we got the travel vans.</h1>
            <p>Add adventure to your life by joining the #vanlife movement.</p>
            <p>Rent the perfect van to make your perfect road trip.</p>
            <Link to="/vans" className='find_your_van_button'>Find your van</Link>
          </div>
        </div>
      </main>
    </>
  )
}