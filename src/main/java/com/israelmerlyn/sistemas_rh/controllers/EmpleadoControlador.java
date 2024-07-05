package com.israelmerlyn.sistemas_rh.controllers;

import com.israelmerlyn.sistemas_rh.model.Empleado;
import com.israelmerlyn.sistemas_rh.services.EmpleadoServicio;
import com.israelmerlyn.sistemas_rh.services.IEmpleadoServicio;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("rh-app")
//http://localhost:8080/rh-app/empleados/1
@CrossOrigin(value = "http://localhost:3000") //incicando URL para recibir pediticiones (SI NO SON RECHAZADAS)

public class EmpleadoControlador {
    private  static  final Logger logger = LoggerFactory.getLogger(EmpleadoControlador.class);

    @Autowired
    private IEmpleadoServicio empleadoServicio;

    //http://localhost:8080/rh-app/empleados
    @GetMapping("/empleados")
    public List<Empleado> obtenerEmpleados() {
        var empleados = empleadoServicio.listarEmpleados();
        empleados.forEach(empleado -> logger.info(empleado.toString()));
        return empleados;
    }

    @PutMapping
    public Empleado guardarEmpleado(@RequestBody Empleado empleado) {
        return empleadoServicio.guardarEmpleado(empleado);
    }


}
