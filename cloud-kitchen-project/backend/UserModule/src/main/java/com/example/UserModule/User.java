package com.example.UserModule;
import javax.persistence.*;

@Entity
@Table (name="userdetails")
public class User {
   @Id
    @Column(name="userid")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;
    @Column(name="username")
    private String userName;
    @Column(name="phoneno")
    private String phoneNo;
    @Column(name="email")
    private String email;
    @Column(name="address")
    private String address;
    @Column(name="usertype")
    private String userType;
    @Column(name="loginpassword")
    private String loginPassword;

    public User(int userId, String userName, String phoneNo, String email, String address, String userType, String loginPassword) {
        this.userId = userId;
        this.userName = userName;
        this.phoneNo = phoneNo;
        this.email = email;
        this.address = address;
        this.userType = userType;
        this.loginPassword = loginPassword;
    }
    public User()
    {

    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }
    public String getLoginPassword() {
        return loginPassword;
    }

    public void setLoginPassword(String loginPassword) {
        this.loginPassword = loginPassword;
    }
}
