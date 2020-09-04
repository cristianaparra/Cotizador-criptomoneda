import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled'
import useMoneda from './hooks/useMoneda'
import useCriptomoneda from './hooks/useCriptomoneda'
import Axios from 'axios';


const Boton = styled.input`
margin-top: 20px;
font-weight: bold;
font-size:20px;
padding:10px;
background-color:#66a2fe;
border: none;
width: 100%;
border-radius: 10px;
color:#fff;
transition: background-color .3s ease;

&:hover{
    background-color:#326ac0;
    cursor:pointer;
}

`

const Formulario = () => {
    //state del listado de criptomoneda

    const [listacripto, guardarCriptomoneda] = useState([])
    const [error, guardarError] = useState(false);

    //utilizar useMoneda
    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dolar de Estados Unidos' },
        { codigo: 'MXN', nombre: 'Peso Mexicano' },
        { codigo: 'CHL', nombre: 'Peso Chileno' },
        { codigo: 'EUR', nombre: 'Euro' },
        { codigo: 'GBP', nombre: 'Libra Esterlina' },
        { codigo: 'COD', nombre: 'Peso Colombiano' }
    ]

    const [moneda, SelectMoneda] = useMoneda('elige tu moneda', '', MONEDAS);
    //utilizar criptomoneda
    const [criptomoneda, SelectCripto] = useCriptomoneda('Elige tu Criptomoneda', '', listacripto);

    //Ejecutar llamado a la api
    useEffect(() => {

        const ConsultarAPi = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

            const resultado = await Axios.get(url);

            guardarCriptomoneda(resultado.data.Data);
        }
        ConsultarAPi()

    }, [])

    const cotizarMoneda = e => {
        e.preventDefault();
        if(moneda=== '' || criptomoneda ===''){
            guardarError(true);
            return
        }
        
        //pasando al componente principal
        guardarError(false)
    }

    return (
        <form
            onSubmit={cotizarMoneda}
        >
            {error ? 'Tienes un error': null}

            <SelectMoneda />

            <SelectCripto />

            <Boton
                type='submite'
                value='Calcular'
            />

        </form>

    );
}

export default Formulario;