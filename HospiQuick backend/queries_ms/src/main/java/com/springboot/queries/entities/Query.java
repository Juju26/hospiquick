package com.springboot.queries.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Query {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private long queryId;
	@Column(name="queryTitle")
	private String queryTitle;
	@Column(name="querySolution")
	private String querySolution;
	
	
	public Query(long queryId, String queryTitle, String querySolution) {
		super();
		this.queryId = queryId;
		this.queryTitle = queryTitle;
		this.querySolution = querySolution;
	}
	
	
	public Query() {
		super();
		// TODO Auto-generated constructor stub
	}


	public long getQueryId() {
		return queryId;
	}
	public void setQueryId(long queryId) {
		this.queryId = queryId;
	}
	public String getQueryTitle() {
		return queryTitle;
	}
	public void setQueryTitle(String queryTitle) {
		this.queryTitle = queryTitle;
	}
	public String getQuerySolution() {
		return querySolution;
	}
	public void setQuerySolution(String querySolution) {
		this.querySolution = querySolution;
	}


	@Override
	public String toString() {
		return "Query [queryId=" + queryId + ", queryTitle=" + queryTitle + ", querySolution=" + querySolution + "]";
	}
	
	
}
