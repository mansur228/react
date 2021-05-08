import s from './Header.module.css'

import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header id='Header'>
                <div className='container'>
                    <h1 className={s.title}>
                        <span>Не будь Потребителем -</span>
                        <span>Буть Создателем</span>
                    </h1>
                    <h2 className={s.subTitle}>
                        Программирование для детей
                    </h2>
                    <div className={s.buttonContainer}>
                        <div className={s.button}>
                            Пробный урок
                        </div>
                        <div className={s.button}>
                            Контакты
                        </div>
                    </div>
                </div>
                <div className={s.bgi}>

                </div>
            </header>
        )
    }
}
