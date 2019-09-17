/** @jsx jsx */

import React from 'react';
import {jsx} from '@emotion/core';
export default class Header extends React.Component{

    render(){
        return(
            <header css={{marginBottom:'2.6rem'}}>
                {this.props.children}
            </header>
        );
    }
}