import React from 'react';
import { useState, useEffect } from 'react';
import "./Css/HelpDesk.css";
import QueryBoxAdmin from '../Components/QueryBoxAdmin';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import AdminSideBar from '../Components/AdminSidebar';
import Pagination from '../Components/Pagination';
import Plus from './Css/plus.svg';
import LogoutLink from '../Components/LogoutLink';
import { useNavigate } from 'react-router-dom';

export default function HelpDeskAdmin() {
    let [formShow,setForm] = useState('form-hide');
    let [btnRotate,setBtnRotate] = useState('add-query-btn-icon-rotate');
    const navigate=useNavigate();
    useEffect(() => {
      if(localStorage.getItem('SignIn')!=='true' || localStorage.getItem('role')!=='ROLE_ADMIN'){  
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

    const [querySolution,setQuerySolution] = useState("");
    let [queryTitle,setTitle] = useState("");
    let [selectedQueryId, setQueryId] = useState(0);
    let [selectedQuerySol, updatedQuerySol] = useState();

    const editQuery = (event) => {
        event.preventDefault();
        let url = `http://localhost:8083/queries/${selectedQueryId}`;
        // console.log(url);
        // console.log("data : ", toString(selectedQueryId), queryTitle,selectedQuerySol);
        let requestConfig = {
                method : 'PUT',
                headers : { 'Content-Type': 'application/json',
                'Accept': 'application/json' },
                body: JSON.stringify({
                    queryId: selectedQueryId,
                    queryTitle: queryTitle,
                    querySolution: selectedQuerySol
                })
        }
        fetch(url,requestConfig).then((result)=>{
            console.log("request sent successful");
            // console.log(result);
            result.json().then((response)=>{
                // console.log("response",response);
            }).catch(
                console.log("Unsuccessful")
            )
        })
        toggleForm();
    }

    const deleteQuery = (event) => {
        event.preventDefault();
        let url = `http://localhost:8083/queries/${selectedQueryId}`;
        // console.log(url);
        // console.log("data : ", toString(selectedQueryId), queryTitle,selectedQuerySol);
        let requestConfig = {
                method : 'DELETE',
                headers : { 'Content-Type': 'application/json',
                'Accept': 'application/json' },
        }
        fetch(url,requestConfig).then((result)=>{
            console.log("request sent successful");
            // console.log(result);
            result.json().then((response)=>{
                // console.log("response",response);
            }).catch(
                console.log("Unsuccessful")
            )
        })
        toggleForm();
    }


    

    const querySolutionRender = (id) => {
        // console.log("Current Query ID",id)
        allQueries.forEach((query) => {if(query.queryId === parseInt(id)){
            setQuerySolution(query.querySolution);
        }} 
        )
    }

  return (
    <>
    <NavBar logout={<LogoutLink/>} redirect={"/admindash"}/>
        <div className='help-desk'>
                <div className='help-side'>
                <AdminSideBar/>
                    
                 </div>

                 <div className='queries-section'>
                <span className='queries-section-heading'><h2>Help</h2></span>
                <div className='queries'>
                    {allQueries.map((curr) => {
                            return(
                                <QueryBoxAdmin question = {curr.queryTitle} answer = {curr.querySolution} key={curr.queryId}/>
                            );                        
                    })}
                </div>
                
                </div>
            </div>
            <div className={formShow}>
                <div className='new-query-form-card'>
                    <form>
                        <center><h2>Queries</h2></center>
                            <div className='queries-dropdown'>
                            <select className="form-select" aria-label="Default select example" onChange={(e) => {
                                        // console.log(e.target.value);
                                        const id = e.target.value;
                                        setQueryId(id)
                                        querySolutionRender(id);
                                    }}>
                                <option defaultValue={"Select a query"}>Select a query</option>
                                {allQueries.map((curr) => {
                                return(
                                    <option value={curr.queryId} name="SelectedQueryId" key={curr.queryId} >
                                            {curr.queryTitle}</option>
                                );                        
                                })}
                            </select><br/>
                            </div>
                            <div className="mb-3">
                                {allQueries.map((curr) => {
                                    if(curr.queryId === parseInt(selectedQueryId)){
                                        return(
                                            <input type="text" className="query-input" key={curr.queryId} value={querySolution} onChange={(e)=>{
                                                setQueryId(curr.queryId);
                                                setTitle(curr.queryTitle);
                                                setQuerySolution(e.target.value);
                                                updatedQuerySol(e.target.value);
                                                
                                            }}/>
                                        ); 
                                    }                  
                                    })}
                                
                            </div>
                        </form>
                        <input className='query-submit-btn' value='Edit' onClick={editQuery} type="button" /><br/>
                        <input className='query-submit-btn' value='Delete' onClick={deleteQuery} type="button" />
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