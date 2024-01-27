import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ContainerInfo from './PokemonInfo'


const ContainerTitle = styled.div`
  text-align: center;
  border: 1px solid;
  background-color: #335;
  color: white;
  
`;

const ContainerList = styled.div`
  left: 0px;
  width: 150px;
  position: absolute;
`;

const Card = styled.div`
  border: 3px;
  padding: 10px;
  margin: 0px;
  border: 2px solid #333;
  background: #335;
  color: white;
  text-align: center;
`;

const ContainerContent = styled.div`
  left: 0px;
  background-color: gray;
  position: absolute;
  width: 100%;
  height: 300px;
  text-align: center;
  display: flex;
  border: 0%;
  padding: 0%;
  margin: 0px;

`;




export default function Pokemons(){
    const [items, setItems] = useState([]);

    useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        const data = await response.json();
        setItems(data.results);
      } catch (error) {
        console.error('Hubo un error al generar la lista de pokemones: ', error)
      }
    };

    fetchItems()
    
    }, [])
    return(

        <div>
          <ContainerTitle>
            <h1>Welcome Pokemon</h1>
            <div>
                <img alt='as' src='https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png' />
            </div>
          </ContainerTitle>

          <ContainerContent>
            <ContainerInfo />
          </ContainerContent>
           
            <ContainerList>
              <Card>
                <h3>Most common pokemons.</h3>
              </Card>
            {items.map(item => (
                <Card key={item.name}>
                    <div>{item.name}</div>
                </Card>
               
            ))}
            </ContainerList>
        </div>
    );
}