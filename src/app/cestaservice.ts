import { Injectable } from '@angular/core';
import { ItemCesta } from './models/item-cesta';
import { Produto } from './models/produto';

@Injectable({
  providedIn: 'root',
})

export class Cestaservice {

  listaCesta: ItemCesta[] = []

  adicionarProdutoCarrinho(produto: Produto){
    const existeNoCarrinho = this.listaCesta.find(item => item.produto.codigo === produto.codigo)
  
    if(existeNoCarrinho){
      if(existeNoCarrinho.quantidadeNoCarrinho < produto.quantidade){
        existeNoCarrinho.quantidadeNoCarrinho += 1;
      }
    } else {
      this.listaCesta.push(new ItemCesta(produto, 1));
    }
  }

  calcularTotal(){
    const total = this.listaCesta.reduce((acumulador, item) => {return acumulador + item.calcularSubTotal()}, 0)
    return total
  }

  contarItens(): number {
  return this.listaCesta.reduce((total, item) => total + item.quantidadeNoCarrinho, 0);
  }

  removerProduto(codigo: number): void {
  this.listaCesta = this.listaCesta.filter(item => item.produto.codigo !== codigo);
  }

  diminuirQuantidade(codigo: number): void {
    const item = this.listaCesta.find(i => i.produto.codigo === codigo);
    if (item) {
      if (item.quantidadeNoCarrinho > 1) {
        item.quantidadeNoCarrinho -= 1;
      } else {
        this.removerProduto(codigo);
      }
    }
  }

  calcularSubtotalCheio(): number {
  return this.listaCesta.reduce((total, item) => total + (item.produto.valor * item.quantidadeNoCarrinho), 0);
  }

  calcularDesconto(): number {
    return this.calcularSubtotalCheio() - this.calcularTotal();
  }

  limparCarrinho(): void {
    this.listaCesta = [];
  }
}
