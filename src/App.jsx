import './App.css'

function App() {
  
  return (
    <>
      <header>
        <span>#VANLIFE</span>
        <div>
          <a className='header_link'>About</a>
          <a className='header_link'>Vans</a>
        </div>
      </header>

      <main>
        <div className='main_content'>
          <h1>You got the travel plans, we got the travel vans.</h1>
          <p>Add adventure to your life by joining the #vanlife movement.</p>
          <p>Rent the perfect van to make your perfect road trip.</p>
          <button className='find_your_van'>Find your van</button>
        </div>
      </main>
      <footer>Ⓒ 2022 #VANLIFE</footer>
    </>
  )
}

export default App
