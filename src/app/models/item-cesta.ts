import { Produto } from "./produto";

export class ItemCesta {
    produto: Produto
    quantidadeNoCarrinho: number

    constructor(produto: Produto, quantidade: number){
        this.produto = produto
        this.quantidadeNoCarrinho = quantidade
    }

    calcularSubTotal(){
        let subtotal: number
        if (this.produto.valorPromo === 0 || this.produto.valorPromo > this.produto.valor) {
            subtotal = this.produto.valor * this.quantidadeNoCarrinho
        } else {
            subtotal = this.produto.valorPromo * this.quantidadeNoCarrinho
        }
        return subtotal
    }
    }
