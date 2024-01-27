import React, {useState } from 'react';
import styled from 'styled-components';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Container = styled.div`
    width: 200px;
    height: 200px;
    position: relative;
    left: 40%

`;

const ContainerImg = styled.img`
    width: 100%;
    height: 100%
`;

const ContainerCard = styled.div`
    width: 800px;
    height: 600px;
    position: relative;
    left: 17%;
    margin-top: 30px;
`;

export default function PokemonSearch(){
    const [text, setText] = useState();
    const [searchResult, setSearchResult] = useState([]);
    const [searchResImg, setSearchResImg] = useState([]);



    const handleSubmit = () => {
        try {
            fetch(`https://pokeapi.co/api/v2/pokemon/${text}`)
            .then((response) => response.json())
            .then((data) =>  {
                setSearchResult(data.stats);
                setSearchResImg(data.sprites.front_default)
                console.log(data.stats);
            });
        } catch (error) {
            console.error('Hubo un error al buscar el pokemon.')
        }
      };

   return (
    <ContainerCard >
        <div className='card' >
            <div className='card-body'>
                <h5 className='card-title'>Pokedex</h5>
                
                <label >Search for a Pokemon: </label>
                <input
                    className='form-control'
                    id="string"
                    placeholder="Enter pokemon name"
                    type="string"
                    onChange={(event) => setText(event.target.value)}
                    
                ></input>
                <br></br>
                <button className='btn btn-outline-primary' type="submit" onClick={handleSubmit}>Submit</button>

            </div>
        </div>

        <Container>
            <ContainerImg  src={searchResImg}/>
        </Container>

      <div>
            <table className="table table-success table-striped">
                <thead>
                    <tr>
                        <th scope="col">HP</th>
                        <th scope="col">Attack</th>
                        <th scope="col">Defense</th>
                        <th scope="col">Special-Attack</th>
                        <th scope="col">Special-Defense</th>
                        <th scope="col">Speed</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    {searchResult.map(item => (
                    <td>{item.base_stat}</td>
                        ))}
                    </tr>
                </tbody>
            </table>

       
      </div>
      
    </ContainerCard>

    
  );
}