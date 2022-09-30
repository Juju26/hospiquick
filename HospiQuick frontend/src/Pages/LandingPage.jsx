import React from 'react';
import './Css/LandingPage.css';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import front from '../Pages/Css/Hero-Image.png';
import doctor from './Css/DoctorAppointment.svg';
import report from './Css/reportTracking.svg';
import vaccination from './Css/vaccination.svg';
import SignUpLink from '../Components/SignUpLink';
import Appointment from './Appointment_db'
import { Navigate, useNavigate } from 'react-router-dom';
import LogoutLink from '../Components/LogoutLink';
let SignIn = <SignUpLink/>
let Logout = <LogoutLink/>

export default function LandingPage() {
  
  const navigate=useNavigate();
  function GoDocAppointment(event){
    event.preventDefault();
    if(localStorage.getItem('SignIn')==='true'){
      navigate('/appointment');
    }
    else{
    navigate("/signin");
   }
  }

  function GoVacAppointment(event){
    event.preventDefault();
    if(localStorage.getItem('SignIn')==='true'){
      navigate('/appointment');
    }
    else{
    navigate("/signin");
   }
  }


  function GoReport(event){
    event.preventDefault();
    if(localStorage.getItem('SignIn')==='true'){
      navigate('/patientReportt');
    }
    else{
    navigate("/signin");
   }
  }



  return (
    <div className='landing-page'>
        <NavBar signin={SignIn} redirect={"/"}/>
        <div className="margin-container"></div>
        <div className='hero-container'>
          <div className='hero-text-container'>       
            <div className='hero-heading'>
              <span><h1>Welcome to Hospi-Quick</h1></span>
            </div>
            <div className='hero-subheading'>
              <span><h4>Appointment Bookings just few clicks away...</h4></span>
            </div>
            </div>
              <div className='hero-image-container'>
                <img className='hero-image' src={front} alt="" />
              </div>
            </div>
        <div className='features-container'>
          <div className='feature-container'>
           
            <img className='feature-img' src={doctor} alt="" />
            <span className='feature-card-heading'>Doctor's Appointment</span> 
            <span>User can book a Doctor's appointment anytime he/she wants.</span><br></br>
            <center><button className='btn-success' style={{width:"140px"}} onClick={GoDocAppointment}>Go </button></center>
          </div>
          <div className='feature-container'>
            <img className='feature-img' src={vaccination} alt="" />
            <span className='feature-card-heading'>Vaccination Appointment</span>
            <span>User can book a Vaccination appointment anytime he/she wants.</span><br></br>
            <center><button className='btn-success' style={{width:"140px"}} onClick={GoVacAppointment}>Go </button></center>
         
          </div>
          <div className='feature-container'>
            <img className='feature-img' src={report} alt="" />
            <span className='feature-card-heading'>Report Tracking</span>
            <span>User can keep a track of the latest reports departwise.</span><br></br>
            <center><button className='btn-success' style={{width:"140px"}} onClick={GoReport}>Go </button></center>
         
          </div>
        </div>
        <div className="margin-container"></div>
        <Footer/>
    </div>

  )
}
