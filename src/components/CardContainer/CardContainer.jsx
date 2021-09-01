import React from 'react';
import CardImage from '../CardImage/CardImage';
import './CardContainer.css';

const CardContainer = (props) => {
    return(
        <div className="cardContaer">
            {
                props.imagenes.length > 0 ?
                    props.imagenes.map((x, key) => 
                    <CardImage key={key} hit={x} handleClick={props.cardImgClick}/>
                    )
                :
                    <p>No se han encontrado ninguna imagen :c</p>
            }
        </div>
    )
}

export default CardContainer;