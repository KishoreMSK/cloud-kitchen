package com.example.AdminService.controller;

import com.example.AdminService.Repository.InventoryRepositoy;
import com.example.AdminService.model.Inventory;
import com.example.AdminService.model.Orders;
import com.example.AdminService.services.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    InventoryService inventoryService;
    @Autowired
    InventoryRepositoy inventoryRepositoy;

    @GetMapping("/getAll")
    public List<Inventory> getAllItems(){
        return inventoryService.getAllList();
    }

    @PostMapping("/makeOrder")
    public void updateInventory(@RequestBody List<Orders> ordersList){
         inventoryService.makeOrder (ordersList);
    }
    @PostMapping("/insertAll")
    public String insertAllFood(@RequestBody List<Inventory> inventory){
        return inventoryService.addAllItems(inventory);
    }


    @PostMapping("/insert")
    public String insertFood(@RequestBody Inventory inventory){
        return inventoryService.addItems(inventory);
    }


    @GetMapping("/getById")
    public Optional<Inventory> getById(@RequestParam ("id") int id){
        return inventoryService.getById(id);
    }
    @PutMapping("/updateById")
    public Inventory updateById (@RequestBody Inventory inventory){
        return inventoryService.updateById(inventory);
    }

    @DeleteMapping("/deleteById")
    public String deleteById(@RequestParam("id") int id){
        return inventoryService.deleteById(id);
    }
}
