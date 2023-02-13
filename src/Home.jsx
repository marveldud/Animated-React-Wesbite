import React from 'react';
import { NavLink } from 'react-router-dom';
import meeting from "../src/images/meet.png"
import Common from './Common';

const Home = () => {
  return (
    <>
      <Common 
      name="Grow Your Business With"
      imgsrc={meeting}
      btname="Get Started"
      visit='/'
         />
    </>
  )
}

export default Home
