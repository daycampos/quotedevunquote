/** @jsx jsx */
import { jsx } from '@emotion/core';

const Footer = ({}) => {
    return(
        <footer
            css={{
                display:'flex',
            }}
        >
            <a 
                css={{
                    margin:'8px 8px 8px 0px',
                }}
            href="https://twitter.com/quotedevunquote">twitter</a>
            <a 
                css={{
                    margin:'8px 8px 8px 0px',
                }}
            href="https://github.com/daycampos">github</a>
        </footer>
    );
}

export default Footer;