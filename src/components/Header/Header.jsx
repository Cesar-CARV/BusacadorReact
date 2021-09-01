import React from 'react';
import Buscador from '../Buscador/Buscador';
import Filters from '../Filters/Filters';
import './Header.css';  

const Header = (props) => {
    return(
        <div className="header">
            <h1 className="titulo">BUSCADOR DE IMAGENES <i className="bi bi-images"></i></h1>
            <Buscador buscar={props.buscar}/>
            <Filters cambiarFiltros={props.cambiarFiltros}/>
        </div>
    )
}

export default Header;