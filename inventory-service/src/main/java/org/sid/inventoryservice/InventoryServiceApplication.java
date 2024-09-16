package org.sid.inventoryservice;

import org.sid.inventoryservice.entities.Product;
import org.sid.inventoryservice.repositories.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Random;

@SpringBootApplication
public class InventoryServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(InventoryServiceApplication.class, args);
    }

    @Bean
    CommandLineRunner commandLineRunner(ProductRepository productRepository) {
        return args -> {
            Random random = new Random();

            for (int i = 1; i <= 40; i++) {
                String productName = "Product" + i;
                double price = 50.0 + (200.0 - 50.0) * random.nextDouble(); // Génère un prix entre 50 et 200
                int quantity = random.nextInt(100) + 1; // Génère une quantité entre 1 et 100

                productRepository.save(
                        Product.builder()
                                .name(productName)
                                .price(price)
                                .quantity(quantity)
                                .build()
                );
            }
        };
    }

}
