package com.example.MovieFavouriteService;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.openfeign.EnableFeignClients;

@EnableEurekaClient
@SpringBootApplication
@EnableFeignClients
public class MovieFavouriteServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(MovieFavouriteServiceApplication.class, args);
	}
}
