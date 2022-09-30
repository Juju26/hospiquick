import { AxiosError } from 'axios';
import React, { Component, useState } from 'react';
import axios from 'axios';

import Footer from '../Components/Footer';
import SideBar from '../Components/Sidebar';
import DeleteAppointment from '../service/DeleteAppointment';



class AdminCheckVaccine extends Component {

    constructor(props) {
        super(props);

        this.state = {
            apps: [],
            DataisLoaded: false
        };  

    }
    componentDidMount() {
        let user = localStorage.getItem("patEmail");
        let url = "http://localhost:8086/vaccination/" + user;
        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    apps: json,
                    DataisLoaded: true
                });
            })
    }

    deleteApp = (id) => {
        axios.delete("http://localhost:8086/vaccination/" + id).then(
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
        

       

        // function ondelete(id){
        //     //event.preventDefault();

        //     let url="http://localhost:8082/"+"7";
        //     console.log("inside delete");
        //     console.log(id);
        //     DeleteAppointment.deleteAppointments(url);
        //     console.log("Deleted Successfully");

        // }

        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div>;

        return (
            <>
                <div className='app-db'>
                    <SideBar />
                    <body className='table-body'>
                        <div className="container">
                            <h2 id="heading2">Vaccinations</h2>
                            <div className="table-responsive">
                                <div className="table-wrapper">
                                    <div className="table-title">
                                        <div className="row">
                                            <div className="col-sm-8"></div>
                                            <div className="col-sm-4">

                                            </div>
                                        </div>
                                    </div>
                                    <table className="table table-striped table-hover table-bordered">
                                        <thead>
                                            <tr>
                                               
                                                <th>Name </th>
                                                <th>Email </th>
                                                <th>Age </th>
                                                <th>Date </th>
                                                <th>Visit Time </th>
                                                <th>Vaccine </th>
                                                <th>Actions </th>

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
                                                        <td>{app.vaccine}</td>

                                                        <td id="table-icons">
                                                            {/* <a href="/" className="view" title="View" data-toggle="tooltip"><i className="material-icons">&#xE417;</i></a> */}
                                                            {/* <a href="/" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons">&#xE254;</i></a> */}
                                                
                                                            {/* <a href="#" onClick={(e) => {localStorage.setItem("selectedId",app.patAge); e.preventDefault(); window.location.href='/delete-appointment'}}  className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons">&#xE872;</i></a> */}
                                                            <a href="#" onClick={(e) => {e.preventDefault();this.deleteApp(app.appId);window.location.href='/vaccination';}}  className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons">&#xE872;</i></a>
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
            </>
        );
    }
}

export default AdminCheckVaccine;

//<button onClick={myFunction}>Click me</button>