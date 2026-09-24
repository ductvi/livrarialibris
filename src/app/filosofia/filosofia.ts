import { Component, inject } from '@angular/core';
import { Produto } from '../models/produto';
import { Produtoservice } from '../produtoservice';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Cestaservice } from '../cestaservice';

@Component({
  selector: 'app-filosofia',
  imports: [CommonModule],
  templateUrl: './filosofia.html',
  styleUrl: './filosofia.css',
})
export class Filosofia {
    private produtoService = inject(Produtoservice);
    private router = inject(Router);
    private cestaService = inject(Cestaservice)
    
    listaFilosofia: Produto[] = this.produtoService.getListaFilosofia()
    
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