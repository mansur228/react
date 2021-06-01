import React, { Component } from 'react'

import s from './Nav.module.css'

export default class Nav extends Component {
    constructor(){
        super()

        this.state={
            buttonState: ''
        }

        this.menuDeployer = this.menuDeployer.bind(this)
    }

    menuDeployer(){
        if(this.state.buttonState === ''){
            this.setState({buttonState: 'active'})
        } 
        else if(this.state.buttonState === 'active'){
            this.setState({buttonState: ''})
        }
    }

    render() {
        return (
            <div className={s.Nav}>
                <div className='container'>
                    <a className={s.NavLogo} href='#Header' onClick={
                        (e)=>{
                            e.preventDefault()

                            document.querySelector('#Header').scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            })
                        }
                    }>
                        <img src='../../../logo.png' alt='logo'/>
                        <img src='../../../logoText.png' alt='logo'/>
                    </a>
                    <nav className={s.NavLinks + ' ' + this.state.buttonState}>
                        <a className={s.NavLink} href='#AboutUs' onClick={
                            (e)=>{
                                e.preventDefault()
    
                                document.querySelector('#AboutUs').scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                })
                            }
                        }>Кто мы</a>
                        <a className={s.NavLink} href='#WhatDoWeTeach' onClick={
                            (e)=>{
                                e.preventDefault()
    
                                document.querySelector('#WhatDoWeTeach').scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                })
                            }
                        }>Чему мы обучаем</a>
                        <a className={s.NavLink} href='#OurFriends' onClick={
                            (e)=>{
                                e.preventDefault()
    
                                document.querySelector('#OurFriends').scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                })
                            }
                        }>Наши друзья</a>
                        <a className={s.NavLink} href='#Footer' onClick={
                            (e)=>{
                                e.preventDefault()
    
                                document.querySelector('#Footer').scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                })
                            }
                        }>Контакты</a>
                        <a className={s.NavLink} href='#signin'>Вход</a>
                    </nav>
                    <div className={s.NavButton + ' ' + this.state.buttonState} onClick={this.menuDeployer}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        )
    }
}   