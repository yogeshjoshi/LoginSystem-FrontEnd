package com.rakshak.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.rakshak.datamodel.UserInfo;


public interface UserInfoRepository extends MongoRepository<UserInfo, Long> {
	UserInfo findByEmail(String email);
	UserInfo findByContactNumber(String contactNumber);
}
