import React from 'react';
import { useEffect } from 'react';
import NavBar from "../Components/NavBar";
import LogoutLink from "../Components/LogoutLink";
import Footer from '../Components/Footer';
import SideBar from '../Components/Sidebar';
import "./Css/Patient_report.css";
import Vaccination_report from './Css/Vaccination_report.svg';
import physiotheraphy from './Css/physiotherapy_dept.svg';
import cardiology from './Css/cardiology_dept.svg'
import neurology from './Css/Neurology_dept.svg'
import ophthamology from './Css/ophthalmology.svg'
import dermatology from './Css/dermatology_dept.svg'

import Files from '../files/sample.pdf';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Patient_report() {

  

  function preview(event, depName) {


    event.preventDefault();

    const axios = require('axios');
    let patientName = localStorage.getItem("patientName");

    axios.get('http://localhost:8082/reports/' + patientName + "/" + depName).then(resp => {
      localStorage.setItem("previewData" + depName, resp.data);
     // console.log(localStorage.getItem("previewData" + depName));
    });

    setTimeout(function(){ 
      var temp = new Blob([String(localStorage.getItem("previewData" + depName))], { type: "text/plain" });
      console.log(temp);
      let url1 = URL.createObjectURL(temp);
      window.open(url1);
     
  }, 1000);
 

    //localStorage.removeItem("previewData"+depName);
  }


  function download(event, depName) {




    const axios = require('axios');
    let patientName = localStorage.getItem("patientName");


    axios.get('http://localhost:8082/reports/' + patientName + "/" + depName).then(resp => {
      localStorage.setItem("reportData" + depName, resp.data);
      console.log(resp.data);
    });


    setTimeout(function(){ 
    console.log(localStorage.getItem("reportData" + depName));
    downloadTxtFile(String(localStorage.getItem("reportData" + depName)), depName);

    },1000);
    //localStorage.removeItem("reportData"+depName);



    // depName=localStorage.getItem("patientName")+"-"+depName+".pdf";
    // let fileName="sample.pdf";
    // var url = {Files}
    // console.log("files :",url);
    // var req = new XMLHttpRequest();
    // req.open("GET", url, true);
    // req.responseType = "blob";
    // req.onload = function () {

    // var blob = new Blob([req.response], { type: "application/octetstream" });

    //     //Check the Browser type and download the File.
    // var isIE = false || !!document.documentMode;
    // if (isIE) {
    //     window.navigator.msSaveBlob(blob, fileName);
    // } else {
    //     var url = window.URL || window.webkitURL;
    //     let link = url.createObjectURL(blob);
    //     var a = document.createElement("a");
    //     a.setAttribute("download", depName);
    //     a.setAttribute("href", link);
    //     document.body.appendChild(a);
    //     a.click();
    //     document.body.removeChild(a);
    // }
    // };
    // req.send();

  }
  const downloadTxtFile = (strfile, depName) => {
    const element = document.createElement("a");
    const file = new Blob([strfile], {
      type: "text/plain"
    });
    element.href = URL.createObjectURL(file);
    depName = localStorage.getItem("patientName") + "-" + depName + ".txt";
    element.download = depName;
    document.body.appendChild(element);
    element.click();
  };

    return (
      <>
      <NavBar logout={<LogoutLink/>} redirect={"/patientdash"}/>
      <div className='patient-report'>
        <SideBar />
        <div className='overview-right-panel'>
          <div className='overview'>
            <div className='margin-container'></div>
            <h1>Reports</h1>
            <h4>Select a department to download your report</h4>
            <br></br>
            <div className='container'>
              <div className='row'>
                <div className='col-md-4'>
                  <div className='patient-container-card'>
                    <center><h3>Vaccination report</h3></center>
                    <img src={Vaccination_report} alt="Doctor Appointment" className='card-img-top' />
                    <span><button className='btn-left-1' onClick={(e) => { preview(e,"Vaccination") }}>Preview</button></span>
                    <button className='btn-right-1' onClick={(e) => { download(e, "Vaccination") }}>Download</button>
                  </div>
                </div>

                <div className='col-md-4'>
                  <div className='patient-container-card'>
                    <center><h3>Cardiology report</h3></center>
                    <img src={cardiology} alt="not found" className='card-img-top' />
                    <span><button className='btn-left-2' onClick={(e) => { preview(e, "Cardiology");e.preventDefault(); }}>Preview</button></span>
                    <button className='btn-right-2' onClick={(e) => { download(e, "Cardiology"); e.preventDefault();}}>Download</button>
                  </div>
                </div>

                <div className='col-md-4'>
                  <div className='patient-container-card'>
                    <center><h3>Physiotheraphy report</h3></center>
                    <img src={physiotheraphy} alt="Doctor Appointment" className='card-img-top' />
                    <span><button className='btn-left-3' onClick={(e) => { preview(e,"Physiotheraphy") }}>Preview</button></span>
                    <button className='btn-right-3' onClick={(e) => { download(e, "Physiotheraphy") }}>Download</button>

                  </div>
                </div>
              </div>

              <br></br>
              <br></br>
              <br></br>
              <div className='row'>

                <div className='col-md-4'>
                  <div className='patient-container-card'>
                    <center><h3>Neurology report</h3></center>
                    <img src={neurology} alt="Doctor Appointment" className='card-img-top' />
                    <span><button className='btn-left-4' onClick={(e) => { preview(e, "Neurology") }}>Preview</button></span>
                    <button className='btn-right-4' onClick={(e) => { download(e, "Neurology") }}>Download</button>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='patient-container-card'>
                    <center><h3>Dermatology report</h3></center>
                    <img src={dermatology} alt="Doctor Appointment" className='card-img-top' />
                    <span><button className='btn-left-5' onClick={(e) => { preview(e,"Dermatology") }}>Preview</button></span>
                    <button className='btn-right-5' onClick={(e) => { download(e, "Dermatology") }}>Download</button>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='patient-container-card'>
                    <center><h3>Opthamology report</h3></center>
                    <img src={ophthamology} alt="Doctor Appointment" className='card-img-top' />
                    <span><button className='btn-left-6' onClick={(e) => { preview(e,"Opthamology") }}>Preview</button></span>
                    <button className='btn-right-6' onClick={(e) => { download(e, "Opthamology") }}>Download</button>
                  </div>
                </div>





              </div>

            </div>
            {/* <div className='appointments'>
                  <div className='appointment-box'>
                    <img className='feature-img-dash' src={Vaccination_report} alt="" />
                    <span>Book a Doctor's Appointment</span>
                    <div className='col-md-6'>
                        <button>Submit </button>
                        <button>Not submit</button>
                    </div>
                    
                  </div>
                  <div className='appointment-box vaccination-box'>
                    <img className='feature-img-dash' src={VaccinationSlot} alt="" />
                    <span>Book a Vaccination Slot</span>
                  </div>
              </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}