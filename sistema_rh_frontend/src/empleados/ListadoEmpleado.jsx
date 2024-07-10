import axios from "axios";
import { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import { Link } from 'react-router-dom'

import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

export default function ListadoEmpleado() {

  const URLBase = "http://localhost:8080/rh-app/empleados";
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    
    cargarEmpleados();

  
  }, []);

  const cargarEmpleados = async() => {
    const resultado = await axios.get(URLBase);
    console.log("Resultados de cargar empleados");
    console.log(resultado.data);
    setEmpleados(resultado.data);
  } 
  
  const eliminarEmpleado = async(id) => {
    Swal.fire({
      title: "Estas seguro que deseas elimnar?",
      text: "el registro  se eliminara permanente!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "cancelar",
    }).then(async (result) => {
          if (result.isConfirmed) {
            Swal.fire("Eliminado!", "Registro eliminado con exito", "success");
            await axios.delete(`${URLBase}/${id}`)
          }
    cargarEmpleados();

    })
    // await axios.delete(`${URLBase}/${id}`)
    // cargarEmpleados();
  }
  
  // const onDelete = () => {
  //   Swal.fire({
  //     title: "Estas seguro que deseas elimnar?",
  //     text: "el registro se eliminara permanente!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Si, eliminar!",
  //     cancelButtonText: "cancelar",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       Swal.fire("Eliminado!", "Registro eliminado con exito", "success");
  //       dispatch(startDeletingNote());
  //     }
  //   });
  // };

  return (
    <>
      <div className="container">
        <div className="container text-center" style={{ margin: "30px" }}></div>
        <h3>Sistemas de RH</h3>

        <div>
          <table className="table table-striped table-hover aling-middle">
            <thead className="table-dark">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Departamento</th>
                <th scope="col">Sueldo</th>
                <th scope="col">Opciones</th>
              </tr>
            </thead>
            <tbody>

              {
                empleados.map((empleado, indice) => (
              <tr key={indice}>
                <th scope="row">{empleado.idEmpleado}</th>
                <td>{empleado.nombre}</td>
                <td>{empleado.departamento}</td>
                
                <td>
                  <NumericFormat value = {empleado.sueldo}
                  displayType="text"
                  thousandSeparator=','
                  prefix={'$'}
                  decimalScale={2}
                  fixedDecimalScale
                  />
                 
                  </td>
                  
                <td className="text-center">
                  <Link to={`/editar/${empleado.idEmpleado}`} className='btn btn-warning btn-sm me-3'>Editar</Link>
                  <button onClick={()=> eliminarEmpleado(empleado.idEmpleado)} className="btn btn-danger btn-sm">Eliminar</button>
                </td>
                {/* <td>
                  <Link to={`//${empleado.idEmpleado}`} className='btn btn-danger btn-sm me-3'>Eliminar</Link>
                </td> */}
              </tr>
                ))
              
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
