import { Component, inject } from '@angular/core';
import { Produto } from '../models/produto';
import { Produtoservice } from '../produtoservice';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Cestaservice } from '../cestaservice';

@Component({
  selector: 'app-lancamentos',
  imports: [CommonModule],
  templateUrl: './lancamentos.html',
  styleUrl: './lancamentos.css',
})
export class Lancamentos {
  private produtoService = inject(Produtoservice);
  private router = inject(Router);
  private cestaService = inject(Cestaservice);
  
  listaLancamentos: Produto[] = this.produtoService.getListaLancamentos()

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
