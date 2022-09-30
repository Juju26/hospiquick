package com.hospiquick.auth.service;

import com.hospiquick.auth.models.User;
import com.hospiquick.auth.payload.request.SignupRequest;
import com.hospiquick.auth.payload.response.JwtResponse;
import com.hospiquick.auth.payload.response.TokenValidation;

public interface AuthService {
	 public JwtResponse signInResponse(String userId,String password);
	 public boolean existPhoneNo(String phoneNo);
	 public boolean existEmail(String email);
	 public JwtResponse signupResponse(String name,String email,String password,String phoneNo);
	 public JwtResponse adminSignUp(String name, String email, String password, String phoneNo);
	 public TokenValidation validationToken(String tokenDup);
	 public User searchUser(String id,SignupRequest signUpRequest);
	 public User userCheck(String id);
}
