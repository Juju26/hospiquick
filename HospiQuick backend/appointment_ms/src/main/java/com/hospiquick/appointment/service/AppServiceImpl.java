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
import com.hospiquick.appointment.model.Appointment;
import com.hospiquick.appointment.repository.AppRepository;

@SuppressWarnings("unchecked")
@Service
public class AppServiceImpl implements AppService{
	
	private static final Logger logger=LoggerFactory.getLogger(AppController.class);
	
	
	@Autowired
	public AppRepository appRepository;
	
	@Autowired
	public EntityManager entityManager;
	
	
	
	@Override
	public List<Appointment> getAllAppointments()
	{
	  List<Appointment> temp=new ArrayList<Appointment>();
	  Query query=entityManager.createNativeQuery("select * from appointment order by app_date",Appointment.class);
	  temp=query.getResultList();
	  System.out.println("sorted Appoinments");
	  System.out.println(temp);
	  
	  logger.info("DB : get all appointments");
	  return temp;
	}
	
	@Override
	public List<Appointment> getAppointmentsByEmail(String email)
	{
		System.out.println("Inside get");
		List<Appointment> temp=new ArrayList<Appointment>();
	    Query query=entityManager.createNativeQuery("select * from appointment where pat_email = ?1 order by app_date", Appointment.class);
	    query.setParameter(1, email);
	    temp=query.getResultList();    
	    System.out.println(temp);	
	    
	    logger.info("DB : get appointment by patient email");
		return temp;

	}
	
	@Override
	public String createNewAppointment(Appointment appointment)
	{
		appRepository.save(appointment);
		

	    logger.info("DB : create appointment ");
		return "Appointment Successfully added";
	}
	
	@Override
	public String updateAppointmentById(Long AppId,Appointment appointment) {
		appRepository.save(appointment);
		

	    logger.info("DB : update appointment ");
		return "Appointment Updated Successfully";
	}
	
	@SuppressWarnings("deprecation")
	@Override
	public String deleteAppointmentById(Long AppId) {
		Appointment appointment = appRepository.getById(AppId);
		appRepository.delete(appointment);
		

	    logger.info("DB : delete appointment ");
		return "Appointment Deleted Successfully";
	}


}
