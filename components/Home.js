/** @jsx jsx */
import React from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core'
import Header from './Header';
import Title from './Title';
import Bio from './Bio';
import Post from './Post';
import Avatar from './Avatar';
import Footer from './Footer';
import { jsx } from '@emotion/core';

export default class Home extends React.Component{
    render(){
        const Container = styled.div`
            margin-left:auto; 
            margin-right:auto;
            padding: 2.625rem 1.3125rem;
            max-width:42em;
            backgroundColor:#ff00ff;
        `
        
        return(
            <div>
            <Global
      styles={css`
        * {
            @import url('https://fonts.googleapis.com/css?family=Playfair+Display:900|Roboto&display=swap');
            body {
                font-family: 'Roboto', sans-serif;
                color:#222222;
            }
            h1,h2,h3 {
                font-family: 'Playfair Display', serif;
                font-weight:900;
            }
            h1{
                color:#222222;
            }
            h2,h3{
                color:#364DC3;
            }
        }
      `}
        />
            <Container>
                <div css={{
                    backgroundColor:'#ff00ff',
                    height:'100%',
                    width:'100%'
                }}>

                </div>
                <Header>
                    <Title title="quote dev unquote"/>

                    <Bio text={
                        `Esse blog surgiu como uma forma de me ajudar
                        a estudar e praticar conceitos de desenvolvimento web.`
                    }/>
                </Header>
                <Post text={`
                    O ruim de construir um blog é que depois você precisa escrever nele! 
                    Eu finalmente consegui colocar o blog no ar, mas ainda não tenho um 
                    primeiro texto oficial para ele, então por enquanto é isso aqui que temos. 
                `
                }/>
                <Footer/>
            </Container>
            </div>
        );
    }
}
