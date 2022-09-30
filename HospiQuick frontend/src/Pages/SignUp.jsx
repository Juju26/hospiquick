import React, { Component, useState } from 'react';
import "./Css/SignUp.css";
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { Link, useNavigate } from 'react-router-dom'; 
import Register from '../service/Register.js';


//validations
// email,name,phone number should be fresh
// phone no 10
// password min 5
// juju123 for all juju user123 
function SignUp() {
    
  const[name,setUserName] = useState('');
  const[phoneNo,setUserPhoneNumber] = useState('');
  const[email,setUserEmail] = useState('');
  const[password,setUserPassword] = useState('');
  const[confirmPassword,setUserConfirmPassword] = useState('');
  const role="CUSTOMER";
  const[message,setMessage] = useState('');

  const navigate = useNavigate();

  function handleName(event){
    const name=event.target.value;
    setUserName(name);
  }

  function handlePhoneNumber(event){
    const phoneNumber=event.target.value;
    setUserPhoneNumber(phoneNumber);
  }

  function handleEmail(event){
    const email=event.target.value;
    setUserEmail(email);
  }

  function handlePassword(event){
    const password=event.target.value;
    setUserPassword(password);
  }

  function handleConfirmPassword(event){
    const confirmPassword=event.target.value;
    setUserConfirmPassword(confirmPassword);
  }



  function handlesignup (event) {
    event.preventDefault();

    if (phoneNo.length!==10) {
      alert("Phone Number should be 10 digits");
    }
    if (password.length<4) {
      alert("Password should be atleast 4 characters");}

    if(password===confirmPassword){
    //   console.log("password: "+ password, "confirm password: "+ confirmPassword);
    // console.log("Username : "+username+", PhoneNumber : "+phoneNumber);

    

      const User={
        name:name,
        password:password,
        phoneNo:phoneNo,
        email:email
      }

      console.log("user : "+User.email);
      console.log(User); 
      Register.add(User).then(res=> {
        console.log("Signup successful");
        alert("Signup successful please login");
        navigate("/SignIn");
        
    // })
    }).catch(error=>{
        console.log("Error");
        setMessage("Invalid Credentials");
    });

    }
    else{
      alert("Password and Confirm Password does not match");
    }
  }
  
    return (
        <>
            <NavBar redirect={"/"}/>
            <div className='container signupForm'>
            <form onSubmit={handlesignup}>
              <center><h2 id='signup-h2'>Sign Up</h2></center>
                  <div className="mb-3">
                    <input
                      type="text"
                      className='form-input'
                      onChange={handleName}
                      placeholder="Name"/>
                  </div>
                  <div className="mb-3">
                    <input className='form-input' type="text" onChange={handlePhoneNumber} placeholder="Phone number" />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className='form-input'
                      onChange={handleEmail}
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className='form-input'
                      onChange={handlePassword}
                      placeholder="Password"
                      min={5}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className='form-input'
                      onChange={handleConfirmPassword}
                      placeholder="Confirm Password"
                    />
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="button-input ">
                      Register
                    </button>
                  </div>
                  <p className="forgot-password text-right">
                    Already registered <Link to="/signin">sign in?</Link>
                  </p>
                </form>
                  </div>
                  <div className='waves'></div>
                  <Footer/>
        </>
    )
  
}

export default SignUp;