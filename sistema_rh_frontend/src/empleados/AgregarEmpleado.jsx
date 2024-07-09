import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AgregarEmpleado() {


    let navegaciion = useNavigate();

    const [empleado, setEmpleados] = useState({

        nombre:"",
        departamento: "",
        sueldo:""
    });

    const {nombre, departamento, sueldo} = empleado;

    const onInputChange = (e) => {
        //spred opertor ... (expandir los atributos)

        setEmpleados({...empleado, [e.target.name]: e.target.value})

    }

    const onSubmit = async(e) => {
        e.preventDefault();
        const URLBase = "http://localhost:8080/rh-app/empleados";
        await axios.post(URLBase, empleado);
        //Redirigimos a la pagina de Inicio
        navegaciion('/');

    }
  return (
   <>
   <div className="container">
    <div className="container text-center" style={{margin:"30px"}}>
    <h3 className='text-center'>Agregar Empleado</h3>
    <form onSubmit={(e) => onSubmit(e)}>
        <div className="mb-3">
            <label htmlFor="nombre" className="form-label"> Nombre</label>
            <input value={nombre} onChange={(e) => onInputChange(e)} type="text" className="form-control" id="nombre" name='nombre' required={true}/>
            </div>
        <div className="mb-3">
            <label htmlFor="departamento" className="form-label">Departamento</label>
            <input value={departamento} onChange={(e) => onInputChange(e)} type="text" className="form-control" id="departamento" name='departamento' />
        </div>
        <div className="mb-3 form-check">
            <label className="form-check-label" htmlFor="sueldo">Salario</label>
            <input value={sueldo} onChange={(e) => onInputChange(e)} type="number" step="any" className="form-control" id="sueldo" name='sueldo' />

        </div>
        <div className="text-ceter">
            <button type="submit" className="btn btn-warning btn-sm me-3">Guardar</button>
            <a href="/" className='btn btn-danger btn-sm'>Regresar</a>
        </div>
    </form>
   </div>
   </div>

   </>
  )
}
