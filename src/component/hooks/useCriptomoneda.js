import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled'
import Proptypes from 'prop-types'

const Label = styled.label`
font-family: 'Bebas Neue', cursive;
color: #fff;
text-transform: uppercase;
font-weight:bold;
font-size: 2.4rem;
margin-top: 2rem;
display: block;
`
const Select = styled.select`
width: 100%;
display: block;
padding: 1rem;
-webkit-appearance: none;
border-radius: 10px;
border: none;
font-size: 1.2rem;
`

const useCriptomoneda = (label, stateInicial, opciones) => {

    //state de nuestro custom hook
    const [state, actualizarState] = useState(stateInicial);

    const SelectCripto = () => (

        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={e => actualizarState(e.target.value)}
                value={state}
            >
                <option value='MXN'>-- Seleccione --</option>
                {opciones.map(opciones => (
                    <option key={opciones.CoinInfo.id} value={opciones.CoinInfo.Name}>{opciones.CoinInfo.FullName}</option>

                ))}
            </Select>
        </Fragment>

    )
    return [state, SelectCripto, actualizarState];

}

useCriptomoneda.propTypes ={
    label: Proptypes.string.isRequired,
    stateInicial:Proptypes.string.isRequired,
    opciones:Proptypes.object.isRequired,

    
}

export default useCriptomoneda;