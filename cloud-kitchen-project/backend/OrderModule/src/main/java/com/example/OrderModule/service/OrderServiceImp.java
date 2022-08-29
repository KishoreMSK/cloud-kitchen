package com.example.OrderModule.service;

import com.example.OrderModule.Kafka.KafkaConfig;
import com.example.OrderModule.Order;
import com.example.OrderModule.repository.OrderRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;
import org.apache.kafka.common.serialization.StringSerializer;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

@Service
public class OrderServiceImp implements OrderService{
    @Autowired
    OrderRepository orderRepository;

    @Autowired
    RestTemplate restTemplate;

    @Autowired
    private KafkaTemplate <String, String> kafkaTemplate;
    @Autowired
    private KafkaConfig kafkaConfig;
    @Autowired
    private ObjectMapper objectMapper;
    private String kafkaMessage;

    @Override
    public String insertOrders(List<Order> orderList)
    {
       try{
            String URI = UriComponentsBuilder.fromHttpUrl("http://localhost:8888/admin/makeOrder").encode().toUriString();
            HttpHeaders httpHeaders = new HttpHeaders();
            httpHeaders.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
            HttpEntity<List> entity = new HttpEntity <List> (orderList,httpHeaders);
            String response =  restTemplate.exchange(URI, HttpMethod.POST, entity, String.class).getBody();
            orderRepository.saveAll(orderList);

        }catch (Exception e){
           System.out.println (e.getMessage () );
        }
       return "success";
    }
    @Override
    public String cancelOrders(List<Order> orderList)throws JsonProcessingException
    {
            orderRepository.saveAll (orderList);
            String kafkaString = objectMapper.writeValueAsString (orderList);
            kafkaTemplate.send ("cancelOrder", UUID.randomUUID().toString(), kafkaString);
            System.out.println ("sent" );
            return "sent";
    }
}

