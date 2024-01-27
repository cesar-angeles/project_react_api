import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ContainerData from './PokemonData'

const ContainerInfo = styled.div`
  width: 100%;
  height: 100%;
  border: 0%;
  padding: 0%;
  margin: 0px;
  background-color: black;
  color: white;
  display: block;
`;

export default function ExtractData() {
    const [itemsTotal, setItemsTotal] = useState([]);
  
    useEffect(() => {
    const fetchItems = async () => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon');
            const data = await response.json();
            setItemsTotal(data);
        } catch (error) {
            console.error('Hubo un error al generar la navbar: ', error)
        }
    };
  
    fetchItems()
    }, [])



    return (
      <ContainerInfo>
        <div>
            <p>Pokemon Total #: {itemsTotal.count}</p>
        </div>
        <ContainerData />
      </ContainerInfo>
    )
  }