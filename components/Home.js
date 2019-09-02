import React from 'react';
import styled from '@emotion/styled';
import Header from './Header';
import Title from './Title';
import Bio from './Bio';

export default class Home extends React.Component{
    render(){
        const Container = styled.div`
            margin-left:auto; 
            margin-right:auto;
            max-width:42em;
        `
        return(
            <Container>
                <Header>
                    <Title title="quote dev unquote"/>
                    <Bio text={
                        `Esse blog surgiu como uma forma de me ajudar
                        a estudar e praticar conceitos de desenvolvimento web, mais
                        especificamente de front-end.`
                    }/>
                </Header>
            </Container>
        );
    }
}
