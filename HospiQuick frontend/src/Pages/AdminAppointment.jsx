
import './Css/AdminAppointment.css';
import '../Components/Css/ComponentStyle.css';

import NavBar from '../Components/NavBar';
import LogoutLink from '../Components/LogoutLink';
import AdminSideBar from '../Components/AdminSidebar';
import React, { Component,useEffect } from 'react';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

class AdminAppointment extends Component {

    constructor(props) {
        super(props);

        this.state = {
            apps: [],
            DataisLoaded: false
        };
    }
   
    componentDidMount() {
        
        fetch("http://localhost:8085/appointments")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    apps: json,
                    DataisLoaded: true
                });
            })
    }

    
    deleteApp = (id) => {
        axios.delete("http://localhost:8085/appointments/" + id).then(
            (response) => {
                alert("Record Deleted Successfully");
                this.setState({
                    apps: this.state.apps.filter(app => app.id !== id)
                });
            }, (error) => {
                alert("Operation Failed Here");
            }
        );
    };

    render() {
   
        const { DataisLoaded, apps } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div>;

        return (
            <>
                <NavBar logout={<LogoutLink/>} redirect={"/admindash"}/>
                <div className='app-db1'>
                    <AdminSideBar/>


                    <body className='table-body'>
                        <div class="container">
                            <h2 id="heading2">Appointments</h2>
                            <div class="table-responsive">
                                <div class="table-wrapper">
                                    <div class="table-title">
                                        <div class="row">
                                            <div class="col-sm-8"></div>
                                            <div class="col-sm-4">

                                            </div>
                                        </div>
                                    </div>
                                    <table class="table table-striped table-hover table-bordered">
                                        <thead>
                                            <tr>
                                         
                                                <th>Name </th>
                                                <th>Email </th>
                                                <th>Age</th>
                                                <th>Date </th>
                                                <th>Visit Time </th>
                                               
                                                <th>Vaccination Type</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                apps.map((app) => (
                                                    <tr key={app.appId}>
                                                        
                                                        <td>{app.patName}</td>
                                                        <td>{app.patEmail}</td>
                                                        <td>{app.patAge}</td>
                                                        <td>{app.appDate}</td>
                                                        <td>{app.appTime}</td>
                                                        <td>{app.dept}</td>
                                                        
                                                        <td id="table-icons">
                                                            {/* <a href="/" class="view" title="View" data-toggle="tooltip"><i class="material-icons">&#xE417;</i></a> */}
                                                            <a href="#" onClick={(e) => {e.preventDefault();localStorage.setItem("editId",app.appId);localStorage.setItem("editName",app.patName);localStorage.setItem("editEmail",app.patEmail);localStorage.setItem("editAge",app.patAge);
                                                        localStorage.setItem("editDept",app.dept);window.location.href='/appointment-edit';}} class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                                            <a href="#" onClick={(e) => {e.preventDefault();this.deleteApp(app.appId);window.location.href='/admin-appointment';}} class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                                                        </td>
                                                    </tr>
                                                  
                                                ))
                                            }

                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </body>
                </div>

                <Footer />

            </>
        );
    }
}

export default AdminAppointment;