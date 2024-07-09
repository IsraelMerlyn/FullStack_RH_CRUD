import React from 'react'
import { Link } from 'react-router-dom'

export default function Navegacion() {

  
  return (
    <>
    <div className="container">

    <ul className="nav justify-content-end navbar-dark bg-primary">
  <li className="nav-item">
    <a className="nav-link active text-black" aria-current="page"  href="/">Inicio</a>
  </li>
  <li className="nav-item">
    <Link className="nav-link text-black" to="/agregar">Agregar</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link text-black" to="/listar">Listar</Link>
  </li>
 
</ul>
    </div>
    
    </>
  )
}
