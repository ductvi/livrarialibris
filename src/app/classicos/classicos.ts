import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../models/produto';
import { Produtoservice } from '../produtoservice';
import { Cestaservice } from '../cestaservice';

@Component({
  selector: 'app-classicos',
  imports: [CommonModule],
  templateUrl: './classicos.html',
  styleUrl: './classicos.css',
})
export class Classicos implements OnInit {
  private produtoService = inject(Produtoservice);
  private cestaService = inject(Cestaservice);

  listaClassicos: Produto[] = [];
  private cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.produtoService.getListaClassicos().subscribe({
      next: (dados) => (
        this.listaClassicos = dados,
        this.cdr.detectChanges()
      ),
      error: (erro) => console.error('Erro ao carregar Clássicos:', erro),
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