import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    text-align: center;
`;

export default function About() {
    return (
        <Container>
        
        <h1>About Pokemon API.</h1>
        
        <div>
        <h2>What is this?</h2>
            <h4>This is final project for Fullstack JS React specialization. Just as a surprise, you will get a random pokemon from a list of 1302 items. </h4>
            <h4>You can click the Refresh button to generate a new pokemon! </h4>
            <h4>You can search for a specific Pokemon using the Pokedex!! </h4>
            <h4>It will show you the stats of each random pokemon aswell.</h4>
            <h4>Have fun!</h4>
        </div>

        <div>
            <img alt='as' src='https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png' />
        </div>
        
        
        </Container>

        
    )
}