import React, {useState} from 'react';
import './Filters.css';

const Filters = (props) => {

    const [show, setShow] = useState(false);

    const handleShowFilters = () =>{
        show ? setShow(false): setShow(true);
    }

    const handleFilters = (e) => {
        console.log(e.target.name, e.target.value, e.target.option);
        props.cambiarFiltros(e.target);
    }

    const style = {
        height: show ? "150px": "0px",
        padding: show ? "10px": "0px 10px",
    }
    
    return(
        <div className="filters-container">
            <button className="filters-container_button" onClick={handleShowFilters}>
                <i className="bi bi-funnel-fill"></i> Filtros
            </button>
            <div className="filters" style={style}>
                <p>Tipo de Image</p>
                <select defaultValue="all" name="imageType" onChange={handleFilters}>
                    <option value="all" >todo</option>
                    <option value="photo">foto</option>
                    <option value="ilustration">ilustracion</option>
                    <option value="vector">vector</option>
                </select>
                <p>Orientacion</p>
                <select defaultValue="all" name="orientation" onChange={handleFilters}>
                    <option value="all" >todo</option>
                    <option value="horizontal">horizontal</option>
                    <option value="vertical">vertical</option>
                </select>
                <p>Categoria</p>
                <select defaultValue="" name="category" onChange={handleFilters}>
                    <option value="" >todo</option>
                    <option value="backgrounds" >fondos</option>
                    <option value="ashion" >ashion</option>
                    <option value="nature" >naturaleza</option>
                    <option value="science" >ciencia</option>
                    <option value="education" >educacion</option>
                    <option value="feelings" >sentimientos</option>
                    <option value="health" >salud</option>
                    <option value="people" >gente</option>
                    <option value="religion" >religion</option>
                    <option value="places" >lugares</option>
                    <option value="animals" >animales</option>
                    <option value="industry" >industrial</option>
                    <option value="computer" >ordenador</option>
                    <option value="food" >comida</option>
                    <option value="sports" >deportes</option>
                    <option value="transportation" >trasnporte</option>
                    <option value="travel" >viaje</option>
                    <option value="buildings" >edificios</option>
                    <option value="business" >negocios</option>
                    <option value="music" >musica</option>
                </select>
                <p>Color</p>
                <select defaultValue="" name="color" onChange={handleFilters}>
                    <option value="" >todo</option>
                    <option value="grayscale" >escala de grises</option>
                    <option value="transparent" >transparent</option>
                    <option value="red" >rojo</option>
                    <option value="orange" >naranja</option>
                    <option value="yellow" >amarillo</option>
                    <option value="green" >verde</option>
                    <option value="turquoise" >turquesa</option>
                    <option value="blue" >azul</option>
                    <option value="lilac" >lila</option>
                    <option value="pink" >rosa</option>
                    <option value="white" >blanco</option>
                    <option value="gray" >gris</option>
                    <option value="black" >negro</option>
                    <option value="brown" >cafe</option>
                </select>
            </div>
        </div>
    )
}

export default Filters;