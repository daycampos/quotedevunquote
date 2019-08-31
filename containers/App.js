import React from 'react';
import styled from '@emotion/styled';

export default class App extends React.Component{
    
    render(){
        const Title = styled.div `color: pink;`
        return(
            <Title>This is quote dev unquote</Title>
        )
    }
}