package com.rakshak.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import kong.unirest.HttpResponse;
import kong.unirest.Unirest;

@Component
public class SMSSenderService {

	private static final Logger logger = LoggerFactory.getLogger(SMSSenderService.class);

	@Value("${account.sms.auth_token}")
	private String auth_token;

	@Value("${sender}")
	private String senderInfo;
	@Value("${sms.provider.route}")
	private String route;
	@Value("${sms.provider.url}")
	private String url;

	public HttpResponse<String> sendSMS(String destinationNumber, String destinationCountryCode, String sentmessage) {
		logger.info("Initiating the Sender Service");
		String endPoint = url + route + "&sender=" + senderInfo + "&message=" + sentmessage + "&country="
				+ destinationCountryCode + "&mobiles=" + destinationNumber + "&authkey=" + auth_token;
		HttpResponse<String> response = Unirest.get(endPoint.replaceAll("\\s+", "%20")).asString();
		return response;
	}
}
