import React,{ useEffect } from "react";
import { useNavigate } from "react-router-dom";






function Logout() {
    const navigate = useNavigate();
    useEffect(()=>{
        const login = localStorage.getItem('SignIn');
        console.log("Login value")
        console.log(login)

        
        if(login){
                navigate('/signin');
                console.log("inside this")
                localStorage.clear();
                
        }

        if(login==null){
            // console.log("n"+login);
                navigate('/');
        }
    })

    return (  
        <></>
    );
}

export default Logout;