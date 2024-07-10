package com.israelmerlyn.sistemas_rh.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data //setters y getters
@Entity
@NoArgsConstructor
@AllArgsConstructor //constructor con atributos de clases
public class Empleado {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)

   Integer idEmpleado;
   String nombre;
   String departamento;
   Double sueldo;

}
