import React from 'react';
import { NavLink } from 'react-router-dom';
import meeting from "../src/images/meet.png"
import Common from './Common';

const About = () => {
  return (
    <>
      <Common
       name="Welcome to About Page"
      imgsrc={meeting}
      btname="Contact Us"
      visit='/contact'
       />
    </>
  )
}

export default About

