import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import imagen from './cryptomonedas.png';
import Formulario from './component/Formulario'
import Cotizacion from './component/Cotizacion'
import Spinner from './component/Spinner'
import Axios from 'axios';



const Contenedor = styled.div`
max-width:900px;
margin:0 auto;

  @media (min-width: 992px){
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
}
`
const Imagen = styled.img`
max-width:100%;
margin-top: 5rem;
`

const Heading = styled.h1`
font-family:'Bebas Neue', cursive;
color: #fff;
text-align: left;
font-weight: 700;
font-size: 50px;
margin-bottom: 50px;
margin-top: 80px;

&::after{
  content:'';
  width: 100px;
  height: 6px;
  background-color:#66a2fe;
  display: block;
}
`

function App() {

  const [moneda, guardarMoneda] = useState('')
  const [criptomoneda, guardarCriptomoneda] = useState('')
  const [resultado, guardarResultado] = useState({})
  const [cargando, guardarCargando] = useState(false)

  useEffect(() => {

    const cotizarCriptomoneda = async () => {

      //evitamos la ejecucion
      if (moneda === '') return;

      // consultar la api para cotizacion de criptomonedas
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
      const resultado = await Axios.get(url);

      //SPinner
      guardarCargando(true)

      // Ocultar el spinner y ver resultado
      setTimeout(() => {

        //cambiar el estado del spinner
        guardarCargando(false)

        //guardar cotizacion
        guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda])
      }, 3000);

    }

    cotizarCriptomoneda();

  }, [moneda, criptomoneda])

  const Componente = (cargando) ? <Spinner /> : <Cotizacion resultado={resultado} />
  return (
    <Contenedor>
      <div>
        <Imagen src={imagen}
          alt='imagen Criptomoneda'
        />
      </div>
      <div>
        <Heading>Cotiza criptomonedas al Instante</Heading>

        <Formulario
          guardarCriptomoneda={guardarCriptomoneda}
          guardarMoneda={guardarMoneda}
        />
        {Componente}
      </div>


    </Contenedor>
  );
}

export default App;
