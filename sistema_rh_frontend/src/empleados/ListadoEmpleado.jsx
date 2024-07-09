import axios from "axios";
import { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import { Link } from 'react-router-dom'
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
                  
                <td>
                  <Link to={`/editar/${empleado.idEmpleado}`} className='btn btn-warning btn-sm me-3'>Editar</Link>
                </td>
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
