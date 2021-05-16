import React, { Component } from 'react'

import s from './HowWeTeach.module.css'

import Title from '../Title/Title.js'

export default class HowWeTeach extends Component {
    render() {
        return (
            <section id='HowWeTeach'>
                <div className='container'>
                    <Title 
                        textA='Как мы обучаем'
                        textB='Уроки проводятся 2 раза в неделю по 2 часа в группах до 7 человек как в онлайн-формате, так и в наших городских локациях. И там и там идёт полное взаимодействие ребенка с преподавателем. &#10;&#13; Для того, чтобы попасть на занятия, нужно выполнить три простых действия:'/>
                    <h3 className={s.title}>
                        Для того, чтобы попасть на занятия, нужно выполнить три простых действия:
                    </h3>
                </div>
            </section>
        )
    }
}
