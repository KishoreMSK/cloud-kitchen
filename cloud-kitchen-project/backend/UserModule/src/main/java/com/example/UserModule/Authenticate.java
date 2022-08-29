package com.example.UserModule;

public class Authenticate {
    String userId;
    String loginPassword;
    String userType;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getLoginPassword() {
        return loginPassword;
    }

    public void setLoginPassword(String loginPassword) {
        this.loginPassword = loginPassword;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }
    public Authenticate()
    {

    }
    public Authenticate(String userId, String loginPassword, String userType) {
        this.userId = userId;
        this.loginPassword = loginPassword;
        this.userType = userType;
    }
}
