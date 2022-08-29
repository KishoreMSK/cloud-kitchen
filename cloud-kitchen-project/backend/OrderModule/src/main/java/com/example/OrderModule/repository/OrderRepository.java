package com.example.OrderModule.repository;

import com.example.OrderModule.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository <Order,String> {
}
