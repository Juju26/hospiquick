package com.springboot.queries.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.queries.entities.Query;

public interface QueriesDoa extends JpaRepository<Query, Long>{

}
