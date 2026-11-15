import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Produto } from '../models/produto';
import { Produtoservice } from '../produtoservice';
import { Cestaservice } from '../cestaservice';

@Component({
  selector: 'app-resultado-busca',
  imports: [CommonModule],
  templateUrl: './resultado-busca.html',
  styleUrl: './resultado-busca.css',
})
export class ResultadoBusca implements OnInit {
  private route = inject(ActivatedRoute);
  private produtoService = inject(Produtoservice);
  private cestaService = inject(Cestaservice);

  termo: string = '';
  lista: Produto[] = [];
  carregando: boolean = false;

  ngOnInit(): void {
    combineLatest([this.route.paramMap, this.route.queryParamMap]).subscribe(
      ([params, queryParams]) => {
        const termoBusca =
          params.get('termo') ||
          queryParams.get('termo') ||
          queryParams.get('q') ||
          '';

        this.termo = termoBusca.trim();

        if (this.termo) {
          this.buscar(this.termo);
        } else {
          this.lista = [];
        }
      }
    );
  }

  private buscar(termo: string): void {
    this.carregando = true;
    this.produtoService.buscarProdutos(termo).subscribe({
      next: (dados) => {
        this.lista = dados;
        this.carregando = false;
      },
      error: (erro) => {
        console.error('Erro ao pesquisar produtos:', erro);
        this.lista = [];
        this.carregando = false;
      },
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