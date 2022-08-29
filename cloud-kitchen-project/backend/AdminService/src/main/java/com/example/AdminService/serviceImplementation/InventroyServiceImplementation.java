package com.example.AdminService.serviceImplementation;

import com.example.AdminService.Repository.InventoryRepositoy;
import com.example.AdminService.model.Inventory;
import com.example.AdminService.model.Orders;
import com.example.AdminService.services.InventoryService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.Order;
import java.util.List;
import java.util.Optional;

@Service
public class InventroyServiceImplementation implements InventoryService {

    @Autowired
    InventoryRepositoy inventoryRepositoy;
    @Autowired
    ObjectMapper objectMapper;

    @Override
    public List<Inventory> getAllList() {

        return inventoryRepositoy.findAll ( );
    }

    @Override
    public String addItems(Inventory foodItem) {
        inventoryRepositoy.save(foodItem);
        return "Food added Successfully to the Inventory.";
    }

    @Override
    public String addAllItems(List <Inventory> inventoryList) {
        inventoryRepositoy.saveAll (inventoryList);
        return "All Items have been Saved";
    }


    @Override
    public String updateItems(int id) {
        return null;
    }

    @Override
    public Optional<Inventory> getById(int id) {
        return inventoryRepositoy.findById(id);
    }

    @Override
    public Inventory updateById(Inventory inventory) {
        return inventoryRepositoy.save(inventory);
    }

    @Override
    public String deleteById(int id) {
        inventoryRepositoy.deleteById(id);
        return "The Data is deleted Successfully.";
    }
    @Override
    public String makeOrder(List<Orders> orderList){
        try {
            for (Orders o : orderList) {
                int productId = o.getProductId();
                int stock = o.getQuantity();
                System.out.println (stock );
                Inventory inventory = inventoryRepositoy.getByFoodId(productId);
                if(inventory==null){
                    return "Item Not Found";
                }
                inventory.setStockCount(inventory.getStockCount() - stock);
                inventoryRepositoy.save(inventory);
                System.out.println(o);
            }
        }
        catch(Exception e)
        {
            System.out.println(e);
        }
        return "Updated";
    }

    @Override
    public void cancelOrder(String message){
        TypeReference <List<Orders>> ref = new TypeReference<List<Orders>>(){};
        try {

            List<Orders> ordersList = objectMapper.readValue(message,ref);
            for (Orders o : ordersList) {
                int productId = o.getProductId ( );
                int stock = o.getQuantity ( );
                Inventory inventory = inventoryRepositoy.getByFoodId (productId);
                inventory.setStockCount (inventory.getStockCount ( ) + stock);
                inventoryRepositoy.save (inventory);
                System.out.println (o);
            }
        }
        catch(Exception e) {
            //System.out.println (e );
        }
    }
}
