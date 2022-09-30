import React from 'react';
import { useState } from 'react';
import './App.css';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import LandingPage from './Pages/LandingPage';
import HelpDesk from './Pages/HelpDesk';
import Table from './Components/Table';
import HelpDeskAdmin from './Pages/HelpDeskAdmin';
import Appointment_db from './Pages/Appointment_db';
import AdminAppointment from './Pages/AdminAppointment';
// import PatientReport from './Pages/PatientReport';
import Logout from './Components/Logout.jsx';
import PatientReport from './Pages/Patient_report';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import PatientDash from './Pages/PatientDash';
import EditApp from './Pages/EditApp';
import UploadReport from './Pages/UploadReport'; 
import AdminDash from './Pages/AdminDash';
import NotFound from './Components/NotFound';
import { Navigate } from 'react-router-dom';
import Vaccination_db from './Pages/Vaccination_db';
import AdminVaccination from './Pages/AdminVaccination';
function App() {
  return (
    <div>
      <Router>
            <Routes>
              <Route path="/signin" element={<SignIn/>}/>
              <Route path="/signup" element={<SignUp/>}/>
              <Route exact path="/" element={<LandingPage/>}/>
              <Route exact path="/PatientDash" element={<PatientDash/>}/>
              <Route exact path='/helpdesk' element={<HelpDesk/>} />
              <Route exact path='/helpdeskadmin' element={<HelpDeskAdmin/>} />
              <Route exact path='/table' element={<Table/>} />
              <Route exact path='/appointment' element={<Appointment_db/>} />
              {/* <Route exact path='/appointment' element={<Appointment_table/>} /> */}
              <Route exact path='/admin-appointment' element={<AdminAppointment/>} />
              <Route exact path='/PatientReport' element={<PatientReport/>} />
              <Route exact path='/uploadReport' element={<UploadReport/>}/>
              <Route exact path='/logout' element={<Logout/>} />
              <Route exact path='/appointment-edit' element={<EditApp/>} />
              <Route exact path='/adminDash' element={<AdminDash/>} />
              <Route exact path='/notfound' default element={<NotFound/>} />
              <Route path="*" element={<NotFound/>} />
              <Route exact path='/vaccination' element={<Vaccination_db/>} />
              <Route exact path='/adminVaccination' element={<AdminVaccination/>} />

             
          </Routes>
        </Router>
    </div>
  );
}

export default App;
