import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../models/produto';
import { Produtoservice } from '../produtoservice';
import { Cestaservice } from '../cestaservice';

@Component({
  selector: 'app-juvenil',
  imports: [CommonModule],
  templateUrl: './juvenil.html',
  styleUrl: './juvenil.css',
})
export class Juvenil implements OnInit {
  private produtoService = inject(Produtoservice);
  private cestaService = inject(Cestaservice);
  private cdr = inject(ChangeDetectorRef);
  listaJuvenis: Produto[] = [];

  ngOnInit(): void {
    this.produtoService.getListaJuvenis().subscribe({
      next: (dados) => {
        this.listaJuvenis = dados;
        this.cdr.detectChanges();
      },
      error: (erro) => console.error('Erro ao carregar Juvenil:', erro),
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