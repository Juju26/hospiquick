import Auth from '../service/Auth';
import {Link,useNavigate} from 'react-router-dom';
import React,{useState, useEffect} from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import "./Css/SignIn.css";

// juju1 juju123
// athsai12 atshai 
function SignIn() {
    
const [name, setUserId] = useState('');
const [password, setUserPassword] = useState('');
const[token,setToken]=useState('');
const[message, setMessage]= useState('');
const[patEmail,setPatEmail]=useState('');

const navigate = useNavigate();


function handleName(event){
    const name=event.target.value;
    setUserId(name);
}
function handlePassword(event){
    const password=event.target.value;
    setUserPassword(password);
}

function handleSubmit(event){
    event.preventDefault(); 


    console.log("Username : "+name+", Password : "+password);
    const admin = {
        name : name,
        password : password
    }

    // Auth.authenticate(admin).then(res=> {
        Auth.authenticate(admin).then(res=> {
        const data = res.data;
        console.log("data : ");
        console.log(data);
        if ('token' in data) {
            localStorage.setItem("token",data.token);
            localStorage.setItem('role', data.roles[0]);
            localStorage.setItem('SignIn',true);
            localStorage.setItem('patEmail',data.email);
            localStorage.setItem('patientName',data.name);
            setMessage("");
            setPatEmail(data.email);
            setToken(data.token);
            console.log('login Successfully '+data.token);
            if(localStorage.getItem('role')==="ROLE_USER"){             
                navigate("/PatientDash");
              }
  
              else if(localStorage.getItem('role')==="ROLE_ADMIN"){
                  navigate("/adminDash");   
              }
        }
        
        else{
            setMessage("May be Invalid Credentials Please recheck");
            console.log("sjshs")
           // navigate('/');
        }
    // })
    }).catch(error=>{
        console.log("Error");
        alert("Invalid credentials");
        setMessage("Invalid Credentials");
    });

    
    
}

  return (

    <>
    <NavBar redirect={"/"}/> 
    <div className='container signInForm '>
    <form onSubmit={handleSubmit}>
      <center><h2 id="signin-h2">Sign In</h2></center>
        
        <div className="mb-3">
        <input
            type="text"
            className="form-input"
            placeholder="UserName"
            id='userid'
            onChange={handleName}
        />
        </div>
        <div className="mb-3">
        <input
            type="password"
            className="form-input"
            placeholder="Password"
            id='password'
            onChange={handlePassword}
        />
        </div>
        <div className="mb-3">
       
       
        <p className="forgot-password text-right">
          <a href="forgot">Forgot password?</a>
        </p>
    
        </div>
        <div className="d-grid">
        <button type="submit" className="button-input">
        Login
        </button>
        </div>
        <p className="forgot-password text-right">
        New User <Link to="/signup">Sign Up</Link>
          </p>
    </form>
</div>
<div className='waves'></div>
<Footer/>
</>        
  );
  
}

export default SignIn;