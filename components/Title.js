import React from 'react';
import styled from '@emotion/styled';

export default class Title extends React.PureComponent{
 
    render(){
        const Title = styled("h1")`color: blue`

        return(
            <Title>{this.props.title}</Title>
        )
    }
}