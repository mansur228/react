import React, { Component } from 'react'

import s from './Footer.module.css'

import Title from '../Title/Title.js'

import Social from './Social/Social.js'
import Number from './Number/Number.js'
import Adress from './Adress/Adress.js'

export default class Footer extends Component {
    render() {
        return (
            <footer id='footer'>
                <div className='container'>
                    <Title textA='Свяжитесь с нами'/>
                    <div className={s.linkInfo}>
                        <div className={s.contacts}>
                            <div className={s.numbers}>
                                <Number number='+996(555)568-000'/>
                                <Number number='+996(500)568-000'/>
                                <Number number='+996(775)568-000'/>
                            </div>
                            <div className={s.adress}>
                                <Adress adress='ул. Киевская 190 (пер. Турусбекова) 2 этаж'/>
                                <Adress adress='ул. Суеркулова БЦ "Колизей" 2 этаж, каб. 201'/>
                                <Adress adress='пр. Чуй 147/1 (пер. Гоголя, напр. БЦ 1000 мелочей), 2 этаж, 207 каб.'/>
                            </div>
                        </div>
                        <div className={s.socials}>
                            <Social icon='fab fa-instagram'/>
                            <Social icon='fab fa-facebook-square'/>
                            <Social icon='fab fa-whatsapp'/>
                            <Social icon='fab fa-telegram-plane'/>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
