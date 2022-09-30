import React from 'react';
import './Css/Sidebar.css';
import Home from '../Pages/Css/home.svg';
import help from '../Pages/Css/help.svg';
import report from '../Pages/Css/Report.svg';
import Appointment from '../Pages/Css/Appointment.svg';

export default function SideBar() {
  return (
    <div className='sidebar'>
        <div className='margin-container'></div>
            <div className='sidebar-container'>
                  <a href="/PatientDash" className='sidebar-category'> 
                    <img className='dash-image' src={Home} alt="" />
                    <span>Home</span>
                  </a>
                  <a href='/appointment' className='sidebar-category'>
                    <img className='dash-image' src={Appointment} alt="" />
                    <span>Appointment(Doc)</span> 
                  </a>
                  <a href='/vaccination' className='sidebar-category'>
                    <img className='dash-image' src={Appointment} alt="" />
                    <span>Appointment(vac)</span> 
                  </a>
                  <a href="/PatientReport" className='sidebar-category'>
                   <img className='dash-image' src={report} alt="" />
                   <span>Report</span>
                    </a>
                  <a href="/helpdesk" className='sidebar-category'> 
                   <img className='dash-image' src={help} alt="" />
                   <span>Help</span>
                  </a>   
                 </div>
    </div>
  )
}