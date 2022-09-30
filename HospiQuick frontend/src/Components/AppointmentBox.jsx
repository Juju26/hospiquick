import React from 'react';
import './Css/ComponentStyle.css';

export default function QueryBox(props) {
  return (
    <div className='query-box'>
            <div className='query'>
                <span>{props.question}</span><br/>
                <span>{props.answer}</span>
            </div>
    </div>
  )
}