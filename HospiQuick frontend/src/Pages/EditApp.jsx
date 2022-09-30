import './Css/AdminAppointment.css';
import '../Components/Css/ComponentStyle.css';
import './Css/Appointment.css';

import NavBar from '../Components/NavBar';
import React, { Component } from 'react';
import Footer from '../Components/Footer';
import { useState } from 'react';
import AdminSideBar from '../Components/AdminSidebar';
import LogoutLink from '../Components/LogoutLink';
export default function EditApp() {


    let [appDate, setAppDate] = useState("");
    let [appTime, setAppTime] = useState("");
 
    const selectedId=localStorage.getItem("editId");
    const patientName=localStorage.getItem("editName");
    const patientAge=localStorage.getItem("editAge");
    const patientEmail=localStorage.getItem("editEmail");
    const department=localStorage.getItem("editDept");


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

    const editApp = (event) => {

        let url = "http://localhost:8085/appointments/"+selectedId;
        console.log(appDate);
        let requestConfig = {
                method : 'PUT',
                headers : { 'Content-Type': 'application/json',
                'Accept': 'application/json' },
                body: JSON.stringify({
                    appId: selectedId,
                    patName: patientName,
                    patAge: patientAge,
                    appDate: appDate,
                    appTime: appTime,
                    dept: department,
                    patEmail: patientEmail     
                })
        }
        fetch(url,requestConfig).then((result)=>{
            console.log("request sent successful");
            result.json().then((response)=>{
            }).catch(
                console.log("Unsuccessful")
            )
        })
    }


    return (
        <>
            <NavBar logout={<LogoutLink/>} redirect={"/admindash"} />
            <div className='app-db'>
                <AdminSideBar />
            </div>
            <div className="edit-form">
                <div className='new-form-card'>
                    <form >
                        <center><h2>Reschedule the Appointment</h2></center>
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

                    </form>
                    <input className='form-submit-btn' type="submit" value="Confirm Appointment" onClick={(e) => {e.preventDefault();editApp();window.location.href="/admin-appointment"}} />
                </div>

            </div>
            <Footer />

        </>
    );
}