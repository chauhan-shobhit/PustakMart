package com.pustakmart.authAndCartAndCheckout.constants;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class URIConstants {

    public static final String GET_MY_ORDERS = "/myorders";
    public static final String GET_ORDERS_BY_ID = "/{id}";
    public static final String PUT_ORDER_TO_PAID = "/{id}/pay";
    public static final String PUT_ORDER_TO_DELIVERED = "/{id}/deliver";

}
