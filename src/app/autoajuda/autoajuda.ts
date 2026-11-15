import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../models/produto';
import { Produtoservice } from '../produtoservice';
import { Cestaservice } from '../cestaservice';

@Component({
  selector: 'app-autoajuda',
  imports: [CommonModule],
  templateUrl: './autoajuda.html',
  styleUrl: './autoajuda.css',
})
export class Autoajuda implements OnInit {
  private produtoService = inject(Produtoservice);
  private cestaService = inject(Cestaservice);
  private cdr = inject(ChangeDetectorRef);
  
  listaAutoajuda: Produto[] = [];

  ngOnInit(): void {
    this.produtoService.getListaAutoajuda().subscribe({
      next: (dados) => (
        this.listaAutoajuda = dados,
        this.cdr.detectChanges()
      ),
      error: (erro) => console.error('Erro ao carregar Autoajuda:', erro),
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