import React from "react";
import NumericInput from 'react-numeric-input';

export class MenuLateral extends React.Component {
    
  
    render() {
      return (
        <div>
          <h1>Filtros</h1>

              <div className="valor-minimo">
                  <label>Valor Mínimo:</label><br/>
                  <NumericInput type="number" min="0" name="valorMax" value=""></NumericInput>
              </div>

              <div className="valor-maximo">
                  <label>Valor Máximo:</label><br/>
                  <NumericInput type="number" min="0" name="valorMin" value=""></NumericInput>
              </div>

              <div className="buscar-produto">
                  <label>Buscar Produto:</label><br/>
                  <input type="text" name="buscar" value=""></input>
              </div>

        </div>
      );
    }
}
