package com.joaoigm.ecomm.services.models.cart;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.joaoigm.ecomm.services.models.user.User;

import javax.persistence.*;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "carts")
public class Cart {

    @javax.persistence.Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @OneToOne
    private com.joaoigm.ecomm.services.models.user.User user;

    @OneToMany(
            mappedBy = "cart",
            orphanRemoval = true,
            cascade = CascadeType.ALL
    )
    private List<com.joaoigm.ecomm.services.models.cart.CartProducts> cartProducts;

    public Cart(List<com.joaoigm.ecomm.services.models.cart.CartProducts> cartProducts) {
        this.cartProducts = cartProducts;
    }
    public Cart(List<com.joaoigm.ecomm.services.models.cart.CartProducts> cartProducts, com.joaoigm.ecomm.services.models.user.User user) {
        this.cartProducts = cartProducts;
        this.user = user;
    }

    public Cart(Long id, com.joaoigm.ecomm.services.models.user.User user, List<com.joaoigm.ecomm.services.models.cart.CartProducts> cartProducts) {
        this.id = id;
        this.user = user;
        this.cartProducts = cartProducts;
    }

    public boolean idIsNullOrEmpty(){
        return this.id.toString().isEmpty();
    }

    public Cart(){}

    public com.joaoigm.ecomm.services.models.user.User getUser() {
        return user;
    }

    public void setUser(com.joaoigm.ecomm.services.models.user.User user) {
        this.user = user;
    }

    public List<com.joaoigm.ecomm.services.models.cart.CartProducts> getCartProducts() {
        return cartProducts;
    }

    public void setCartProducts(List<com.joaoigm.ecomm.services.models.cart.CartProducts> cartProducts) {
        this.cartProducts = cartProducts;
    }

    public Long getId() {
        return this.id;
    }
}

