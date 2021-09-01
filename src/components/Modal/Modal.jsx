import React from 'react';
import Imagen from '../ImageC/Image';
import './Modal.css';

const Modal = (props) => {

    const cerrarModal = (e) =>{
        e.stopPropagation();
        props.cerrar(null);

    }

    return(
        <div className="modal">
            <div className="modal-card">
                <div className="modal-card_header">
                    <Imagen 
                        src={props.data.userImageURL}
                        styleLine={{borderRadius: "50%",border: "solid 5px #fff",}}
                    ></Imagen>
                    <h4><a href={`https://pixabay.com/es/users/${props.data.user}-${props.data.user_id}/`} target="_blank" style={{textDecoration: "none", color: "#fff" }}>{props.data.user}</a></h4>
                    <button className="modal-card_cerrar" onClick={cerrarModal}>x</button>
                </div>
                <div className="modal-card_body">
                    <Imagen src={props.data.webformatURL} alt={props.data.tags} styleLine={{width: "100%", height: "40vh"}}></Imagen>
                    <div className="links">
                        <a href={props.data.largeImageURL} target="_blank" className="btn btn-ver en grande">ver</a>
                        <a href={props.data.pageURL} target="_blank" className="btn btn-ver">ver publicacion</a>
                    </div>
                    <br/>
                    <div className="tags">
                        Etiquetas:
                        {
                            props.data.tags.split(',').map((x, i) => 
                                <p className="tag" key={i}>{x}</p>
                            )
                        }
                    </div>
                    <div className="stadistics">
                        <p><i className="bi bi-hand-thumbs-up-fill"></i>:{props.data.likes}</p>
                        <p><i className="bi bi-eye-fill"></i>:{props.data.views}</p>
                        <p><i className="bi bi-chat-left-text-fill"></i>:{props.data.comments}</p>
                        <p><i className="bi bi-save2-fill"></i>:{props.data.downloads}</p>
                        <p><i className="bi bi-star-fill"></i>:{props.data.favorites}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Modal;