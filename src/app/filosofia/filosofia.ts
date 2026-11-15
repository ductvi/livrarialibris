import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../models/produto';
import { Produtoservice } from '../produtoservice';
import { Cestaservice } from '../cestaservice';

@Component({
  selector: 'app-filosofia',
  imports: [CommonModule],
  templateUrl: './filosofia.html',
  styleUrl: './filosofia.css',
})
export class Filosofia implements OnInit {
  private produtoService = inject(Produtoservice);
  private cestaService = inject(Cestaservice);
  private cdr = inject(ChangeDetectorRef);
  listaFilosofia: Produto[] = [];

  ngOnInit(): void {
    this.produtoService.getListaFilosofia().subscribe({
      next: (dados) => {
        this.listaFilosofia = dados;
        this.cdr.detectChanges();
      },
      error: (erro) => console.error('Erro ao carregar Filosofia:', erro),
    });
  }

  calcularDesconto(valor: number, valorPromo: number): number {
    return this.produtoService.calcularDesconto(valor, valorPromo);
  }

  verDetalhes(codigo: number): void {
    this.produtoService.verDetalhes(codigo);
  }

  adicionarAoCarrinho(produto: Produto): void {
    this.cestaService.adicionarProdutoCarrinho(produto);
  }
}