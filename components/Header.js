import React from 'react';
import styled from '@emotion/styled';

export default class Header extends React.Component{

    render(){
        const Header = styled("header")`
            background-color:pink;`
        return(
            <Header>
                {this.props.children}
            </Header>
        );
    }
}