import React from 'react';
import './Css/ComponentStyle.css';
import arrow from "./Css/arrow-down.svg";
import { useState } from 'react';
import "../Components/Css/QueryBoxAdmin.css";
import edit from "./Css/edit.svg";

export default function QueryBoxAdmin(props) {

    let [collapse, setExpand] = useState("collapse-query");
    let[btnRotate, setBtnRotate] = useState("expand-btn-icon");

    function Collapse() {
        console.log("Was Clicked");
        if(collapse === "collapse-query"){
        setExpand("expand-query");
        setBtnRotate("expand-btn-icon-rotate");
        }else{
        setExpand("collapse-query");
        setBtnRotate("expand-btn-icon");
        }
    }

    let [formCheck,setFormCheck] = useState(true);

    function toggleForm(){
            console.log("Edit btn clicked!");
            console.log(formCheck);
        if(formCheck === true){
            setFormCheck(false);
        }else{
            setFormCheck(true);
        }
    }

  return (
    <div className="query-box">
            <div className='query'>
                <div className='query-header'>
                  <div className='question'>{props.question}</div>
                  <div className='query-edit-btn-container'>
                    <button className='query-edit-btn' onClick={()=>toggleForm()}>
                        <img className='query-edit-btn-icon' src={edit} alt="" />
                        </button>
                    </div>
                </div>

                <div className={collapse}>{props.answer}</div>
                <button className='expand-btn' onClick={()=>Collapse()}>
                  <img className={btnRotate} src={arrow} alt="" />
                </button>
            </div>            
    </div>
  )
}