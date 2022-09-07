import React from 'react'
import Card from './Card'

const StatisticCard = (props) => {
    const content = <div>
        <div className="row">
            <h1>{props.stat.firstNumber}</h1>
            <p>{props.stat.firstText}</p>
        </div><div className="row">
            <h2>{props.stat.secondNumber}</h2>
            <p>{props.stat.secondText}</p>
        </div>
    </div>
    return (
        <article>
            <Card title={props.stat.title} content={content} />
        </article>
    )
}

export default StatisticCard