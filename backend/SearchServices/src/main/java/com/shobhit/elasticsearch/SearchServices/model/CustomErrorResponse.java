package com.shobhit.elasticsearch.SearchServices.model;

import java.io.Serializable;

public class CustomErrorResponse implements Serializable {

  private static final long serialVersionUID = 1L;
  private final String errorCode;
  private final String errorMessage;

  public CustomErrorResponse(String errorCode, String errorMessage) {
    this.errorCode = errorCode;
    this.errorMessage = errorMessage;
  }

  public String getErrorCode() {
    return errorCode;
  }

  public String getErrorMessage() {
    return errorMessage;
  }

}
