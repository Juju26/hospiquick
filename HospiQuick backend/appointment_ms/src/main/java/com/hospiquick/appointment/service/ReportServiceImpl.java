package com.hospiquick.appointment.service;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospiquick.appointment.controller.AppController;
import com.hospiquick.appointment.model.Report;
import com.hospiquick.appointment.repository.ReportRepository;

@SuppressWarnings("unchecked")
@Service
public class ReportServiceImpl implements ReportService {
	private static final Logger logger=LoggerFactory.getLogger(AppController.class);
	
	
	@Autowired
	private ReportRepository reportrepo;
	
	@Autowired
	public EntityManager entityManager;

	@Override
	public String uploadReport(Report report) {
		// TODO Auto-generated method stub
		reportrepo.save(report);
		
		logger.info("DB : upload file");
		return "uploaded file successfully";
	}

	@Override
	public List<Report> getAllReports() {
		// TODO Auto-generated method stub
		

		logger.info("DB : show all file");
		return reportrepo.findAll();
	}

	@Override
	public List<Report> getReportByName(String patName) {
		// TODO Auto-generated method stub
		
		List<Report> temp=new ArrayList<Report>();
	    Query query=entityManager.createNativeQuery("select * from hospiquick_reports where pat_name = ?1 ", Report.class);
	    query.setParameter(1, patName);
	    temp=query.getResultList();    
	    System.out.println(temp);	   
	    

		logger.info("DB : show report by patient name");
		return temp;
		}
	
	@Override
	public List<Report> getReportBydepartment(String department) {
		// TODO Auto-generated method stub
		List<Report> temp=new ArrayList<Report>();
	    Query query=entityManager.createNativeQuery("select * from hospiquick_reports where department = ?1 ", Report.class);
	    query.setParameter(1, department);
	    temp=query.getResultList();    
	    System.out.println(temp);	  
	    

		logger.info("DB : show report by department name");
		return temp;
	}
	
	@Override
	public byte[] getReportFile(String patName,String department) {
		
		List<Report> temp=new ArrayList<Report>();
		Query query=entityManager.createNativeQuery("select * from hospiquick_reports where pat_name = ?1 and department = ?2 ", Report.class);
		query.setParameter(1, patName); 
		query.setParameter(2, department);
		temp=query.getResultList();
		Report str=new Report();
		str=temp.get(0);
		System.out.println(str);
		byte[] rep = str.getPatReport();
		

		logger.info("DB : show report by patient name and department");
		return rep;
	}
	
}
