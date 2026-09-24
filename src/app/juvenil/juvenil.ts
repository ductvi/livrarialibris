import { Component, inject} from '@angular/core';
import { Router } from '@angular/router';
import { Produtoservice } from '../produtoservice';
import { CommonModule } from '@angular/common';
import { Produto} from '../models/produto';
import { Cestaservice } from '../cestaservice';

@Component({
  selector: 'app-juvenil',
  imports: [CommonModule],
  templateUrl: './juvenil.html',
  styleUrl: './juvenil.css',
})
export class Juvenil {
  private produtoService = inject(Produtoservice);
  private router = inject(Router);

  listaJuvenis: Produto[] = this.produtoService.getListaJuvenis()

  calcularDesconto(valor: number, valorPromo: number): number {
    return this.produtoService.calcularDesconto(valor, valorPromo);
  }

  verDetalhes(codigo: number): void {
    this.router.navigate(['/detalheproduto', codigo]);
  }

  private cestaService = inject(Cestaservice);
  
  adicionarAoCarrinho(produto:Produto){
    this.cestaService.adicionarProdutoCarrinho(produto)
  }

}
