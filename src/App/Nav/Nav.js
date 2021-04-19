import s from './Nav.module.css'

import React, { Component } from 'react'


export default class Nav extends Component {
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
                        <a className={s.navLink}>Чему мы обучаем</a>
                        <a className={s.navLink}>Наши друзья</a>
                        <a className={s.navLink}>Контакты</a>
                        <a className={s.navLink}>Вход</a>
                    </nav>
                </div>
            </div>
        )
    }
}
