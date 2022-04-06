package com.pustakmart.authAndCartAndCheckout.model;

import java.util.Date;
import java.util.List;

public class Orders {

    private String paymentMethod;
    private double shippingCost;
    private double taxCost;
    private double totalCost;
    private boolean isPaid;
    private boolean isDelivered;
    private Date paidAt;
    private Date deliveredAt;
    private Date lastModifiedDtm;
    private Date createdDtm;
    private List<OrderItem> listOfOrderedItems;

}
