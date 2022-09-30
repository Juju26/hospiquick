package com.hospiquick.appointment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.hospiquick.appointment.model.Appointment;

public interface AppRepository extends JpaRepository<Appointment, Long> {

}
