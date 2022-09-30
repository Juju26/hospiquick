import React,{useState} from 'react'
import { Link } from 'react-router-dom'


export default function SignUpLink() {
  return (
    <div id='signin' className='navbar-signin'>
        <span><Link to="signin" > Signin </Link></span> / 
        <span> <Link to="signup" > SignUp </Link></span>
    </div>
  )
}
