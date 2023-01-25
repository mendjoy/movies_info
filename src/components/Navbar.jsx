import { Link } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

//css 
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
        <nav id="navbar">
            <h2>
                <Link to={"/"}> <BiCameraMovie/>Movies Info </Link>
            </h2>
            <form>
                <input type="text" placeholder="Busque um filme" />
                
                <button type="submit">
                    <BiSearchAlt2/>
                </button>
            </form>
        </nav>
        <Link to={"popular"}>Popular</Link>
  </div>
  )
}

export default Navbar