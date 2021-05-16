import React, { Component } from 'react'

import s from './WhatDoWeTeach.module.css'

import Title from '../Title/Title.js'
import Card from './Card/Card.js'

import scratch from './CardsImg/scratch.png'
import MAP from './CardsImg/mitAppInventor.png'
import HTML from './CardsImg/HTML.png'
import CSS3 from './CardsImg/CSS3.png'
import JS from './CardsImg/JS.png'
import Python from './CardsImg/Python.png'

export default class WhatDoWeTeach extends Component {
    render() {
        return (
            <section id='WhatDoWeTeach'>
                <div className='container'>
                    <Title textA='Чему мы обучаем'/>
                    <div className={s.cardsContainer}>
                        <Card imgSrc={scratch} BGcolor='#F7AC1E' title='Scratch' subTitle='Визуальная среда для создания игр, мультфильмов и много другого.'/>
                        <Card imgSrc={MAP} BGcolor='#2A283C' title='App Inventor' subTitle='Среда визуальной разработки для создания Android-приложений'/>
                        <Card imgSrc={HTML} BGcolor='#F16524' title='HTML' subTitle='Язык разметки гипертекста web-страниц'/>
                        <Card imgSrc={CSS3} BGcolor='#2965F1' title='CSS' subTitle='Формальный язык, служащий для описания оформления внешнего вида web-страниц'/>
                        <Card imgSrc={JS} BGcolor='#F0BE25' title='JavaScript' subTitle='Язык программирования, который даёт возможность реализовывать сложное поведение web-страницы'/>
                        <Card imgSrc={Python} BGcolor='#DFDFDF' title='Python' subTitle='Мощный и простой для изучения язык программирования'/>
                    </div>
                </div>
            </section>
        )
    }
}
