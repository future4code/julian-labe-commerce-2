import React from "react";

export class MenuLateral extends React.Component {
  render() {
    return (
      <div>
        <h1>Filtros</h1>

            <div className="valor-minimo">
                <label>Valor Mínimo:</label><br/>
                <input type="number" name="valorMax" value=""></input>
            </div>

            <div className="valor-maximo">
                <label>Valor Máximo:</label><br/>
                <input type="number" name="valorMin" value=""></input>
            </div>

            <div className="buscar-produto">
                <label>Buscar Produto:</label><br/>
                <input type="text" name="buscar" value=""></input>
            </div>

      </div>
    );
  }
}
