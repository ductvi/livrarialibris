import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { forkJoin, map, of, switchMap } from 'rxjs';
import { Clienteservice } from '../clienteservice';
import { Pedidoservice } from '../pedidoservice';
import { Pedido } from '../models/pedido';
import { ItemPedido } from '../models/item-pedido';

export interface PedidoComItens extends Pedido {
  itens: ItemPedido[];
}

@Component({
  selector: 'app-meus-pedidos',
  imports: [CommonModule, RouterLink],
  templateUrl: './meus-pedidos.html',
  styleUrl: './meus-pedidos.css',
})
export class MeusPedidos implements OnInit {
  private clienteService = inject(Clienteservice);
  private pedidoService = inject(Pedidoservice);
  private router = inject(Router);

  pedidos = signal<PedidoComItens[]>([]);
  carregando = signal<boolean>(true);
  erro = signal<string | null>(null);

  ngOnInit(): void {
    const cliente = this.clienteService.clienteLogado;

    if (!cliente || !cliente.codigo) {
      this.router.navigate(['/cadastro']);
      return;
    }

    this.pedidoService
      .listarPorCliente(cliente.codigo)
      .pipe(
        switchMap((listaPedidos) => {
          if (listaPedidos.length === 0) {
            return of([]);
          }
          const requisicoes = listaPedidos.map((pedido) =>
            this.pedidoService
              .listarItensPorPedido(pedido.codigoPedido!)
              .pipe(map((itens) => ({ ...pedido, itens })))
          );
          return forkJoin(requisicoes);
        })
      )
      .subscribe({
        next: (pedidosCompletos) => {
          const ordenados = pedidosCompletos.sort(
            (a, b) => (b.codigoPedido ?? 0) - (a.codigoPedido ?? 0)
          );
          this.pedidos.set(ordenados);
          this.carregando.set(false);
        },
        error: () => {
          this.erro.set('Não foi possível carregar seus pedidos no momento.');
          this.carregando.set(false);
        },
      });
  }
}