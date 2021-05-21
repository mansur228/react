import React, { Component } from 'react'

import './App.css'

import Nav from  './Nav/Nav.js'
import Header from './Header/Header.js'
import AboutUs from './AboutUs/AboutUs.js'
import WhatDoWeTeach from './WhatDoWeTeach/WhatDoWeTeach.js'
import HowWeTeach from './HowWeTeach/HowWeTeach.js'
import OurFriends from './OurFriends/OurFriends.js'


export default class App extends Component {
    render() {
        return (
            <>
               <Nav/>
               <Header/>
               <AboutUs/>
               <WhatDoWeTeach/>
               <HowWeTeach/>
               <OurFriends/>
               <div style={{height : '795px' , borderBottom : '3px solid #fff'}} id='asdf'>

               </div>
               <div style={{height : '795px' , borderBottom : '3px solid #fff'}} id='asdfg'>

               </div>
            </>
        )
    }
}