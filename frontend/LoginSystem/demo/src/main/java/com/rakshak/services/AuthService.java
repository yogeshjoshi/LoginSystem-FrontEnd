package com.rakshak.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.rakshak.datamodel.LoginRequest;
import com.rakshak.datamodel.RegisterRequest;
import com.rakshak.services.rest.IAuthService;
import com.rakshak.utility.AppException;

@Component
public class AuthService implements IAuthService{
	
	private final static Logger logger =  LoggerFactory.getLogger(AuthService.class);
	
	@Autowired
	private LoginService loginService;
	
	@Autowired
	private RegisterService registerService;

	@Override
	public String login(LoginRequest loginRequest) throws AppException {
		logger.info("Request received at login method - {}", loginRequest);
		return loginService.execute(loginRequest);
	}

	@Override
	public String register(RegisterRequest registerRequest) throws AppException {
		logger.info("Request received at Register Request");
		return registerService.execute(registerRequest);
	}

	@Override
	public String verify(LoginRequest loginRequest) throws AppException {
		return loginService.verifyOTP(loginRequest);
	}
	
	

}
