package com.example.OrderModule.controller;

import com.example.OrderModule.Order;
import com.example.OrderModule.service.OrderService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriBuilderFactory;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
@CrossOrigin("*")
@RestController
@RequestMapping("/order")
public class OrderController {

    @Autowired
    RestTemplate restTemplate;
    @Autowired
    OrderService orderService;
    @PostMapping("/insertOrders")
    public String insertOrders(@RequestBody List <Order> order)
    {
        return orderService.insertOrders(order);
    }
    @PostMapping("/cancelOrders")
    public String cancelOrders(@RequestBody List<Order> order)throws JsonProcessingException
    {
        return orderService.cancelOrders (order);
    }
}
