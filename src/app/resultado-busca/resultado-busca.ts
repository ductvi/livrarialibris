import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, map, of, switchMap, tap } from 'rxjs';
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

  termo = signal<string>('');
  lista = signal<Produto[]>([]);
  carregando = signal<boolean>(false);

  ngOnInit(): void {
    combineLatest([this.route.paramMap, this.route.queryParamMap])
      .pipe(
        map(([params, queryParams]) =>
          (
            params.get('termo') ||
            queryParams.get('termo') ||
            queryParams.get('q') ||
            ''
          ).trim()
        ),
        tap((termoBusca) => {
          this.termo.set(termoBusca);
          if (termoBusca) {
            this.carregando.set(true);
          } else {
            this.lista.set([]);
            this.carregando.set(false);
          }
        }),
        switchMap((termoBusca) =>
          termoBusca ? this.produtoService.buscarProdutos(termoBusca) : of([])
        )
      )
      .subscribe({
        next: (dados) => {
          this.lista.set(dados);
          this.carregando.set(false);
        },
        error: (erro) => {
          console.error('Erro ao pesquisar produtos:', erro);
          this.lista.set([]);
          this.carregando.set(false);
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