package com.hospiquick.auth.service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.hospiquick.auth.exception.TokenException;
import com.hospiquick.auth.models.Role;
import com.hospiquick.auth.models.URole;
import com.hospiquick.auth.models.User;
import com.hospiquick.auth.payload.request.SignupRequest;
import com.hospiquick.auth.payload.response.JwtResponse;
import com.hospiquick.auth.payload.response.TokenValidation;
import com.hospiquick.auth.repository.RoleRepository;
import com.hospiquick.auth.repository.UserRepository;
import com.hospiquick.auth.security.jwt.JwtUtils;
import com.hospiquick.auth.security.services.UserDetailServiceImpl;
import com.hospiquick.auth.security.services.UserDetailsImpl;

@Service
public class AuthServiceImpl implements AuthService {
	private static final Logger logger=LoggerFactory.getLogger(AuthServiceImpl.class);
	@Autowired
	  AuthenticationManager authenticationManager;
	  
	  @Autowired
	  UserRepository userRepository;
	  
	  @Autowired
	  RoleRepository roleRepository;
	  
	  @Autowired
	  PasswordEncoder encoder;
	  
	  @Autowired
	  JwtUtils jwtUtils;
	  
	  @Autowired
	  UserDetailServiceImpl userDetailsService;
	  
	  public JwtResponse signInResponse(String userId,String password) {
		  
		  Authentication authentication=authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userId,password));
		  SecurityContextHolder.getContext().setAuthentication(authentication);

		    UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

		    String jwt = jwtUtils.generateJwtToken(userDetails);
		    List<String> roles = userDetails.getAuthorities().stream().map(item -> item.getAuthority())
		            .collect(Collectors.toList());
		    Optional<User> optionalUser=userRepository.findByName(userDetails.getName());
		    User user=optionalUser.get();
		    logger.info("user details : "+user.getName()+user.getEmail()+user.getPassword());
		    return new JwtResponse(jwt,userDetails.getUserid(),
		            user.getName(), userDetails.getEmail(), roles);
	  }
	  
	  public boolean existPhoneNo(String phoneNo) {
		 if( userRepository.existsByPhoneNo(phoneNo)) {
			 return true;
		 }else {
			 return false;
		 }
	  }
	  public boolean existEmail(String email) {
		  if(userRepository.existsByEmail(email)) {
			  return true;
		  }else {
			  return false;
		  }
	  }
	  public JwtResponse signupResponse(String name,String email,String password,String phoneNo) {
		  User user = new User(name,email,
		            encoder.encode(password),phoneNo);
		    
		    Set<Role> roles = new HashSet<>();
		    
		    Role userRole = roleRepository.findByName(URole.ROLE_USER)
		            .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
		        roles.add(userRole); 
		        
		   user.setRoles(roles);
		   userRepository.save(user);
		   List<String> roleslist = roles.stream().map(item->item.getName().toString()).collect(Collectors.toList());
		   
		   String jwt = jwtUtils.generateTokenFromUserId(user.getName());
		   
		   return (new JwtResponse(jwt,user.getUserId(),
		            user.getName(), user.getEmail(),roleslist));
	  }

	public JwtResponse adminSignUp(String name, String email, String password, String phoneNo) {
		User user = new User(name,email,
	            encoder.encode(password),phoneNo);
	    
	    Set<Role> roles = new HashSet<>();
	    
	    Role userRole = roleRepository.findByName(URole.ROLE_ADMIN)
	            .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
	        roles.add(userRole); 
	        
	   user.setRoles(roles);
	   userRepository.save(user);
	   List<String> roleslist = roles.stream().map(item->item.getName().toString()).collect(Collectors.toList());
	   
	   String jwt = jwtUtils.generateTokenFromUserId(user.getName());
	   
	   return (new JwtResponse(jwt,user.getUserId(),
	            user.getName(), user.getEmail(),roleslist));
	}
	public TokenValidation validationToken(String tokenDup) {
		String token = tokenDup.substring(7);		
		try {
			if (Boolean.TRUE.equals(jwtUtils.validateJwtToken(token))) {
				return new TokenValidation(true);
			} else {
				throw new TokenException(token,"Invalid Token");
			}
		} catch (Exception e) {
			
			return new TokenValidation(false);
		}
	}
	
	public User searchUser(String name,SignupRequest signUpRequest) {
		Optional<User> optionalUser=userRepository.findByName(name);
		User user=optionalUser.get();
		if(signUpRequest.getEmail()!=null) {
			user.setEmail(signUpRequest.getEmail());
		}
		if(signUpRequest.getName()!=null) {
			user.setName(signUpRequest.getName());
		}
		if(signUpRequest.getPhoneNo()!=null) {
			user.setPhoneNo(signUpRequest.getPhoneNo());
		}
		
		if(signUpRequest.getPassword()!=null) {
			user.setPassword(encoder.encode(signUpRequest.getPassword()));
		}
		userRepository.save(user);
		
		return user;
//		return new JwtResponse(null,user.getUserId(),user.getName(),user.getEmail(),null);
		
	}
	
	public User userCheck(String name) {
		  Optional<User> findByUserId = userRepository.findByName(name);
		  User user=findByUserId.get();
		  return user;
	}

//	@Override
//	public JwtResponse signupResponse(String name, String email, String password, String phoneNo) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//
//	@Override
//	public JwtResponse adminSignUp(String name, String email, String password, String phoneNo) {
//		// TODO Auto-generated method stub
//		return null;
//	}
}
