import React from 'react'

import './MainPanel.css'
import Card from '../Card/Card'
import StatisticCard from 'components/Card/StatisticCard'
import DataTable from 'components/Table/DataTable'

const MainPanel = (props) => {
    return (
        <section className='MainPanel'>
            <div className='title'>
                <h1>{props.title}</h1>
            </div>
            <div className='row'>
                <div className='col twice'>
                    <StatisticCard stat={props.card1} />
                    <Card title={props.card2.title} />
                </div>
                <DataTable data={props.data} />
                <Card title='table' />
            </div>
        </section>
    )
}

export default MainPanel
