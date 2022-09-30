import './Css/AdminAppointment.css';
import '../Components/Css/ComponentStyle.css';
import './Css/Appointment.css';

import NavBar from '../Components/NavBar';
import SideBar from '../Components/Sidebar';
import React from 'react';
import Footer from '../Components/Footer';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UploadReport() {

    const navigate=useNavigate();
    useEffect(() => {
      if(localStorage.getItem('SignIn')!=='true' || localStorage.getItem('role')!=='ROLE_ADMIN'){  
        navigate("/notfound");
      }     
    })   
   
    const id=0;
    let[reportId,setReportId] = useState('');
    let [patName, setPatName] = useState("");
    let [dept, setDept] = useState("");
    let[patReport,setPatReport] = useState("");
    
    const upload = (event) => {
        console.log(reportId);
        let url = 'http://localhost:8082/reports';
        let requestConfig = {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
                'Accept': 'multipart/form-data'
            },
            body: JSON.stringify({
                id:id,
                reportId:reportId,
                patName:patName,
                department:dept,
                patReport:patReport
            })
           
        }
        fetch(url, requestConfig).then((result) => {
            console.log("request sent successful");
            console.log(result);
            alert("uploaded");
            result.formData().then((response) => {
                console.log("response", response);
            }).catch(
                console.log("Unsuccessful")
            )
        })




        //    const report={
        //     id:id,
        //     reportId:reportId,
        //     patName:patName,
        //     department:dept,
        //     patReport:patReport
        //    }
        //    console.log(report);
        //    axios.post('http://localhost:8082/reports').then(res => {
        //     alert("Report Uploaded Successfully");
        // })
        
        
    }
    
    return (
        <>
            <NavBar redirect={"/admindash"}/>
            <div className='app-db'>
                <SideBar />
            </div>
            <div className="edit-form">
                <div className='new-form-card'>
                    <form >
                        <center><h2>Upload Reports</h2></center>
                        <div className="mb-3">
                                <input type="text" className="app-form-input" name='reportId' value={reportId} onChange={(e) => { setReportId(e.target.value) }} placeholder="Enter Report Id" />
                            </div>

                        <div className="mb-3">
                                <input type="text" className="app-form-input" name='patName' value={patName} onChange={(e) => { setPatName(e.target.value) }} placeholder="Enter Name" />
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

                        <div className='mb-3'>
                              <input type="file" className="app-form-input" name='file'  onChange={(e) => {setPatReport(e.target.files[0]) }} placeholder="Upload Report" />
                            </div>

                    </form>
                    <input className='form-submit-btn' type="submit" value="Upload" onClick={(e) => {e.preventDefault();upload()}} />
                </div>

            </div>
            <Footer />

        </>
    );
}