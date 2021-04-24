import s from './Nav.module.css'

import React, { Component } from 'react'

export default class Nav extends Component {
    constructor(){
        super()

        this.state={
            active: ''
        }

        this.toggle = this.toggle.bind(this)
    }

    toggle(){
        if(this.state.active === '') {
            this.setState({active: this.state.active = 'active'})
        }
        else if(this.state.active === 'active') {
            this.setState({active: this.state.active = ''})
        }
    }

    render() {
        return (
            <div className={s.Nav}>
                <div className={"container"}>
                    <a className={s.Logo} onClick={
                        (e)=>{
                            e.preventDefault()

                            document.querySelector('#Header_Header__ynSho').scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            })
                        }
                    }>
                        <img src='../../../logo.png' alt='logo'/>
                        <img src='../../../logoText.png' alt='logoText'/>
                    </a>
                    <nav className={s.navLinksConteiner}>
                        <a className={s.navLink} href='#a' onClick={
                            (e)=>{
                                e.preventDefault()

                                document.querySelector('#a').scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                })
                            }
                        }>Кто мы</a>
                        <a className={s.navLink} href='#as' onClick={
                            (e)=>{
                                e.preventDefault()

                                document.querySelector('#as').scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                })
                            }
                        }>Чему мы обучаем</a>
                        <a className={s.navLink} href='#asd' onClick={
                            (e)=>{
                                e.preventDefault()

                                document.querySelector('#asd').scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                })
                            }
                        }>Наши друзья</a>
                        <a className={s.navLink} href='#asdf' onClick={
                            (e)=>{
                                e.preventDefault()

                                document.querySelector('#asdf').scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                })
                            }
                        }>Контакты</a>
                        <a className={s.navLink} href='#asdfg' onClick={
                            (e)=>{
                                e.preventDefault()

                                document.querySelector('#asdfg').scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                })
                            }
                        }>Вход</a>
                    </nav>
                    <div className={s.navConteinerMobile}>
                        <div className={s.burgerMenuContainer} onClick={this.toggle}>
                            <div className={s.burgerMenu}>
                                <span className={s.burgerMenuTopitem}></span>
                                <span className={s.burgerMenuMiddleitem}></span>
                                <span className={s.burgerMenuBottomitem}></span>
                            </div>
                        </div>
                        <nav className={s.navLinksConteinerMobile + ' ' + this.state.active}>
                            <a className={s.navLinkMobile} href='#a' onClick={
                            (e)=>{
                                e.preventDefault()

                                document.querySelector('#a').scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                })
                            }
                        }>Кто мы</a>
                            <a className={s.navLinkMobile} href='#as' onClick={
                            (e)=>{
                                e.preventDefault()

                                document.querySelector('#as').scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                })
                            }
                        }>Чему мы обучаем</a>
                            <a className={s.navLinkMobile} href='#asd' onClick={
                            (e)=>{
                                e.preventDefault()

                                document.querySelector('#asd').scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                })
                            }
                        }>Наши друзья</a>
                            <a className={s.navLinkMobile} href='#asdf' onClick={
                            (e)=>{
                                e.preventDefault()

                                document.querySelector('#asdf').scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                })
                            }
                        }>Контакты</a>
                            <a className={s.navLinkMobile} href='#asdfg' onClick={
                            (e)=>{
                                e.preventDefault()

                                document.querySelector('#asdfg').scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                })
                            }
                        }>Вход</a>
                        </nav>
                    </div>

                </div>
            </div>
        )
    }
}
