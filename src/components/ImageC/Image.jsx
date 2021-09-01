import React from 'react';
import './Image.css';

const Image = (props) => {

    return (
        <div className="image" style={props.styleLine}>
            {
                props.src !== "" ?
                    <img src={props.src} alt={props.alt} className="image-img"/>
                :
                <p style={{lineHeight:"3.5"}}>(°¬°)</p>
            }
        </div>
    )
}

export default Image;
