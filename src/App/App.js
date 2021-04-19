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
            </>
        )
    }
}