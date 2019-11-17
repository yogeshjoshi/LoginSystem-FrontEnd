package com.rakshak;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import com.mongodb.MongoClient;
import com.mongodb.ReadPreference;
import com.mongodb.ServerAddress;
import com.mongodb.WriteConcern;

@Configuration
@EnableMongoRepositories(basePackages = { "com.rakshak.repository" })
public class MongoConfig extends AbstractMongoConfiguration {

	@Value("spring.data.mongodb.host")
	private String host;
	@Value("spring.data.mongodb.port")
	private String port;
	@Value("spring.data.mongodb.database")
	private String database;
	
	@SuppressWarnings("deprecation")
	@Override
	public MongoClient mongoClient() {
		MongoClient client = new MongoClient((new ServerAddress(host, Integer.parseInt(port))));
		client.setWriteConcern(WriteConcern.ACKNOWLEDGED);
		client.setReadPreference(ReadPreference.secondary());
		return client;
	}

	@Override
	protected String getDatabaseName() {
		return database;
	}

}
