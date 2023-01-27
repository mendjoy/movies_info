import { Link } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//css 
import "./Navbar.css";

const Navbar = () => {

    const [search, setSearch] = useState("");  //estado de busca
    const navigate = useNavigate(); //redirecionamento

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!search) return //se nao houver texto no input nao faz a busca 

        navigate(`/search?q=${search}`);

        setSearch("");
    }


  return (
    <div>
        <nav id="navbar">
            <h2>
                <Link to={"/"}> <BiCameraMovie/>Movies Info </Link>
            </h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Busque um filme" onChange={(e) => setSearch(e.target.value)} value={search}/>
                
                <button type="submit">
                    <BiSearchAlt2/>
                </button>
            </form>
        </nav>
        <div className="bar-link">
            <Link to={"popular"} >Popular Movies</Link>
        </div>
        
  </div>
  )
}

export default Navbar