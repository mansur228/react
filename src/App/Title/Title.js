import React, { Component } from 'react'

import s from './Title.module.css'

import TitleA from './TitleA/TitleA.js'
import TitleB from './TitleB/TitleB.js'

export default class Title extends Component {
    render() {
        return (
            <div className={s.Title}>
                <TitleA text='Кто мы и зачем это делаем'/>
                <TitleB text='Мы - команда новаторов, решающие проблему потребительского отношения к современным технологиям со стороны детей. Изучая программирование, ребенок учится логически мыслить, находить наилучшее решение поставленной задачи, развивает память и внимательность, абстрактное и визуальное мышление. К тому же IT индустрия - одна из самых быстро развивающихся и высокооплачиваемых областей трудовой деятельности на данный момент.'/>
            </div>
        )
    }
}
