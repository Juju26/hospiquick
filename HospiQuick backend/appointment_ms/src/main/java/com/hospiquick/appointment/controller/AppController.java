package com.hospiquick.appointment.controller;

import java.io.IOException;

import java.util.List;

import org.slf4j.LoggerFactory;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.hospiquick.appointment.model.Appointment;
import com.hospiquick.appointment.model.Report;
import com.hospiquick.appointment.repository.ReportRepository;
import com.hospiquick.appointment.service.AppService;
import com.hospiquick.appointment.service.ReportService;

@CrossOrigin(origins = "http://localhost:3000",allowedHeaders = "*",methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE})
@RestController
public class AppController {

		private static final Logger logger=LoggerFactory.getLogger(AppController.class);
	
	 	@Autowired
	 	public AppService appService;
	 	
	 	@Autowired
	 	public ReportService reportService;
	 	
	 	@Autowired
	 	public ReportRepository reportrepo;
	 
	 	
		@RequestMapping(value="/home", method = RequestMethod.GET)
	    public String home()
	    {
			return "hello";
	    }
		
		@GetMapping("/appointments")
		public List<Appointment> getAllAppointments(){
			logger.info("Showing all appointments");
			return this.appService.getAllAppointments();
		}
		
		@GetMapping("/appointments/{patEmail}")
		public List<Appointment> getAppointmentsByEmail(@PathVariable String patEmail)
		{
			logger.info("Showing appointments by email");
			return this.appService.getAppointmentsByEmail(patEmail);
		}
		
		@PostMapping("/appointments")
		public String postNewQuery(@RequestBody Appointment appointment) {
			logger.info("accept appointment");
			return this.appService.createNewAppointment(appointment);
		}
		
		@DeleteMapping("/appointments/{AppId}")
		public String deleteAppointment(@PathVariable("AppId") Long AppId) {
			logger.info("deleting appointment");
			return this.appService.deleteAppointmentById(AppId);
		}
		

		@PutMapping("/appointments/{AppId}")
		public String updateAppointmentById(@PathVariable("AppId") Long AppId,@RequestBody Appointment appointment) {
			System.out.println("Updated sucessfully");
			logger.info("updating appointment");
			return this.appService.updateAppointmentById(AppId,appointment);
		}
		
		
		
		@GetMapping("/reports")
		public List<Report> getReports()
		{
			logger.info("Showing all reports");
			return reportService.getAllReports();
		}
		
		
		
		@PostMapping("/reports")
		public String addReport(@ModelAttribute Report report,@RequestParam MultipartFile pat_report) throws IOException
		{
			
			Report temp=new Report();
			temp.setId(report.getId());
			temp.setReportId(report.getReportId());
			temp.setDepartment(report.getDepartment());
			temp.setPatName(report.getPatName());
			temp.setPatReport(pat_report.getBytes());
			
			logger.info("accepting report");
			return this.reportService.uploadReport(temp);
		}
		
		@GetMapping("/reports/{patName}")
		public List<Report> getPatientReportByName(@PathVariable String patName)
		{
			logger.info("Show report by patient name");
			return reportService.getReportByName(patName);
		}
		
		@GetMapping("/reports/{patName}/{department}")
		public byte[] getReportFile(@PathVariable String patName,@PathVariable String department)
		{
			logger.info("Show report by patient name and department");
			return reportService.getReportFile(patName,department);
			
		}
}
