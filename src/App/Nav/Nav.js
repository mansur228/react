import React, { Component } from 'react'

import s from './Nav.module.css'

export default class Nav extends Component {
    constructor(){
        super()

        this.state={
            buttonState: ''
        }
    }

    render() {
        return (
            <div className={s.Nav}>
                <div className='container'>
                    <a className={s.NavLogo} onClick={
                        (e)=>{
                            e.preventDefault()

                            document.querySelector('#Header').scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            })
                        }
                    }>
                        <img src='../../../logo.png'/>
                        <img src='../../../logoText.png'/>
                    </a>
                    {/* <div className={s.NavLinksContainer}> */}
                        <nav className={s.NavLinks + ' ' + this.state.buttonState}>
                            <a className={s.NavLink} onClick={
                                (e)=>{
                                    e.preventDefault()
        
                                    document.querySelector('#AboutUs').scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'start'
                                    })
                                }
                            }>Кто мы</a>
                            <a className={s.NavLink} href='#as'>Чему мы обучаем</a>
                            <a className={s.NavLink} href='#asd'>Наши друзья</a>
                            <a className={s.NavLink} href='#asdf'>Контакты</a>
                            <a className={s.NavLink} href='#asdfg'>Вход</a>
                        </nav>
                        <div className={s.NavButton + ' ' + this.state.buttonState} onClick={()=>{
                            if(this.state.buttonState === ''){
                                this.setState({buttonState: this.state.buttonState = 'active'})
                            } 
                            else if(this.state.buttonState === 'active'){
                                this.setState({buttonState: this.state.buttonState = ''})
                            }
                        }}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    {/* </div> */}
                </div>
            </div>
        )
    }
}   