import React from 'react';
import styled from '@emotion/styled';

class Bio extends React.PureComponent{
    render(){
        const Bio = styled.aside`
            font-size:1em;
            max-width:450px;
        `
        return(
            <Bio>
                {this.props.text}
            </Bio>
        )
    }
}

export default Bio;