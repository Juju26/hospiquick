package com.hospiquick.auth.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hospiquick.auth.models.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
  Optional<User> findByName(String name);
  
  Boolean existsByUserId(Long userId);
  Boolean existsByPhoneNo(String Phoneno);
  Boolean existsByEmail(String email);
}
