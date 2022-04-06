package com.pustakmart.authAndCartAndCheckout.service;

import com.pustakmart.authAndCartAndCheckout.dao.OrderRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public String getMyOrders() {

        return orderRepository.getMyOrders();
    }

    public String getOrdersById() {

        return orderRepository.getOrdersById();
    }

}
