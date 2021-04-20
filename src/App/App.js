import './App.css'

import Nav from  './Nav/Nav.js'
import Header from './Header/Header.js'

import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
            <>
               <Nav/>
               <Header/>
            </>
        )
    }
}