package com.example.OrderModule.service;

import com.example.OrderModule.Order;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.oracle.javafx.jmx.json.JSONException;

import java.util.List;

public interface  OrderService {
    public String insertOrders(List<Order> order);
    public String cancelOrders(List<Order> order)throws JsonProcessingException;
}
