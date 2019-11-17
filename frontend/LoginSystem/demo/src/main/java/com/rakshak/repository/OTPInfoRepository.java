package com.rakshak.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.rakshak.datamodel.OTPInfo;

public interface OTPInfoRepository extends MongoRepository<OTPInfo, Long> {
	OTPInfo findByMobileNumber(String mobileNumber);
}
