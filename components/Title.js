import React from 'react';
import styled from '@emotion/styled';

export default class Title extends React.PureComponent{
 
    render(){
        const Title = styled.h1`font-size:2.4em`

        return(
            <Title>{this.props.title}</Title>
        )
    }
}