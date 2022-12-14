package com.hospiquick.auth.payload.request;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class SignupRequest {
	@NotBlank
	@Size(min=4,max=20)
	private String name;
	
	@NotBlank
	@Size(max = 50)
    @Email
	private String email;
	
	@NotBlank
	@Size(min = 5, max = 20)
	private String password;
	
	@NotBlank
	@Size(min = 10, max = 10)
	private String phoneNo;
	
	
	
//	private Set<String> role;

//	public Set<String> getRole() {
//		return role;
//	}
//
//	public void setRole(Set<String> role) {
//		this.role = role;
//	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}

	

	public SignupRequest() {
		super();
	}
	
	

}
