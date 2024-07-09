import React from 'react'

export default function Navegacion() {
  return (
    <>
    <div classNameName="container">

    <ul className="nav justify-content-end navbar-dark bg-primary">
  <li className="nav-item">
    <a className="nav-link active text-black" aria-current="page"  href="/">Inicio</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-black" href="/agregar">Agregar</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-black" href="/listar">Listar</a>
  </li>
 
</ul>
    </div>
    
    </>
  )
}
