import React from 'react';

const VerMasBoton = (props) => {
    
    const style = {
        display: "block",
        cursor: "pointer",
        padding: "10px",
        margin: "auto",
        border: "none",
        borderRadius: "10px",
        backgroundColor: "#222",
        color: "#eee",
        fontSize: "20px",
    }

    const handleClcik = () => {
        console.log("Ver Mas");
        props.handleClick();
    }

    return(
        <button style={style} onClick={handleClcik}>
            Ver Mas
        </button>
    )
}

export default VerMasBoton;
