package com.rakshak.datamodel;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LoginRequest {
	@JsonProperty("emailId")
	private String emailId;
	@JsonProperty("password")
	private String password;
	@JsonProperty("loginType")
	private String loginType;
	@JsonProperty("mobileNumber")
	private String mobileNumber;
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getLoginType() {
		return loginType;
	}
	public void setLoginType(String loginType) {
		this.loginType = loginType;
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	@Override
	public String toString() {
		return "LoginRequest [emailId=" + emailId + ", password=" + password + ", loginType=" + loginType
				+ ", mobileNumber=" + mobileNumber + "]";
	}
	
}
