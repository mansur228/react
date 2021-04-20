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
                    <a className={s.Logo} href='#Header_Header__ynSho'>
                        <img src='../../../logo.png' alt='logo'/>
                        <img src='../../../logoText.png' alt='logoText'/>
                    </a>
                    <nav className={s.navLinksConteiner}>
                        <a className={s.navLink} href='#AboutUs_AboutUs__3cYP2'>Кто мы</a>
                        <a className={s.navLink} href='#AboutUs_AboutUs__3cYP2'>Чему мы обучаем</a>
                        <a className={s.navLink} href='#AboutUs_AboutUs__3cYP2'>Наши друзья</a>
                        <a className={s.navLink} href='#AboutUs_AboutUs__3cYP2'>Контакты</a>
                        <a className={s.navLink} href='#AboutUs_AboutUs__3cYP2'>Вход</a>
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
                            <a className={s.navLinkMobile} href='#AboutUs_AboutUs__3cYP2'>Кто мы</a>
                            <a className={s.navLinkMobile} href='#AboutUs_AboutUs__3cYP2'>Чему мы обучаем</a>
                            <a className={s.navLinkMobile} href='#AboutUs_AboutUs__3cYP2'>Наши друзья</a>
                            <a className={s.navLinkMobile} href='#AboutUs_AboutUs__3cYP2'>Контакты</a>
                            <a className={s.navLinkMobile} href='#AboutUs_AboutUs__3cYP2'>Вход</a>
                        </nav>
                    </div>

                </div>
            </div>
        )
    }
}
