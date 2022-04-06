package com.pustakmart.authAndCartAndCheckout.model;

import lombok.Data;

@Data
public class ShippingAddress {

    private String address;
    private String city;
    private String zipCode;
    private String country;

}
