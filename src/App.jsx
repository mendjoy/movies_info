
import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App">
      <nav id="navbar">
        <h2>
          <Link to={"/"}>Movies Info</Link>
        </h2>


      </nav>
      <Outlet/>
       
    </div>
  )
}

export default App
