import React from 'react';
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const ResultadoDiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
    font-size: 18px;
    span {
        font-weight:bold;
    }
`;
const Precio = styled.p`
    font-size: 30px;
    span {
        font-weight:bold;
    }
`

const Cotizacion = ({ resultado }) => {

    if (Object.keys(resultado).length === 0) return null;
    return (
        <ResultadoDiv>
            <Precio>EL Precio es: <span>{resultado.PRICE}</span></Precio>
            <Info>EL Precio mas alto del dia es: <span>{resultado.HIGHDAY}</span></Info>
            <Info>EL Precio mas bajo del dia es: <span>{resultado.LOWDAY}</span></Info>
            <Info>Variacion ultimas 24 horas es: <span>{resultado.CHANGEPCT24HOUR}</span></Info>
            <Info>Ultima Actualizacion es: <span>{resultado.LASTUPDATE}</span></Info>
        </ResultadoDiv>

    );
}
Cotizacion.propTypes={
    resultado: PropTypes.object.isRequired

}
export default Cotizacion;