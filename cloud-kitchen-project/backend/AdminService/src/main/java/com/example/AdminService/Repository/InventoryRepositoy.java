package com.example.AdminService.Repository;

import com.example.AdminService.model.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InventoryRepositoy extends JpaRepository <Inventory,Integer>{
    public Inventory getByFoodId(int productId);
}
