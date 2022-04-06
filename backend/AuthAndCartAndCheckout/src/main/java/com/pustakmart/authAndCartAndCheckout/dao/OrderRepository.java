package com.pustakmart.authAndCartAndCheckout.dao;

import org.springframework.stereotype.Repository;

@Repository
public class OrderRepository {

    public String getMyOrders() {

        return "getMyOrders response";

    }

    public String getOrdersById() {

        return "getOrdersByid response ";

    }

}
