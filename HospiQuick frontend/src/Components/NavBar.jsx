import React from 'react'
import "./Css/ComponentStyle.css"
import logo from "./Css/logo.svg"
import { Link } from "react-router-dom";


export default function NavBar(props) {
  
  // const hideLogout = {display: 'none'}
  // const hideSignup = {}

  // if(props.isLogin === true){
  //   hideLogout = {display: 'block'}
  //   hideSignup = {display: 'none'}
  // }else{
  //   hideLogout = {display: 'none'}
  //   hideSignup = {display: 'block'}
  // }
  
  return (
    <div>
      <nav className="nav">
        <div className='navbar-custom'>
        <div className='logo-container'>
         
            <span>
            <Link to={props.redirect} ><img className='logo-img'src={logo} alt="Logo" /></Link>
            </span>
            <span>
            <Link to={props.redirect} ><label className='logo-text'>Hospi-Quick</label></Link>
            </span>
        </div>
          <span>{props.logout}</span>
          <span>{props.signin}</span>
        </div>        
    </nav>
    </div>
  )
}

