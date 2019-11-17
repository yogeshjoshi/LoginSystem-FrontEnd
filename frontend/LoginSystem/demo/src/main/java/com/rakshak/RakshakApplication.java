package com.rakshak;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@ComponentScan(basePackages = { "com.rakshak.*"})
@EnableMongoRepositories(basePackages = { "com.rakshak.repository" })
@PropertySource("classpath:application.properties")
public class RakshakApplication {

	public static void main(String[] args) {
		SpringApplication.run(RakshakApplication.class, args);
	}

}
