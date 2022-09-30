import React from 'react';
import { Link } from 'react-router-dom';
import './Css/ComponentStyle.css'

export default function LogoutLink() {
  return (
    <div id='signin' className='navbar-logout'>
        <span>
            <Link to='/logout'>Logout</Link> 
        </span>
    </div>
  )
}
