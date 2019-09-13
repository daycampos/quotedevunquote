/** @jsx jsx */

import React from 'react';
import {jsx} from '@emotion/core';

class Post extends React.PureComponent{
    render(){
        
        return(
            <div css={{marginTop:60}}>
                <h2 css={{fontSize:'1.5em'}}>
                    O primeiro Lorem ipsum
                </h2>
                <p css={{
                    fontSize:'1em'
                }}>
                    {this.props.text}
                </p>
            </div>
        )
    }
}

export default Post;