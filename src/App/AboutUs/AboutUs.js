import React, { Component } from 'react'

import s from './AboutUs.module.css'

import Title from '../Title/Title.js'

export default class AboutUs extends Component {
    render() {
        return (
            <section id='AboutUs'>
                <div className='container'>
                    <Title 
                        textA='Кто мы и зачем это делаем'
                        textB='Мы - команда новаторов, решающие проблему потребительского отношения к современным технологиям со стороны детей. Изучая программирование, ребенок учится логически мыслить, находить наилучшее решение поставленной задачи, развивает память и внимательность, абстрактное и визуальное мышление. К тому же IT индустрия - одна из самых быстро развивающихся и высокооплачиваемых областей трудовой деятельности на данный момент.'
                    />
                    <div id={s.AboutUsImg}>
                        <img src='https://web.archive.org/web/20201022082843im_/https://pokolenie.kg/img/12.png' alt=''/>
                    </div>
                </div>
            </section>
        )
    }
}
