package com.pustakmart.authAndCartAndCheckout.controller;

import com.pustakmart.authAndCartAndCheckout.service.OrderService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import static com.pustakmart.authAndCartAndCheckout.constants.URIConstants.GET_MY_ORDERS;
import static com.pustakmart.authAndCartAndCheckout.constants.URIConstants.GET_ORDERS_BY_ID;

@RestController
@RequestMapping("api/orders")
public class OrdersController {

    @Autowired
    private OrderService orderService;

    @GetMapping(value = GET_MY_ORDERS, produces = MediaType.APPLICATION_JSON_VALUE)
    public String getMyOrders() {

        return orderService.getMyOrders();

    }

    @GetMapping(value = GET_ORDERS_BY_ID)
    public String getOrdersById(@PathVariable("id") String Id) {

        System.out.println("ID is " + Id);
        return orderService.getOrdersById();

    }

}
