package com.israelmerlyn.sistemas_rh.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class RecursoNoEncontradoExeption extends  RuntimeException{
    public  RecursoNoEncontradoExeption(String mensaje){
        super(mensaje);
    }
}
