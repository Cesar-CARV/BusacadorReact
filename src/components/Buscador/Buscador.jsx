import React from 'react';
import './Buscador.css';

const Buscador = (props) => {

    const buscadorValor = React.createRef();

    const handleKeyPress = (e) => {
        if (e.charCode === 13){
            props.buscar(buscadorValor.current.value);
        }
    }

    const handleClick = (e) => {
        props.buscar(buscadorValor.current.value);
    }

    return(
        <div className="buscador">
            <input 
                placeholder="busca aqui"
                type="search"
                ref={buscadorValor}
                onKeyPress={handleKeyPress}
                className="buscador-input"/>
            <button onClick={handleClick} className="buscador-button">
                <i className="bi bi-search"></i>
            </button>
        </div>
    )
}

export default Buscador;
