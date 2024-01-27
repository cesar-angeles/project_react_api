import React, {useEffect, useState} from 'react';
import styled from 'styled-components';


const ContainerData = styled.div`
    background-color: #333;
    height: 400px;
    width: 100%;
`;

const ContainerTable = styled.table`
    position: absolute;
    left: 38%;
    text-align: center;
    height: 20%;
`;





export default function PokemonData() {
    const randomIndex = Math.floor(Math.random() * 1010);


    const [itemsT, setItemsT] = useState([]);
    const [itemsN, setItemsN] = useState([]);
    const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + randomIndex + '.png';

    const handleRefresh = () =>{
        window.location.reload(true);
    } 
    useEffect(() => {
    const fetchItems = async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + randomIndex);
        const data = await response.json();
        setItemsT(data.stats);
        setItemsN(data.forms[0]);
    } catch (error) {
        console.error('Hubo un error al generar la data: ', error)
    }
    };
    
    fetchItems()
    }, [])
    return(
        <ContainerData>
        <div><p>Random value: {randomIndex}</p></div>
        <div><h3>{itemsN.name}</h3></div>
        <div>
                <button onClick={handleRefresh}>Refresh</button>
            </div>

        <div>
            <img alt='as' src={url} />
        </div>
        <ContainerTable>
                <thead >
                    <tr>
                        <th>
                            HP
                        </th>
                        <th>
                            Attack
                        </th>

                        <th>
                            Defense
                        </th>
                        <th>
                            Special-Attack
                        </th>
                        <th>
                            Special-defense
                        </th>
                        <th>
                            Speed
                        </th>
                    </tr>
                </thead>
    
                <tbody>
                <tr>
                {itemsT.map((item) => (
                    <td>
                        {item.base_stat}
                    </td>
                ))}

                </tr>
                   
                </tbody>       
            </ContainerTable>
            
        </ContainerData>
    )
}