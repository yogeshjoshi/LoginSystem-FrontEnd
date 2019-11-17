package com.rakshak.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import com.rakshak.datamodel.RegisterRequest;
import com.rakshak.datamodel.UserInfo;
import com.rakshak.repository.UserInfoRepository;
import com.rakshak.utility.AppException;

import ch.qos.logback.core.pattern.util.RegularEscapeUtil;

@Component
public class RegisterService {
	
	private final static Logger logger = LoggerFactory.getLogger(RegisterService.class);
	
	@Autowired
	private UserInfoRepository userInfoRepository;
	
	public String execute(RegisterRequest registerRequest) throws AppException {
		logger.info("Validating the input ... -{}", registerRequest);
		validate(registerRequest);
		UserInfo userInfo = new UserInfo();
		userInfo.setUserName(registerRequest.getName());
		userInfo.setEmail(registerRequest.getEmailId());
		userInfo.setPassword(registerRequest.getPassword());
		userInfo.setContactNumber(registerRequest.getMobileNumber());
		logger.info("User Object has been made succsfully");
		
		userInfoRepository.insert(userInfo);
		
		return "SUCCESS";
	}
	private void validate(RegisterRequest registerRequest) throws AppException {
		if(StringUtils.isEmpty(registerRequest.getEmailId()) || StringUtils.isEmpty(registerRequest.getMobileNumber())
				|| StringUtils.isEmpty(registerRequest.getName()) || StringUtils.isEmpty(registerRequest.getPassword())){
			throw new AppException("", "Register service Failed, Something is mising");
		}
	}
}
