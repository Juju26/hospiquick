import React from 'react'
import NavBar from "../Components/NavBar";
import Footer from '../Components/Footer';
import AdminSideBar from '../Components/AdminSidebar';
import "./Css/PatientDash.css";
import DoctorAppoint from './Css/DoctorAppointment.svg';
import VaccinationSlot from './Css/vaccination.svg';
import Doctor from './Css/doctor.svg';
import Patient from './Css/patient.svg';
import Department from './Css/department.svg';
import '../Components/Css/Sidebar.css';
import LogoutLink from '../Components/LogoutLink';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

export default function PatientDash() {

  const navigate=useNavigate();
    useEffect(() => {
      if(localStorage.getItem('SignIn')!=='true' || localStorage.getItem('role')!=='ROLE_ADMIN'){  
        navigate("/notfound");
      }     
    })
    return (
      <>
      <NavBar NavBar logout={<LogoutLink/>} redirect={"/admindash"}/>
      <div className='patient-dashboard'>
          <AdminSideBar/>
          <div className='overview-right-panel'>
            <div className='overview'>
              <div className='margin-container'></div>
              <h2>Overview</h2>
              <div className='right-panel-container'>
              <div className='hospital-overview'>
                <div className='overview-category'>
                  <span>Total Number of Doctors</span>
                  <span><img src={Doctor} alt=''></img></span>
                  <span>160</span>
                </div>
                  <div className='overview-category'>
                  <span>Total Number of Patients</span>
                  <img src={Patient} alt=''></img>
                  <span>1550</span>
                </div>
                <div className='overview-category'>
                  <span>Total Number of Departments</span>
                  <img src={Department} alt=''></img>
                  <span>25</span>
                </div>
            </div>

              <div className='vaccination-survey'>
                  
                  <div className='vaccination-stats'>
                    <span><h5>Vaccination Survey:</h5></span>
                    <div className='vaccination-stats-child'>
                      <span className='dose-text'>Total Dose</span>
                      <span className='number-stats'>4535360</span>
                    </div>
                    <div className='vaccination-stats-child'>
                      <span className='dose-text'>Single Dose</span>
                      <span className='number-stats'>225356</span>
                    </div>
                    <div className='vaccination-stats-child'>
                      <span className='dose-text'>Double Dose</span>
                      <span className='number-stats'>32902</span>
                    </div>
                    <div className='vaccination-stats-child'>
                      <span className='dose-text'>Booster Dose</span>
                      <span className='number-stats'>3339</span>
                    </div>
                  </div>
              </div>

              <div className='appointments'>
                  <div className='appointment-box'>
                    <img className='feature-img-dash' src={DoctorAppoint} alt="" />
                    <span>Book a Doctor's Appointment</span>
                  </div>
                  <div className='appointment-box vaccination-box'>
                    <img className='feature-img-dash' src={VaccinationSlot} alt="" />
                    <span>Book a Vaccination Slot</span>
                  </div>
              </div>
              </div>
            </div>
          </div>
      </div>
      <Footer/>
      </>
    )
  }