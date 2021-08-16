import React from 'react';
import './card.css'

const Card = props =>{
    return(
        <article className="card">
            <header className="card__title">
                <h3>{props.title}</h3>
            </header>
            <figure>
                <img alt="cat" src={props.image}/>
            </figure>
            <main className="card__description">
                {props.description}
            </main>
        </article>
    )
};

export default Card;