package com.rakshak.datamodel;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RegisterRequest {
	@JsonProperty("name")
	private String name;
	@JsonProperty("emailId")
	private String emailId;
	@JsonProperty("password")
	private String password;
	@JsonProperty("mobileNumber")
	private String mobileNumber;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
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
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	@Override
	public String toString() {
		return "RegisterRequest [name=" + name + ", emailId=" + emailId + ", password=" + password + ", mobileNumber="
				+ mobileNumber + "]";
	}
	
}
