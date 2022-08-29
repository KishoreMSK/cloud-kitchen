package com.example.AdminService.model;

import org.apache.kafka.common.protocol.types.Field;
import org.hibernate.annotations.Type;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table(name = "inventory")
public class Inventory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "foodid")
    private int foodId;
    @Column(name = "foodname")
    private String foodName;
    @Column(name = "price")
    private double price;
    @Column(name = "stockcount")
    private int stockCount;
    @Column(name = "itemtype")
    private String itemType;
    @Column(name = "category")
    private String category;
    @Column(name = "cuisine")
    private String cuisine;
    @Column(name = "description")
    private String description;
    @Column(name="rating")
    private double rating;
    @Column(name="duration")
    private String duration;
    @Column(name = "offer")
    private String offer;
    @Column(name = "coupon")
    private String coupon;
    @Column(name = "url")
    private String url;

    public int getFoodId() {
        return foodId;
    }

    public Inventory() {
    }

    public Inventory(int foodId, String foodName, double price, int stockCount,
                     String itemType, String category, String cuisine, String description,
                     double rating, String duration, String offer, String coupon, String url) {
        this.foodId = foodId;
        this.foodName = foodName;
        this.price = price;
        this.stockCount = stockCount;
        this.itemType = itemType;
        this.category = category;
        this.cuisine = cuisine;
        this.description = description;
        this.rating = rating;
        this.duration = duration;
        this.offer = offer;
        this.coupon = coupon;
        this.url = url;
    }

    public void setFoodId(int foodId) {
        this.foodId = foodId;
    }

    public String getFoodName() {
        return foodName;
    }

    public void setFoodName(String foodName) {
        this.foodName = foodName;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getStockCount() {
        return stockCount;
    }

    public void setStockCount(int stockCount) {
        this.stockCount = stockCount;
    }

    public String getItemType() {
        return itemType;
    }

    public void setItemType(String itemType) {
        this.itemType = itemType;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getCuisine() {
        return cuisine;
    }

    public void setCuisine(String cuisine) {
        this.cuisine = cuisine;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getOffer() {
        return offer;
    }

    public void setOffer(String offer) {
        this.offer = offer;
    }

    public String getCoupon() {
        return coupon;
    }

    public void setCoupon(String coupon) {
        this.coupon = coupon;
    }

    public String getUrl() {
        return url;
    }

    public void setImage(String url) {
        this.url = url;
    }

    @Override
    public String toString() {
        return "Inventory{" +
                "foodId=" + foodId +
                ", foodName='" + foodName + '\'' +
                ", price=" + price +
                ", stockCount=" + stockCount +
                ", itemType='" + itemType + '\'' +
                ", category='" + category + '\'' +
                ", cuisine='" + cuisine + '\'' +
                ", description='" + description + '\'' +
                ", rating=" + rating +
                ", duration='" + duration + '\'' +
                ", offer='" + offer + '\'' +
                ", coupon='" + coupon + '\'' +
                ", url='" + url + '\'' +
                '}';
    }
}
