package com.shobhit.elasticsearch.SearchServices.advice;

import com.shobhit.elasticsearch.SearchServices.model.CustomErrorResponse;
import com.shobhit.elasticsearch.SearchServices.model.exception.ProductAlreadyExistException;
import com.shobhit.elasticsearch.SearchServices.model.exception.ProductNotFoundException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class APIExceptionHandlerAdvice {

  @ExceptionHandler({ ProductAlreadyExistException.class })
  public ResponseEntity<CustomErrorResponse> handleProductAlreadyExistException(Throwable e) {
    CustomErrorResponse response = new CustomErrorResponse("100", "Item Already Exists");
    return new ResponseEntity<>(response, HttpStatus.CONFLICT);
  }

  @ExceptionHandler({ ProductNotFoundException.class })
  public ResponseEntity<CustomErrorResponse> handleProductNotFoundException(Throwable e) {
    CustomErrorResponse response = new CustomErrorResponse("404", "Product Not Found");
    return new ResponseEntity<>(response, HttpStatus.CONFLICT);
  }

}
