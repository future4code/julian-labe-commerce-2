import React from 'react';
import './App.css';
import { MenuLateral } from "./components/Menu";
import { ProdutoCard } from "./components/ProdutoCard";

import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: 20vw 80vw;
  width: 100vw;
  min-height: 100vh;
`

const MenuContainer = styled.div`
  grid-columns: 1 span;
  padding-right: 2vw;
  padding-left: 2vw;
  heigth: 100%;
  border-right: 1px black solid;
`

const MainContainer = styled.div`
  grid-columns: 1 span;
  display: grid;
  grid-template-rows: 10vh 1fr;
  padding: 2vw;

`

const FiltroPreco = styled.div`
  grid-rows: 1 span;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px black solid;
  padding-right: 2vw;
  padding-left: 2vw;
`

const SelecFiltroPreco = styled.select`
  height: 50%;
  
`

const ProdutoContainer = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr 1fr 1fr;
 gap: 20px;
 width: 75vw;
 margin-top: 2vw;
`



class App extends React.Component {
  state = {
    arrayProdutos: [
      {
        id: 1,
        name: "Produto 1",
        value: 10000.0,
        imageUrl: "https://picsum.photos/201/200",
      },
      {
        id: 2,
        name: "Produto 2",
        value: 1000.0,
        imageUrl: "https://picsum.photos/202/200",
      },
      {
        id: 3,
        name: "Produto 3",
        value: 100.0,
        imageUrl: "https://picsum.photos/203/200",
      },
      {
        id: 4,
        name: "Produto 4",
        value: 10.0,
        imageUrl: "https://picsum.photos/204/200",
      },
      {
        id: 5,
        name: "Produto 5",
        value: 50000.0,
        imageUrl: "https://picsum.photos/205/200",
      },
      {
        id: 6,
        name: "Produto 6",
        value: 5000.0,
        imageUrl: "https://picsum.photos/206/200",
      },
      {
        id: 7,
        name: "Produto 7",
        value: 500.0,
        imageUrl: "https://picsum.photos/207/200",
      },
      {
        id: 8,
        name: "Produto 8",
        value: 50.0,
        imageUrl: "https://picsum.photos/208/200",
      }
    ],
    filtroPrecos:'',
    InputValorMaximo: 999999,
    InputValorMinimo: 0,
  }

    onChangeValorMinimo = (event) => {
      console.log("Entrou no onChange Valor Minimo")
    }

    onChangeValorMaximo = (event) => {
      this.setState({
        InputValorMaximo: event.target.value
      })
      console.log(this.InputValorMaximo)
      console.log("Entrou no onChange Valor Maximo")
    }

    onChangeFiltroPreco = (event) => {
      this.setState({
        InputValorMaximo: event.target.value
      });
      console.log("Entrou no onChange Filtro preco")
    }

    componentDidUpdate() {
      console.log("O did update foi executado")
    };

  render() {

    const listaProdutos = this.state.arrayProdutos
    
    return (
      <Container>
        <MenuContainer>
          <MenuLateral onChangeInputValorMax={this.onChangeValorMaximo} InputMax={this.state.InputValorMaximo}/>
        </MenuContainer>

        <MainContainer>
          <FiltroPreco >
            <h3>Quantidade de produtos: {this.state.arrayProdutos.length}</h3>
            <SelecFiltroPreco onChange={this.onChangeFiltroPreco} >
              <option value="crescente">Preço: crescente</option>
              <option value="decrescente">Preço: decrescente</option>
            </SelecFiltroPreco>
          </FiltroPreco>

          <ProdutoContainer>
          {listaProdutos.map(prod => {
            return (
              <ProdutoCard
                Url={prod.imageUrl}
                Nome={prod.name}
                Preco={prod.value}

              >
              </ProdutoCard>
            )
          })}
          </ProdutoContainer>
        </MainContainer>
      </Container>
    );
  }

}

export default App;
