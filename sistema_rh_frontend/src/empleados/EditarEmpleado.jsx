import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
export default function EditarEmpleado() {

    const URLBase = "http://localhost:8080/rh-app/empleados";

    let navegaciion = useNavigate();

    const {id} = useParams();

    const [empleado, setEmpleados] = useState({

        nombre:"",
        departamento: "",
        sueldo:""
    });

    const {nombre, departamento, sueldo} = empleado;


    useEffect(() => {
        cargarEmpleado();
    }, []);

    const cargarEmpleado = async () => {
        const resultado = await axios.get(`${URLBase}/${id}`);
        setEmpleados(resultado.data);
    }
    
    const onInputChange = (e) => {
        //spred opertor ... (expandir los atributos)

        setEmpleados({...empleado, [e.target.name]: e.target.value})

    }

    const onSubmit = async(e) => {
        e.preventDefault();
        // const URLBase = "http://localhost:8080/rh-app/empleados";
        Swal.fire({
            title: "Estas seguro que deseas actualizar el Registro?",
            text: "el registro se actualizara permanente!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si,  actualizar!",
            cancelButtonText: "cancelar",
      
      }).then(async (result) => {
              if (result.isConfirmed) {
                Swal.fire("Actualizado!", "Registro actualizo con exito", "success");
                await axios.post(URLBase, empleado);
              }
              navegaciion('/');
            });

    }
  return (
   <>
   <div className="container">
    <div className="container text-center" style={{margin:"30px"}}>
    <h3 className='text-center'>Editar Empleado</h3>
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
