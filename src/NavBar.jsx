import React, { useState } from 'react'
import GuviLogo from '../src/assets/Guvi-blog-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link} from 'react-router-dom';
import './App.css'

function NavBar({ele}) {
    
    const [showMenu, setShowMenu] = useState(false);

  return (
    <>  

    <nav className="navbar navbar-expand-lg bg-success-subtle ">
    
      <Link className="navbar-brand" href="#"> <img src= {GuviLogo} alt='bootstrap'  width="120" height="50"/>  </Link>
      <div className= "navbar- "id="navbarNav">

     <ul className="navbar-nav">

          <li className="nav-item">
            <Link className="nav-link active" to="/datascience">Data Science</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/fullstackdevelopment">FullStack Development</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/cybersecurity">Cyber Security</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to='/'>UIUX</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active " to='/career'>Career</Link>
          </li>
        </ul>

      </div>
      </nav>

  


  
</>
  )
}

export default NavBar