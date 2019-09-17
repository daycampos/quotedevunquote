/** @jsx jsx */
import { jsx } from '@emotion/core';

const Footer = ({}) => {
    return(
        <footer
            css={{
                flexShrink: 0,
                marginTop: '1.2rem',
                paddingTop: '1.75rem',
                paddingBottom:'2.6rem'

            }}
        >
            <div css={{padding:'0 1.3em'}}>
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

            </div>
        </footer>
    );
}

export default Footer;