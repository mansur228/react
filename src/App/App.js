import './App.css'

import Nav from  './Nav/Nav.js'
import Header from './Header/Header.js'
import AboutUs from './AboutUs/AboutUs.js'
import WhatDoWeTeach from './WhatDoWeTeach/WhatDoWeTeach.js'

import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
            <>
               <Nav/>
               <Header/>
               <AboutUs/>
               <WhatDoWeTeach/>
               <div style={{height : '795px' , borderBottom : '3px solid #fff'}} id='asd'>

               </div>
               <div style={{height : '795px' , borderBottom : '3px solid #fff'}} id='asdf'>

               </div>
               <div style={{height : '795px' , borderBottom : '3px solid #fff'}} id='asdfg'>

               </div>
            </>
        )
    }
}