package com.hospiquick.appointment.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hospiquick.appointment.model.Report;

public interface ReportRepository extends JpaRepository<Report, Integer> {

}
