package com.example.UserModule.userService;

import com.example.UserModule.Authenticate;
import com.example.UserModule.User;
import com.example.UserModule.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.transaction.Transactional;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.List;

@Service
public class UserServiceInterfaceImp implements UserServiceInterface {

    @Autowired
    UserRepository userRepository;

    @Value("${spring.adminId}")
    private String adminId;
    @Value("${spring.adminPassword}")
    private String adminPassword;
    @Override
    public int createUser(User user) {
        String hashtext= UserServiceInterfaceImp.encryption (user.getLoginPassword ( ));
        user.setLoginPassword (hashtext);
        userRepository.save (user);
        return user.getUserId ();
    }

    @Override
    public boolean validateUser(Authenticate authenticate) {
        String userId= authenticate.getUserId ( );
        String loginPassword= authenticate.getLoginPassword ( );
        String userType= authenticate.getUserType ( );
        if(userType.equalsIgnoreCase ("customer")) {
            try {
                User user = userRepository.findByEmail (userId);
                if (user.getEmail ().equals(userId)) {
                    String hashtext = UserServiceInterfaceImp.encryption (loginPassword);
                    return hashtext.equals (user.getLoginPassword ( )) ? true : false;
                }
            } catch (Exception e) {
                throw new ResponseStatusException (HttpStatus.NOT_FOUND, e.getMessage ( ), e);
            }
        }
        else if(userType.equalsIgnoreCase ("admin"))
        {
            if(userId.equals(adminId)&&loginPassword.equals (adminPassword))
            {
                return true;
            }
        }
        return false;
    }
    @Override
    public User updateUser(User user) {
        return userRepository.save (user);
    }

    @Override
    @Transactional
    public long deleteUser(int userId) {
        return userRepository.deleteByUserId (userId);
    }

    @Override
    public List <User> getAllUserDetails()
    {
       return userRepository.findAll();
    }
    public static String encryption(String loginPassword)
    {
        try
        {
            MessageDigest md = MessageDigest.getInstance("SHA-1");
            byte[] messageDigest = md.digest(loginPassword.getBytes());
            BigInteger no = new BigInteger(1, messageDigest);
            String hashtext = no.toString(16);
            while (hashtext.length() < 32) {
                hashtext = "0" + hashtext;
            }
            return hashtext;
        }
        catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        }
    }
}
