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
                  <NumericInput onChange={this.props.onChangeInputValorMax} type="number" min="0" name="valorMin" value={this.props.InputMax}></NumericInput>
              </div>

              <div>
                  <label>Teste:</label><br/>
                  <input onChange={this.props.onChangeInputValorMax} type="number" value={this.props.InputMax}></input>
              </div>

              <div className="buscar-produto">
                  <label>Buscar Produto:</label><br/>
                  <input type="text" name="buscar" value=""></input>
              </div>

        </div>
      );
    }
}
