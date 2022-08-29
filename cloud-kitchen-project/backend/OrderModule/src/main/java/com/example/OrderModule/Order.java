package com.example.OrderModule;

import javax.persistence.*;

@Entity
@Table (name="orderdetails")
public class Order {
    @Id
    @Column(name = "index")
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private int index;
    @Column(name="orderid")
    private String orderId;
    @Column(name="customerid")
    private int customerId;
    @Column(name="productid")
    private int productId;
    @Column(name="productname")
    private String productName;
    @Column(name="price")
    private float price;
    @Column(name="quantity")
    private int quantity;
    @Column(name="orderstatus")
    private String orderStatus;

 public String getOrderId() {
  return orderId;
 }

 public void setOrderId(String orderId) {
  this.orderId = orderId;
 }

 public int getCustomerId() {
  return customerId;
 }

 public void setCustomerId(int customerId) {
  this.customerId = customerId;
 }

 public int getProductId() {
  return productId;
 }

 public void setProductId(int productId) {
  this.productId = productId;
 }

 public String getProductName() {
  return productName;
 }

 public void setProductName(String productName) {
  this.productName = productName;
 }

 public float getPrice() {
  return price;
 }

 public void setPrice(float price) {
  this.price = price;
 }

 public int getQuantity() {
  return quantity;
 }

 public void setQuantity(int quantity) {
  this.quantity = quantity;
 }

 public String getOrderStatus() {
  return orderStatus;
 }

 public void setOrderStatus(String orderStatus) {
  this.orderStatus = orderStatus;
 }
 public Order()
 {

 }
 public Order(String orderId, int customerId, int productId, String productName, float price, int quantity, String orderStatus) {
  this.orderId = orderId;
  this.customerId = customerId;
  this.productId = productId;
  this.productName = productName;
  this.price = price;
  this.quantity = quantity;
  this.orderStatus = orderStatus;
 }


    @Override
    public String toString() {
        return "Order{" +
                "index=" + index +
                ", orderId='" + orderId + '\'' +
                ", customerId=" + customerId +
                ", productId=" + productId +
                ", productName='" + productName + '\'' +
                ", price=" + price +
                ", quantity=" + quantity +
                ", orderStatus='" + orderStatus + '\'' +
                '}';
    }
}
