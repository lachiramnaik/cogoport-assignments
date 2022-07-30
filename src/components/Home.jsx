import React from 'react'
import './styles/home.css';
import {  Link } from "react-router-dom";
import Logo from './images/cogologo.webp';
const Home = () => {
  return (
    <div>
<div className='container'> 
        <div className='row justify-content-center'>
        <div className='col-lg-6 justify-content-center'>
            <div className="homebox">
<img src={Logo} alt="" />
<h2 className='name'>Name:- <span>Malothu Lachiramnaik</span></h2>
<h2 className='email'> Email:- <span>malothu.lachiramnaik@cogoport.com</span></h2>
<h2 className='email'> Profile:- <span>Associate Software Engineering</span></h2>
<h2 className='id'>Employment Id:- <span>COGO1330</span></h2>
<br />
<br />

<Link className='button' to="/allassignments">View My Assignments</Link>
</div>
        </div>
    </div>
</div>




    </div>
  )
}

export default Home