package com.example.UserModule.repository;

import com.example.UserModule.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository <User,Integer> {
    User findByEmail(String userId);
    long deleteByUserId(int userId);
}
