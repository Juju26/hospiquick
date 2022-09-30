package com.hospiquick.appointment.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table(name="hospiquick_reports")
public class Report {
	
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@Column(name="reportId")
	private int reportId;
	
	@Column(name = "patName")
	private String patName;
	
	@Column(name="department")
	private String department;
	
	@Column(name="patReport")
	@Lob
	private byte[] patReport;

	
	
	
	public Report() {
		super();
	}




	public Report(int id, int reportId, String patName, String department, byte[] patReport) {
		super();
		this.id = id;
		this.reportId = reportId;
		this.patName = patName;
		this.department = department;
		this.patReport = patReport;
	}




	public int getId() {
		return id;
	}




	public void setId(int id) {
		this.id = id;
	}




	public int getReportId() {
		return reportId;
	}




	public void setReportId(int reportId) {
		this.reportId = reportId;
	}




	public String getPatName() {
		return patName;
	}




	public void setPatName(String patName) {
		this.patName = patName;
	}




	public String getDepartment() {
		return department;
	}




	public void setDepartment(String department) {
		this.department = department;
	}




	public byte[] getPatReport() {
		return patReport;
	}




	public void setPatReport(byte[] patReport) {
		this.patReport = patReport;
	}

	
	
	
	

}
