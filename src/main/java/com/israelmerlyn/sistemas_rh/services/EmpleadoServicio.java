package com.israelmerlyn.sistemas_rh.services;


import com.israelmerlyn.sistemas_rh.model.Empleado;
import com.israelmerlyn.sistemas_rh.repository.EmpleadoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmpleadoServicio implements  IEmpleadoServicio{
    //Capa de repositorio
    @Autowired
    private EmpleadoRepositorio empleadoRepositorio;

    @Override
    public List<Empleado> listarEmpleados() {
        return empleadoRepositorio.findAll();
    }

    @Override
    public Empleado buscarEmpleadoPorId(Integer idEmpleado) {
        Empleado empleado = empleadoRepositorio.findById(idEmpleado).orElse(null);
        return empleado;
    }

    @Override
    public Empleado guardarEmpleado(Empleado empleado) {
        return  empleadoRepositorio.save(empleado);
    }

    @Override
    public Empleado actualizarEmpleado(Empleado empleado) {
        return empleadoRepositorio.save(empleado);
    }

    @Override
    public void eliminarEmpleado(Empleado empleado) {
    empleadoRepositorio.delete(empleado);
    }
}
