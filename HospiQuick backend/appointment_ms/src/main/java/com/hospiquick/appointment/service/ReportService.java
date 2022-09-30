package com.hospiquick.appointment.service;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.hospiquick.appointment.model.Report;

@Repository
public interface ReportService {

	public String uploadReport(Report report);
	
	public List<Report> getAllReports();
	
	public List<Report> getReportByName(String patName);
	
	public List<Report> getReportBydepartment(String department);

	public byte[] getReportFile(String patName,String department);

}
