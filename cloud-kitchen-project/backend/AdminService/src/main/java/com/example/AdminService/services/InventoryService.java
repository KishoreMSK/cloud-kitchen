package com.example.AdminService.services;

import com.example.AdminService.model.Inventory;
import com.example.AdminService.model.Orders;

import javax.persistence.criteria.Order;
import java.util.List;
import java.util.Optional;

public interface InventoryService {

    public List<Inventory> getAllList();
    public String addItems(Inventory foodItems);
    public String addAllItems(List<Inventory> inventoryList);
    public String updateItems(int id);
    public Optional<Inventory> getById(int id);
    public Inventory updateById(Inventory inventory);
    public String deleteById(int id);
    public String makeOrder(List<Orders> orderList);
    public void cancelOrder(String message);

}
