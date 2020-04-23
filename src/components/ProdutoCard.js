import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
box-sizing: border-box;
border: 1px solid black;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`

const BotaoAdicionar = styled.button`
background-color: black;
color: white;
width: 100%;
height: 40px;
border-style: none;
`


export class ProdutoCard extends React.Component {
    /*state = {
        id: this.props.id,
        name: this.props.name,
        value: this.props.value,
        imageUrl: this.props.imageUrl
    }*/
    
  render() {
    return (
      <CardContainer>
        <img src={this.props.Url} />
        <p>Nome: {this.props.Nome}</p>
        <p>Preço: R${this.props.Preco}</p>
        <BotaoAdicionar>Adicionar ao carrinho</BotaoAdicionar>
      </CardContainer>
    );
  }  
}