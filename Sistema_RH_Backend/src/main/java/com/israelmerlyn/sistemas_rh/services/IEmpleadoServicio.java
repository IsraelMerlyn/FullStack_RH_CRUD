package com.israelmerlyn.sistemas_rh.services;

import com.israelmerlyn.sistemas_rh.model.Empleado;

import java.util.List;

public interface IEmpleadoServicio {
    public List<Empleado> listarEmpleados();
    public Empleado buscarEmpleadoPorId(Integer idEmpleado);
    public Empleado guardarEmpleado(Empleado empleado);
    public Empleado actualizarEmpleado(Empleado empleado);
    public void  eliminarEmpleado(Empleado empleado);

}
