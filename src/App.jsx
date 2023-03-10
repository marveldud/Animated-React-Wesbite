import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import {Switch, Route, Redirect} from "react-router-dom"
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Navbar from './Navbar'
import "./index.css"
import Footer from './Footer'
const App = () => {
  return (
   <>
   <Navbar />
     <Switch>
        <Route  exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route  exact  path='/service' component={Services}/>
        <Route  exact  path='/contact' component={Contact}/>
        <Redirect to="/" />
        </Switch>
        <Footer/>
   </>
  )
}

export default App

// when i use Switch in react-router dom v6 it doesnot show output
// react router dom "^6.7.0" setting in index.js file


