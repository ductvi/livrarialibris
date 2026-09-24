import { Component, inject } from '@angular/core';
import { Produtoservice } from '../produtoservice';
import { Produto } from '../models/produto';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Cestaservice } from '../cestaservice';
@Component({
  selector: 'app-classicos',
  imports: [CommonModule],
  templateUrl: './classicos.html',
  styleUrl: './classicos.css',
})
export class Classicos {
  private produtoService = inject(Produtoservice);
  private router = inject(Router);
  private cestaService = inject(Cestaservice)
  
  listaClassicos: Produto[] = this.produtoService.getListaClassicos()

  calcularDesconto(valor: number, valorPromo: number): number {
    return this.produtoService.calcularDesconto(valor, valorPromo);
  }

  verDetalhes(codigo: number): void {
    this.router.navigate(['/detalheproduto', codigo]);
  }

  adicionarAoCarrinho(produto:Produto){
    this.cestaService.adicionarProdutoCarrinho(produto)
  }
}
