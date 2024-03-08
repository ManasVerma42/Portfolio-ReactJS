import React from "react";
import "./Cards.css"

export default function Cards(props) {

    const languages = props.item.langs.map(item => {
    return (
            <div>
                <li className="langs-ul">{item}</li>    
            </div>
        )
    })

    return (
        <div className="Cards">
            <div className="card-image">
            <a href={props.item.hostlink} target="_blank" rel="noreferrer"><img src={`img/${props.item.img}`} alt="card-img"/></a>
            </div>
            
            <div className="card-info">

                <div className="card-title"><h2><a href={props.item.hostlink} target="_blank" rel="noreferrer">{props.item.title}</a></h2></div>
                <div className="card-details">{props.item.details}<p></p></div>
                <div className="langs">{languages}</div>
                <a className="view" href={props.item.codelink} target="_blank" rel="noreferrer"><button className="viewcode">View Code</button></a>

            </div>
        </div>
    )
}