import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable, switchMap, throwError } from 'rxjs';
import { Pedido } from './models/pedido';
import { ItemPedido } from './models/item-pedido';

@Injectable({
  providedIn: 'root',
})
export class Pedidoservice {
  private http = inject(HttpClient);

  private readonly apiUrl = 'http://localhost:8081/api/pedido';
  private readonly apiUrlItens = 'http://localhost:8081/api/itempedido';

  gravar(pedido: Pedido): Observable<number> {
    return this.http
      .post(this.apiUrl, pedido, { responseType: 'text' })
      .pipe(map((texto) => Number(texto.match(/(\d+)\s*$/)?.[1]) || 0));
  }

  gravarItem(item: ItemPedido): Observable<string> {
    return this.http.post(this.apiUrlItens, item, { responseType: 'text' });
  }

  registrarPedido(
    pedido: Pedido,
    itens: Omit<ItemPedido, 'codigoPedido'>[]
  ): Observable<number> {
    return this.gravar(pedido).pipe(
      switchMap((codigoPedido) => {
        if (!codigoPedido) {
          return throwError(() => new Error('A API não devolveu o código do pedido'));
        }
        return forkJoin(
          itens.map((item) => this.gravarItem({ ...item, codigoPedido }))
        ).pipe(map(() => codigoPedido));
      })
    );
  }

  // Consome GET /api/pedido/cliente/{codigo}
  listarPorCliente(codigoCliente: number): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.apiUrl}/cliente/${codigoCliente}`);
  }

  // Consome GET /api/itempedido/pedido/{codigo} (já existe no seu ItemPedidoController)
  listarItensPorPedido(codigoPedido: number): Observable<ItemPedido[]> {
    return this.http.get<ItemPedido[]>(`${this.apiUrlItens}/pedido/${codigoPedido}`);
  }
}