import React from 'react';

export class Carrinho extends React.Component {
    render() {
        
        const listaCarrinho = this.props.Produtos

        let precos = 0

        listaCarrinho.forEach(prod => {

            precos += prod.value

        })

        return (
            <div>
                <h1>Carrinho</h1>
                {listaCarrinho.map(prod => {
                    return(
                        <div>
                            <p>1 x {prod.name} <button onClick={this.props.Remover} value={prod.id}>Remover</button></p>
                            <hr/>
                        </div>
                    )
                })}
                <p>Total: R${precos}</p>     
            </div>
        )
    }
}