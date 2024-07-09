package com.israelmerlyn.sistemas_rh.controllers;

import com.israelmerlyn.sistemas_rh.exception.RecursoNoEncontradoExeption;
import com.israelmerlyn.sistemas_rh.model.Empleado;
import com.israelmerlyn.sistemas_rh.services.EmpleadoServicio;
import com.israelmerlyn.sistemas_rh.services.IEmpleadoServicio;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("rh-app")
//http://localhost:8080/rh-app/empleados/1
@CrossOrigin(value = "http://localhost:5173") //incicando URL para recibir pediticiones (SI NO SON RECHAZADAS)

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

    @PostMapping("/empleados")
    public  Empleado AgregarEmpleado(@RequestBody Empleado empleado){
        logger.info("Empleado a Agregar " + empleado);
        return empleadoServicio.guardarEmpleado(empleado);

    }

    @GetMapping("/empleados/{id}")
    public ResponseEntity<Empleado> obtenerEmpleadoPorId(@PathVariable Integer id){
        Empleado empleado = empleadoServicio.buscarEmpleadoPorId(id);
        if (empleado == null)
            throw new RecursoNoEncontradoExeption("No se encontro el empleado " + id);
        return  ResponseEntity.ok(empleado);

    }

    @PutMapping("/empleados/{id}")
    public ResponseEntity<Empleado> actualizarEmpleado (@PathVariable Integer id, @RequestBody Empleado empleadoRecibido) {
        Empleado empleado = empleadoServicio.buscarEmpleadoPorId(id);
        if (empleado == null)
            throw  new RecursoNoEncontradoExeption("El id recibido no existe " + id);

        empleado.setNombre(empleadoRecibido.getNombre());
        empleado.setDepartamento(empleadoRecibido.getDepartamento());
        empleado.setSueldo(empleadoRecibido.getSueldo());

        empleadoServicio.guardarEmpleado(empleado);

        return  ResponseEntity.ok(empleado);
    }


}
