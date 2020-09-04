import React from 'react';
const Cotizacion = ({ resultado }) => {

    if (Object.keys(resultado).length === 0) return null;
    return (
        <div>
            <p>EL precio es: <span>{resultado.PRICE}</span></p>
            <p>EL precio mas alto del dia es: <span>{resultado.HIGHDAT}</span></p>
            <p>EL precio mas bajo del dia es: <span>{resultado.LOWDAY}</span></p>
            <p>Variacion ultimas 24 horas es: <span>{resultado.CHANGEPCT24HOUR}</span></p>
            <p>Ultima Actualizacion es: <span>{resultado.LASTUPDATE}</span></p>
        </div>

    );
}

export default Cotizacion;