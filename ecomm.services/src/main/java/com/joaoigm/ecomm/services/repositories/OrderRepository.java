package com.joaoigm.ecomm.services.repositories;

import com.joaoigm.ecomm.services.models.orders.Order;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface OrderRepository extends CrudRepository<Order, Long> {

    List<Order> findAllByUserId(Long id);
}
