package com.joaoigm.ecomm.services.models.orders;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.joaoigm.ecomm.services.models.cart.CartProducts;
import com.joaoigm.ecomm.services.models.user.User;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "order", targetEntity = OrderProducts.class, fetch = FetchType.LAZY)
    private List<OrderProducts> products;

    @ManyToOne
    private User user;

    private Double totalPrice;

    private LocalDateTime orderDate;

    @JsonCreator
    public Order(List<OrderProducts> products, Double totalPrice) {
        this.products = products;
        this.totalPrice = totalPrice;
    }

    public Order(){}

    public List<OrderProducts> getProducts() {
        return products;
    }

    public void setProducts(List<OrderProducts> products) {
        this.products = products;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public LocalDateTime getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(LocalDateTime orderDate) {
        this.orderDate = orderDate;
    }

    public Long getId() {
        return id;
    }
}
