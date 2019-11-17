package com.rakshak.services;

import java.text.DecimalFormat;
import java.util.Random;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import com.rakshak.datamodel.LoginRequest;
import com.rakshak.datamodel.OTPInfo;
import com.rakshak.datamodel.UserInfo;
import com.rakshak.repository.OTPInfoRepository;
import com.rakshak.repository.UserInfoRepository;
import com.rakshak.utility.AppException;

@Component
public class LoginService {
	private static final Logger logger = LoggerFactory.getLogger(LoginService.class);
	
	@Autowired
	private UserInfoRepository userInfoRepository;
	
	@Autowired
	private SMSSenderService smsService;
	
	@Autowired
	private OTPInfoRepository otpInfoRepository;
	
	public String execute(LoginRequest loginRequest) throws AppException {
		logger.info("Executing the Login Service");
		validate(loginRequest);	
		if(loginRequest.getLoginType().equals("emailBased")) {
			UserInfo user =  userInfoRepository.findByEmail(loginRequest.getEmailId());
			if(user != null && user.getPassword() != null)
			{
				if(loginRequest.getPassword().equals(user.getPassword())) {
					return "SUCCESS";
				}else
					return "FAILURE";
				
			}else {
				logger.info("User Doesn't Exist");
				return "NOT_EXIST";
			}
		}else if(loginRequest.getLoginType().equals("otpBased")) {
			UserInfo user = userInfoRepository.findByContactNumber(loginRequest.getMobileNumber());
			if(user != null) {
				String message = generateOTPMessage(loginRequest.getMobileNumber());
				smsService.sendSMS(loginRequest.getMobileNumber(), "91", message); //Hard coding country code
			}else {
				logger.info("User Doesn't Exist");
				return "NOT_EXIST";
			}
		}
		
		return "NEW LOGIN METHOD FOUND";
	}
	
	private void validate(LoginRequest loginRequest) throws AppException{
		if(StringUtils.isEmpty(loginRequest.getLoginType()))
			throw new AppException("", "Login Validation Failed");
		if(StringUtils.isEmpty(loginRequest.getEmailId()) && StringUtils.isEmpty(loginRequest.getMobileNumber()))
			throw new AppException("","Login Validation Failed");
	}
	/**
	 * Generates OTP and saves it to Corresponding Number
	 * @param number
	 * @return
	 */
	private String generateOTPMessage(String number) {
		String fmessage = "Hi, OTP for sign in is YC-";
		String emessage = " Please Don't share with anyone.";
		String otp = new DecimalFormat("000000").format(new Random().nextInt(999999));
		OTPInfo otpInfo = new OTPInfo();
		otpInfo.setMobileNumber(number);
		otpInfo.setOTP(otp);
		otpInfoRepository.insert(otpInfo);
		return fmessage+otp+emessage;
	}
	
	public String verifyOTP(LoginRequest loginRequest) {
		String number =  loginRequest.getMobileNumber();
		String otp = loginRequest.getPassword();
		OTPInfo otpInfo = otpInfoRepository.findByMobileNumber(number);
		if(otpInfo != null) {
			if(otp.equals(otpInfo.getOTP())) {
				otpInfoRepository.delete(otpInfo);
				return "SUCCESS";
			}else {
				return "FAILURE";
			}
		}
		return "NOT_EXIST";
	}
}
