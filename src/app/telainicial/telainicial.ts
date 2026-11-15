import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../models/produto';
import { Produtoservice } from '../produtoservice';
import { Cestaservice } from '../cestaservice';

@Component({
  selector: 'app-telainicial',
  imports: [CommonModule],
  templateUrl: './telainicial.html',
  styleUrl: './telainicial.css',
})
export class Telainicial implements OnInit {
  private produtoService = inject(Produtoservice);
  private cestaService = inject(Cestaservice);
  private cdr = inject(ChangeDetectorRef);

  lista: Produto[] = [];
  listaMaisVendidos: Produto[] = [];

  ngOnInit(): void {
    this.produtoService.getLista().subscribe({
      next: (dados) => {
        this.lista = dados;
        this.cdr.detectChanges();
      },
      error: (erro) => {
        console.error('ERRO ao buscar novidades:', erro);
      }
    });

    this.produtoService.getListaMaisVendidos().subscribe({
      next: (dados) => {
        this.listaMaisVendidos = dados;
        this.cdr.detectChanges();
      },
      error: (erro) => {
        console.error('ERRO ao buscar mais vendidos:', erro);
      }
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