/** @jsx jsx */
import React from 'react';
import {jsx} from '@emotion/core';

class Bio extends React.PureComponent{
    render(){
        return(
            <aside
                css={{
                    fontSize:'1em',
                    maxWidth:450,
                }}
            >
                {this.props.text}
            </aside>
        )
    }
}

export default Bio;