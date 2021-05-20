import React, { Component } from 'react'

import s from './HowWeTeach.module.css'

import Title from '../Title/Title.js'
import TaskIcon from './TaskIcon/TaskIcon.js'

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
                    <div className={s.TaskIcons}>
                        <TaskIcon icon='far fa-clipboard' text='Записаться' hrefLink='#ww'/>
                        <TaskIcon icon='fas fa-chalkboard-teacher' text='Пройти пробное занятие' hrefLink='#ww'/>
                        <TaskIcon icon='fas fa-laptop' text='Начать обучение' hrefLink='#ww'/>
                    </div>
                </div>
            </section>
        )
    }
}