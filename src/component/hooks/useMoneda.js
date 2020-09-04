import React, { Fragment, useState } from 'react';

const useMoneda = (label, stateInicial, opciones) => {

    //state de nuestro custom hook
    const [state, actualizarState] = useState(stateInicial);

    const Seleccionar = () => (
        <Fragment>
            <label>{label}</label>
            <select>
                <option value='MXN'>-- Seleccione --</option>
                {opciones.map(opciones =>(
                    <option key={opciones.codigo} value={opciones.codigo}>{opciones.nombre}</option>
                    
                ))}
            </select>
        </Fragment>

    )
return [state, Seleccionar, actualizarState];

}

export default useMoneda;