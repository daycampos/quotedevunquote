/** @jsx jsx */
import React from 'react';
import {jsx} from '@emotion/core';

const Bio = ({text}) =>{
    return(
        <aside
            css={{
                fontSize:'1em',
                maxWidth:450,
            }}
        >
            {text}
        </aside>
    )
} 

export default Bio;