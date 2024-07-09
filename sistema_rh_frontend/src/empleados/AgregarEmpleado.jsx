import React from 'react'

export default function AgregarEmpleado() {
  return (
   <>
   <div className="container">
    <div className="container text-center" style={{margin:"30px"}}>
    <h3 className='text-center'>Agregar Empleado</h3>
    <form>
        <div className="mb-3">
            <label htmlFor="nombre" className="form-label"> Nombre</label>
            <input type="text" className="form-control" id="nombre" name='nombre' required={true}/>
            </div>
        <div className="mb-3">
            <label htmlFor="departamento" className="form-label">Departamento</label>
            <input type="text" className="form-control" id="departamento" name='departamento' />
        </div>
        <div className="mb-3 form-check">
            <label className="form-check-label" htmlFor="salario">Salario</label>
            <input type="number" step="any" className="form-control" id="salario" name='salario' />

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
