package com.hospiquick.auth.security.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hospiquick.auth.models.User;
import com.hospiquick.auth.repository.UserRepository;


@Service
public class UserDetailServiceImpl implements UserDetailsService {
	
	private static final Logger logger=LoggerFactory.getLogger(UserDetailServiceImpl.class);
  
	@Autowired
	UserRepository userRepository;
	
	
	@Override
	@Transactional
	public UserDetails loadUserByUsername(String name) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		logger.info("inside the loadUserByUsername");
		User user=userRepository.findByName(name)
				.orElseThrow(()->new UsernameNotFoundException("User not Found with username: "+name));
		logger.info(user.getUserId().toString());
		return UserDetailsImpl.build(user);
	}

}
