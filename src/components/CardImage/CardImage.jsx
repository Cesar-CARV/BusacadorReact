import React from 'react';
import Image from '../ImageC/Image'
import './CardImage.css';

const CardImage = (props) => {

    const handleClick = (e) =>{
        // console.log(props.hit.user);
        props.handleClick(props.hit);
    }

    return(
        <div className="cardImage" onClick={handleClick}>
            <Image src={props.hit.webformatURL} alt={props.hit.tags} />
            <div className="cardImage-data">
                {/* user */}
                <h5><i className="bi bi-file-person-fill"></i>:{props.hit.user}</h5>
                {/* likes */}
                <p><i className="bi bi-hand-thumbs-up-fill"></i>:{props.hit.likes}</p>
                {/* views */}
                <p><i className="bi bi-eye-fill"></i>:{props.hit.views}</p>
            </div>
        </div>
    )
}

export default CardImage;