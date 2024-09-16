package org.sid.inventoryservice.controllers;

import lombok.RequiredArgsConstructor;
import org.sid.inventoryservice.entities.Product;
import org.sid.inventoryservice.repositories.ProductRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ProductController {
    private final ProductRepository productRepository;

    @GetMapping("/products")
    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }

    @GetMapping("/products/{id}")
    public Product getAllProducts(@PathVariable Long id){
        return productRepository.findById(id).orElse(null);
    }

}
