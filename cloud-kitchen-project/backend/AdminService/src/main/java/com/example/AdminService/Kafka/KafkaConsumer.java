package com.example.AdminService.Kafka;

import com.example.AdminService.services.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

@Component
public class KafkaConsumer {
    @Autowired
    InventoryService inventoryService;
    @KafkaListener (topics="cancelOrder",groupId="group_id")
    public void consume(String message){
        System.out.println( "Data Consumed by Database : "+message);
        inventoryService.cancelOrder(message);
    }
}
