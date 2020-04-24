import React from 'react';
import './App.css';
import { MenuLateral } from "./components/Menu";
import { ProdutoCard } from "./components/ProdutoCard";
import { Carrinho } from "./components/Carrinho";

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
    ordemPrecos:'crescente',
    InputValorMaximo: '',
    InputValorMinimo: '',
    InputBuscar: '',
  }

    onChangeValorMinimo = (event) => {
      this.setState({
        InputValorMinimo: event.target.value
      })
      
      
    }

    onChangeValorMaximo = (event) => {
      this.setState({
        InputValorMaximo: event.target.value
      })
      
    }

    onChangeBuscar = (event) => {
      this.setState({
        InputBuscar: event.target.value
      })
    }

    onChangeOrdemPreco = (event) => {
      this.setState({
        ordemPrecos: event.target.value
      })
    }

    componentDidUpdate() {
      console.log("O did update foi executado")
    };

  render() {

    const listaProdutos = this.state.arrayProdutos
    
    const listaFiltradaMin = listaProdutos.filter(prod => {
      if (this.state.InputValorMinimo !== '') {
        return prod.value >= this.state.InputValorMinimo
      } else {
        return true
      }
    })
    
    const listaFiltradaMax = listaProdutos.filter(prod => {
      if (this.state.InputValorMaximo !== '') {
        return prod.value <= this.state.InputValorMaximo
      } else {
        return true
      }
    })

    let listaFiltradaPreco = listaFiltradaMax.filter(x => listaFiltradaMin.includes(x));
    
    const listaBusca = listaProdutos.filter(prod => {
      if (this.state.InputBuscar !== '') {
        return prod.name === this.state.InputBuscar
      } else {
        return true
      }
    })

    let listaFiltrada = listaBusca.filter(x => listaFiltradaPreco.includes(x));

    let listaOrdenada = listaFiltrada

    if (this.state.ordemPrecos == 'crescente') {
      listaOrdenada = listaOrdenada.sort((a, b) => parseFloat(a.value) - parseFloat(b.value));
    } else {
      listaOrdenada = listaOrdenada.sort((a, b) => parseFloat(b.value) - parseFloat(a.value));
    }

    return (
      
      <Container>
        {console.log("Valor máximo: ", this.state.InputValorMaximo)}
        {console.log("Valor mínimo: ", this.state.InputValorMinimo)}
        {console.log("Buscar produto: ", this.state.InputBuscar)}
        {console.log(this.state.ordemPrecos)}
        <MenuContainer>
          <MenuLateral 
          onChangeInputValorMax={this.onChangeValorMaximo} 
          InputMax={this.state.InputValorMaximo}
          onChangeInputValorMin={this.onChangeValorMinimo}
          InputMin={this.state.InputValorMin}
          onChangeInputBuscar={this.onChangeBuscar}
          Buscar={this.state.InputBuscar}/>
        </MenuContainer>

        <MainContainer>
          <FiltroPreco >
            <h3>Quantidade de produtos: {this.state.arrayProdutos.length}</h3>
            <SelecFiltroPreco value={this.state.ordemPrecos} onChange={this.onChangeOrdemPreco} >
              <option value="crescente">Preço: crescente</option>
              <option value="decrescente">Preço: decrescente</option>
            </SelecFiltroPreco>
          </FiltroPreco>

          <ProdutoContainer>
          {listaOrdenada.map(prod => {
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

          <Carrinho />
        </MainContainer>
      </Container>
    );
  }

}

export default App;
