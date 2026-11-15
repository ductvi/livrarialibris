import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../models/produto';
import { Produtoservice } from '../produtoservice';
import { Cestaservice } from '../cestaservice';

@Component({
  selector: 'app-ficcao',
  imports: [CommonModule],
  templateUrl: './ficcao.html',
  styleUrl: './ficcao.css',
})
export class Ficcao implements OnInit {
  private produtoService = inject(Produtoservice);
  private cestaService = inject(Cestaservice);
  private cdr = inject(ChangeDetectorRef);

  listaFiccao: Produto[] = [];

  ngOnInit(): void {
    this.produtoService.getListaFiccao().subscribe({
      next: (dados) => {
        this.listaFiccao = dados;
        this.cdr.detectChanges();
      },
      error: (erro) => console.error('Erro ao carregar Ficção:', erro),
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