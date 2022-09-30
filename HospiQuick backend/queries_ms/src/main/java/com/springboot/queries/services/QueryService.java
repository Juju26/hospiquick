package com.springboot.queries.services;

import java.util.List;

import com.springboot.queries.entities.Query;

public interface QueryService {
	
	public List<Query> getAllQueries();
	public String postNewQuery(Query query);
	public String updateQueryById(Long queryId, Query query);
	public String deleteQueryById(Long queryId);
}
