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
               <div style={{height : '795px' , borderBottom : '3px solid #fff'}} id='a'>

               </div>
               <div style={{height : '795px' , borderBottom : '3px solid #fff'}} id='as'>

               </div>
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