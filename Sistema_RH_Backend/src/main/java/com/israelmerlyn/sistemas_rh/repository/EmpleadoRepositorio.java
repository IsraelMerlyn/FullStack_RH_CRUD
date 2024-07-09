package com.israelmerlyn.sistemas_rh.repository;

import com.israelmerlyn.sistemas_rh.model.Empleado;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmpleadoRepositorio extends JpaRepository <Empleado, Integer> {
}
