/** @jsx jsx */
import React from 'react';
import {jsx} from '@emotion/core';

export default class Title extends React.PureComponent{
 
    render(){
        return(
            <h1 css={{fontSize:'2.4em'}}>
                <span>quote dev</span>
                <span> unquote</span>
            </h1>
        )
    }
}