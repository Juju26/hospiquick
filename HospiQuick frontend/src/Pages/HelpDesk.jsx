import React, { useEffect } from 'react';
import { useState } from 'react';
import "./Css/HelpDesk.css";
import QueryBox from '../Components/QueryBox';
import NavBar from '../Components/NavBar';
import LogoutLink from '../Components/LogoutLink';
import Footer from '../Components/Footer';
import AdminSideBar from '../Components/AdminSidebar';
import Pagination from '../Components/Pagination';
import Plus from './Css/plus.svg';
import { useNavigate } from 'react-router-dom';
export default function HelpDesk() {
    let [formShow,setForm] = useState('form-hide');
    let [btnRotate,setBtnRotate] = useState('add-query-btn-icon-rotate');

    const navigate=useNavigate();
    useEffect(() => {
        if(localStorage.getItem('SignIn')!=='true' || localStorage.getItem('role')!=='ROLE_USER'){  
          navigate("/notfound");
        }     
      })
    function toggleForm(){
        
        if(formShow === 'new-query-form-container'){
            setForm('form-hide');
            setBtnRotate('add-query-btn-icon-rotate');
        }else{
            setForm('new-query-form-container');
            setBtnRotate('add-query-btn-icon');
        }
    }

    let [allQueries, setAllQueries] = React.useState([])
    // fetches data

    const fetchData = async () => {
        let url = 'http://localhost:8083/queries';
        let data = await fetch(url);
        setAllQueries(await data.json());
    }
    
    useEffect(()=> {
        fetchData();
    },[])

    let [queryTitle,setTitle] = useState("");
    

    const postQuery = (event) => {
        event.preventDefault();
        let url = 'http://localhost:8083/queries';
        // let data = {queryTitle, querySolution};
        // console.log("data : "+ data.queryId, data.queryTitle,data.querySolution);
        let requestConfig = {
                method : 'POST',
                headers : { 'Content-Type': 'application/json',
                'Accept': 'application/json' },
                body: JSON.stringify({
                    queryTitle: queryTitle
                })
        }
        fetch(url,requestConfig).then((result)=>{
            console.log("request sent successful");
            console.log(result);
            result.json().then((response)=>{
                console.log("response",response);
            }).catch(
                console.log("Unsuccessful")
            )
        })
        toggleForm();
    }
    
  return (
    <>
    <NavBar logout={<LogoutLink/> } redirect={"/patientdash"}/>
        <div className='help-desk'>
                <div className='help-side'>

                <AdminSideBar/>
                    
                 </div>

                 <div className='queries-section'>
                <span className='queries-section-heading'><h2>Help</h2></span>
                <div className='queries'>
                    {allQueries.map((curr) => {
                        if(curr.querySolution != null){
                            return(
                                <QueryBox question = {curr.queryTitle} answer = {curr.querySolution} key={curr.queryId}/>
                            );
                        }
                        
                    })}
                </div>
                   
                </div>
            </div>
            <div className={formShow}>
                <div className='new-query-form-card'>
                    <form>
                        <center><h2>Write a new Query</h2></center>
                            <div className="mb-3">
                                <input type="text" name='queryTitle' value={queryTitle} onChange={(e) => {setTitle(e.target.value)}} className="query-input" placeholder="Query" />
                            </div>
                        </form>
                        <input className='query-submit-btn' value='Submit' onClick={postQuery} type="button" />
                </div>
                
            </div>
        <div>
            <button className='add-query-btn' onClick={()=>toggleForm()}>
                <img src={Plus} className={btnRotate} alt=""/>
            </button>
        </div>
        <Footer/>
</>
  )
}