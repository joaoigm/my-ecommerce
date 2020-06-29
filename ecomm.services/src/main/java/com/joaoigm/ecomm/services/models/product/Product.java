package com.joaoigm.ecomm.services.models.product;

import com.fasterxml.jackson.annotation.JsonInclude;

import javax.persistence.*;
import java.util.Currency;

@Entity
@Table(name = "products")
public class Product {

    @javax.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(length = 60)
    private String name;
    @Column(length = 500)
    private String description;
    private Double price;
    private Integer stock;

    @Transient
    @JsonInclude
    private Boolean Available;

    public Product(String name, String description, Double price, Integer stock) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
    }

    public Product(){}

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getStock() {
        return stock;
    }

    public void setStock(Integer stock) {
        this.stock = stock;
    }

    public Boolean getAvailable() {
        return this.stock > 0;
    }

    public Long getId() {
        return this.id;
    }
}
