import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../models/produto';
import { Produtoservice } from '../produtoservice';
import { Cestaservice } from '../cestaservice';

@Component({
  selector: 'app-lancamentos',
  imports: [CommonModule],
  templateUrl: './lancamentos.html',
  styleUrl: './lancamentos.css',
})
export class Lancamentos implements OnInit {
  private produtoService = inject(Produtoservice);
  private cestaService = inject(Cestaservice);
  private cdr = inject(ChangeDetectorRef);
  listaLancamentos: Produto[] = [];

  ngOnInit(): void {
    this.produtoService.getListaLancamentos().subscribe({
      next: (dados) => {
        this.listaLancamentos = dados;
        this.cdr.detectChanges();
      },
      error: (erro) => console.error('Erro ao carregar Lançamentos:', erro),
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