import React from 'react';
import { NavLink } from 'react-router-dom';
// import meeting from "../src/images/meet.png"

const Common = (props) => {
  return (
    <>
      
         <header id='header'>
         <div className="container header-section flex">
            <div className="left">
                <h1>{props.name} <strong  className='spec' >TexaS</strong>.</h1>
                <p>We are the team of talented developer making websites</p>
                <NavLink to={props.visit} className="primary-button gets-start-btn">{props.btname}</NavLink>
            </div>
            <div className="right">
                <img src={props.imgsrc} alt="meeting image"  className='animated'/>
            </div>
         </div>
       </header>
      
    </>
  )
}

export default Common

