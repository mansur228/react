import s from './Header.module.css'

import React, { Component } from 'react'

import Button from './Button/Button.js'

export default class Header extends Component {
    render() {
        return (
            <header id={s.Header}>
                <div className='container'>
                    <h1 className={s.title}>
                        <span>Не будь Потребителем -</span>
                        <span>Будь Создателем!</span>
                    </h1>
                    <h2 className={s.subTitle}>
                        Программирование для детей
                    </h2>
                    <div className={s.linkButtons}>
                        <Button text='Пробный урок'/>
                        <Button text='Контакты'/>
                    </div>
                </div>
            </header>
        )
    }
}
