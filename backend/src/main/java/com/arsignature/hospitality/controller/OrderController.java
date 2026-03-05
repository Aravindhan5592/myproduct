package com.arsignature.hospitality.controller;

import com.arsignature.hospitality.model.Order;
import com.arsignature.hospitality.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "*") // Or specify the frontend URL
public class OrderController {

  @Autowired
  private OrderRepository repo;

  @PostMapping
  public Order create(@RequestBody Order order) {
    return repo.save(order);
  }
}
