package com.joaoigm.ecomm.services.models.orders;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.joaoigm.ecomm.services.models.cart.Cart;
import com.joaoigm.ecomm.services.models.product.Product;

import javax.persistence.*;

@Entity
@Table(name = "order_products")
public class OrderProducts {

    @javax.persistence.Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "order_id")
    @JsonIgnore
    private Order order;

    @OneToOne
    private Product product;

    @Column(nullable = false)
    private Integer quantity;

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Long getId() {
        return id;
    }

    @JsonCreator
    public OrderProducts(Product product, Integer quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    public OrderProducts(Order order, Product product, Integer quantity) {
        this.order = order;
        this.product = product;
        this.quantity = quantity;
    }

    public OrderProducts(){}
}
