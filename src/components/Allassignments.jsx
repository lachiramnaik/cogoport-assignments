import React from 'react'
import './styles/allassignments.css';
import {  Link } from "react-router-dom";
const Allassignments = () => {

  return (
    <div className='body'>
        <div className='container mt-5' >
            <div className='row' >
                <div className='col-lg-4' >
                
  <div class="card h-100">
    <div class="card-body">
        <h2>Assignment-1</h2>
        <br />

        <h3 className='topic'>Topic:- Pic any kind of website and write a comments what kind of modification you can do for better Design</h3>
        <br />
        <br />

        <Link className='button' to="/assignment_1">View Assignment-1</Link>
    </div>
  </div>
                </div>
                <div className='col-lg-4'>
             
                <div class="card h-100">
    <div class="card-body">
    <h2 >Assignment-2</h2>
    <br />
    
    <h3 className='topic'>Topic:- Design my Portfolio website </h3>
    <br />
    <br />
    <br />
    <br />
<br />
<br />
    <a  className='button jusify-content-bottom' href="https://profile-sable.vercel.app/">View Assignment-2</a>
    
    </div>
  </div>
                </div>
                <div className='col-lg-4' >

                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Allassignments