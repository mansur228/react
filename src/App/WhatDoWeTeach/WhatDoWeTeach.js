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
            <section>
                <div className='container'>
                    <Title textA='Чему мы обучаем'/>
                    <div className={s.cardsContainer}>
                        <Card imgSrc={scratch} BGcolor='#F7AC1E'/>
                        <Card imgSrc={MAP} BGcolor='#2A283C'/>
                        <Card imgSrc={HTML} BGcolor='#F16524'/>
                        <Card imgSrc={CSS3} BGcolor='#2965F1'/>
                        <Card imgSrc={JS} BGcolor='#F0BE25'/>
                        <Card imgSrc={Python} BGcolor='#DFDFDF'/>
                    </div>
                </div>
            </section>
        )
    }
}
