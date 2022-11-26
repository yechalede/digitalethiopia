import { useState } from "react"
import { Link } from "react-router-dom"
import Menu from '@mui/icons-material/Menu'

const NavBar = () => {
    const[menu,setMenu]=useState(false)
    const handelMenuToggle=(e)=>{
        setMenu(!menu)
    }
  return (
    <div className="navbar">
        { menu&&<div onClick={(e)=>setMenu(false)} className="navBarMenuClose"></div> }
        <div className="container flex">
            <div className="logo"><Link to='/'><h2>Digital Ethiopia</h2></Link></div>
            <ul className={menu?"felx navBarMenuOpen":"flex navBarMenuOpen-Closed"}>
                <li>
                    <Link onClick={(e)=>setMenu(false)} to='/departments' >DepartMents</Link>
                </li> 
            </ul>          
                <Link onClick={handelMenuToggle} className="navBarMenu" to='#' ><Menu/></Link>              
        </div>
    </div>
  )
}

export default NavBar