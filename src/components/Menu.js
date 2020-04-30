import React from "react";
import NumericInput from 'react-numeric-input';
import styled from 'styled-components';   

export class MenuLateral extends React.Component {
  
    render() {
      return (
        <div>
          <h1>Filtros</h1>

              <div className="valor-maximo">
                  <label>Valor Máximo:</label><br/>
                  <input onChange={this.props.onChangeInputValorMax} type="number" value={this.props.InputMax}></input>
              </div>

              <div className="valor-minimo">
                  <label>Valor Mínimo:</label><br/>
                  <input onChange={this.props.onChangeInputValorMin} type="number" value={this.props.InputMin}></input>
              </div>

              <div className="buscar-produto">
                  <label>Buscar Produto:</label><br/>
                  <input onChange={this.props.onChangeInputBuscar} type="text" value={this.props.Buscar}></input>
              </div>

        </div>
      );
    }
}
