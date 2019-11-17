package com.rakshak.services.rest;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rakshak.datamodel.LoginRequest;
import com.rakshak.datamodel.RegisterRequest;
import com.rakshak.utility.AppException;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = {"*"})
public interface IAuthService {
	
	@PostMapping("/login")
	public String login(@RequestBody LoginRequest loginRequest) throws AppException;
	
	@PostMapping("/register")
	public String register(@RequestBody RegisterRequest registerRequest) throws AppException;
	
	@PostMapping("/verifyOTP")
	public String verify(@RequestBody LoginRequest loginRequest) throws AppException;
}
