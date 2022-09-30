import React from 'react';
import { Component } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Css/Appointment.css';
import '../Components/Css/ComponentStyle.css';
import NavBar from '../Components/NavBar';
import LogoutLink from '../Components/LogoutLink';
import Footer from '../Components/Footer';
import SideBar from '../Components/Sidebar';
import { useNavigate } from 'react-router-dom';
import Appointment_table from './Appointment_table';



export default function Appointment_db (){
   
    useEffect(() => {
        if(localStorage.getItem('SignIn')!=='true' || localStorage.getItem('role')!=='ROLE_USER'){  
          navigate("/notfound");
        }     
      })

    let [formShow, setForm] = useState('form-hide');

        function toggleForm() {

            if (formShow === 'new-form-container') {
                setForm('form-hide');
            } else {
                setForm('new-form-container');
            }
    
        
        }
        // let [allAppointments, setAllAppointments] = React.useState([])
        let [patName, setPatName] = useState("");
        let [patAge, setPatAge] = useState("");
        let [appDate, setAppDate] = useState("");
        let [appTime, setAppTime] = useState("");
        let [dept, setDept] = useState("");
        let [patEmail, setPatEmail] = useState("");
        const navigate = useNavigate();
        localStorage.getItem("patEmail");
        
        const setToday = event => {
            let today=new Date();
            let month=today.getMonth()+1;
            if (month<10){ 
                month="0"+month;
            }
            let todayString=today.getFullYear()+"-"+month+"-"+today.getDate(); 
            console.log("today"+todayString);
            document.getElementById("appDate").setAttribute("min",todayString);
        };
        
        
        const handleSubmit = event => {
            console.log('handleSubmit ran');
            setPatName("");
            setPatAge("");
            setAppDate("");
            setAppTime("");
            setDept("");
            setPatEmail("");
        };
        const postAppointment = (event) => {

            let url = 'http://localhost:8085/appointments';
            let requestConfig = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    patName: patName,
                    patAge: patAge,
                    appDate: appDate,
                    appTime: appTime,
                    dept: dept,
                    patEmail: patEmail,
                })
            }
            fetch(url, requestConfig).then((result) => {
                console.log("request sent successful");
                console.log(result);
                alert("Appointment Booked!");
                result.json().then((response) => {
                    console.log("response", response);
                }).catch(
                    console.log("Unsuccessful")
                )
            })
            navigate("/appointment");
            handleSubmit();
            toggleForm();
        }

        return (
            <>
                <NavBar logout={<LogoutLink/> } redirect={"/patientdash"}/>
                <div className='app-db'>
                    <SideBar />
                    <Appointment_table/>
                </div>

               

                <div className={formShow}>
                    <div className='new-form-card'>
                        <form >
                            <center><h2>Book a New Appointment</h2></center>
                            <div className="mb-3">
                                <input type="text" className="app-form-input" name='patName' value={patName} onChange={(e) => { setPatName(e.target.value) }} placeholder="Enter Name" />
                            </div>
                            <div className="mb-3">
                                <input type="text" name='patEmail' value={patEmail} onChange={(e) => { setPatEmail(e.target.value) }} className="app-form-input" placeholder="Enter Email" />

                            </div>
                            <div className="mb-3">
                                <input type="number" name='patAge' value={patAge} onChange={(e) => { setPatAge(e.target.value) }} className="app-form-input" min={3} max={100} placeholder="Enter Age" />
                            </div>
                            <div className="mb-3">

                                <input type="date" name='appDate' id="appDate" value={appDate} onClick={(e)=> {setToday(e)}} onChange={(e) => { setAppDate(e.target.value) }} className="app-form-input" placeholder="Appointment Date" />
                            </div>

                            <div className='mb-3'>
                              
                                <select className="app-form-input" placeholder="Visit timing" value={appTime} onChange={(e) => { setAppTime(e.target.value) }} name="appTime" required>
                                    <option value="" disabled selected hidden>Select Timing</option>
                                    <option value="09:00:00">09:00:00 A.M - 10:00:00 A.M</option>
                                    <option value="10:00:00">10:00:00 A.M - 11:00:00 A.M</option>                                  
                                    <option value="11:00:00">11:00:00 A.M - 12:00:00 P.M</option>
                                    <option value="12:00:00">12:00:00 P.M - 01:00:00 P.M</option>                                    
                                   <option value="13:00:00">01:00:00 P.M - 02:00:00 P.M</option>
                                    <option value="14:00:00">02:00:00 P.M - 03:00:00 P.M</option>
                                    <option value="15:00:00">03:00:00 P.M - 04:00:00 P.M</option>
                                    <option value="16:00:00">04:00:00 P.M - 05:00:00 P.M</option>
                                    <option value="17:00:00">05:00:00 P.M - 06:00:00 P.M</option>
                                    <option value="18:00:00">06:00:00 P.M - 07:00:00 P.M</option>
                                    <option value="19:00:00">07:00:00 P.M - 08:00:00 P.M</option>
                                    <option value="20:00:00">08:00:00 P.M - 09:00:00 P.M</option>
                                    <option value="21:00:00">09:00:00 P.M - 10:00:00 P.M</option>
                                    <option value="22:00:00">10:00:00 P.M - 11:00:00 P.M</option>                                
                                </select>
                            </div>
                            <div className="mb-3">
                                <select className="app-form-input" placeholder="Department" value={dept} onChange={(e) => { setDept(e.target.value) }} name="dept" required>
                                    <option value="" disabled selected hidden>Select the Department</option>
                                    <option value="Cardiology">Cardiology</option>
                                    <option value="Neurology">Neurology</option>
                                    <option value="Physiotherapy">Physiotherapy</option>
                                    <option value="Dermatology">Dermatology</option>
                                    <option value="Opthalmology">Opthalmology</option>
                                </select>
                            </div>
                        </form>
                        <input className='form-submit-btn' type="submit" onClick={postAppointment} />
                    </div>
                </div>
                
                <h2 id="heading1">Doctor's Appointment</h2>
                <div>
                    <button className='add-form-btn' onClick={() => toggleForm()}>
                        <span className='add-form-btn-text'>+</span>
                    </button>
                </div>
                <Footer />
            </>
        );
    
}