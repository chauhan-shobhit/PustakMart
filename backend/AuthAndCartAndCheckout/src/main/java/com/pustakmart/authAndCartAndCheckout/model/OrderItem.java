package com.pustakmart.authAndCartAndCheckout.model;

import lombok.Data;

@Data
public class OrderItem {

    private String name;
    private int quantity;
    private String image;
    private double price;
    private Product product;
    private User user;

}
