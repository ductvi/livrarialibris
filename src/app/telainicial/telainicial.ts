import { Component, inject } from '@angular/core';
import { Produto } from '../models/produto';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Produtoservice } from '../produtoservice';
import { Cestaservice } from '../cestaservice';

@Component({
  selector: 'app-telainicial',
  imports: [CommonModule],
  templateUrl: './telainicial.html',
  styleUrl: './telainicial.css',
})
export class Telainicial {
  private produtoService = inject(Produtoservice);
  private router = inject(Router);
  private cestaService = inject(Cestaservice);
  lista: Produto[] = this.produtoService.getLista();
  listaMaisVendidos: Produto[] = this.produtoService.getListaMaisVendidos();

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