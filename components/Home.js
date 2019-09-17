/** @jsx jsx */
import React from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core'
import Header from './Header';
import Title from './Title';
import Bio from './Bio';
import Post from './Post';
// import Avatar from './Avatar';
import Footer from './Footer';
import { jsx } from '@emotion/core';

export default class Home extends React.Component{
          
    render(){
        return(
            <div css={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh', 
                maxWidth:'42em', 
                marginLeft:'auto',
                marginRight:'auto',
            }}>
                <Global
      styles={css`
        * {
            @import url('https://fonts.googleapis.com/css?family=Playfair+Display:900|Roboto&display=swap');
            
            body {
                font-family: 'Roboto', sans-serif;
                color:#222222;
                margin:0;
                background-color:#f5f5f5;
                line-height:1.5em;

            }
            h1,h2,h3 {
                font-family: 'Playfair Display', serif;
                font-weight:900;
            }
            h1{
                color:#222222;
            }
            h2,h3{
                color:#3548b6;
            }
        }
      `}
        />
                <div css={{
                    flex: '1 0 auto',
                    padding: '2.6em  1.3em', 
                }}>
                    <Header>
                        <Title title="quote dev unquote"/>
                    </Header>
                    <aside css={{
                        display:'flex',
                        alignItems:'center',
                    }}>
                        <Bio text={
                            `Esse blog surgiu como uma forma de me ajudar
                            a estudar e praticar conceitos de desenvolvimento web.`
                        }/>
                    </aside>
                <Post text={`
                     O ruim de construir um blog é que depois você precisa escrever nele! 
                     Eu finalmente consegui colocar o blog no ar, mas ainda não tenho um 
                     primeiro texto oficial para ele, então por enquanto é isso aqui que temos. 
                 `
                }/>
                </div>
                <Footer/>
            </div>
        );
    }
}
