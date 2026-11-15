import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Produto } from './models/produto';

@Injectable({
  providedIn: 'root',
})
export class Produtoservice {
  private router = inject(Router);
  private http = inject(HttpClient);

  private readonly apiUrl = 'http://localhost:8081/api';

  private mapearProduto(p: Produto): Produto {
    return {
      ...p,
      imagem: p.imagem ? p.imagem : `${p.codigo}.jpg`,
    };
  }

  private mapearLista(lista: Produto[]): Produto[] {
    return lista.map((p) => this.mapearProduto(p));
  }

  // GET /api/produtos
  listarTodos(): Observable<Produto[]> {
    return this.http
      .get<Produto[]>(`${this.apiUrl}/produtos`)
      .pipe(map((lista) => this.mapearLista(lista)));
  }

  // GET /api/produto/vitrine
  getLista(): Observable<Produto[]> {
    return this.http
      .get<Produto[]>(`${this.apiUrl}/produto/vitrine`)
      .pipe(
        map((lista) => this.mapearLista(lista).filter((p) => p.codigo <= 5))
      );
  }

  getListaMaisVendidos(): Observable<Produto[]> {
    return this.listarTodos().pipe(
      map((lista) => lista.filter((p) => p.codigo >= 6 && p.codigo <= 10))
    );
  }

  getListaClassicos(): Observable<Produto[]> {
    return this.listarTodos().pipe(
      map((lista) => lista.filter((p) => p.genero === 'Clássicos'))
    );
  }

  getListaJuvenis(): Observable<Produto[]> {
    return this.listarTodos().pipe(
      map((lista) => lista.filter((p) => p.genero === 'Juvenil'))
    );
  }

  getListaLancamentos(): Observable<Produto[]> {
    return this.listarTodos().pipe(
      map((lista) => lista.filter((p) => p.ano === 2026))
    );
  }

  getListaAutoajuda(): Observable<Produto[]> {
    return this.listarTodos().pipe(
      map((lista) => lista.filter((p) => p.genero === 'Autoajuda'))
    );
  }

  getListaFiccao(): Observable<Produto[]> {
    return this.listarTodos().pipe(
      map((lista) => lista.filter((p) => p.genero === 'Ficção'))
    );
  }

  getListaFilosofia(): Observable<Produto[]> {
    return this.listarTodos().pipe(
      map((lista) => lista.filter((p) => p.genero === 'Filosofia'))
    );
  }

  // GET /api/produto/{codigo}
  getProdutoPorCodigo(codigo: number): Observable<Produto | undefined> {
    return this.http
      .get<Produto>(`${this.apiUrl}/produto/${codigo}`)
      .pipe(
        map((res) => (res && res.codigo ? this.mapearProduto(res) : undefined))
      );
  }

  // GET /api/produto/busca/{termo}
  buscarProdutos(termo: string): Observable<Produto[]> {
    return this.http
      .get<Produto[]>(`${this.apiUrl}/produto/busca/${encodeURIComponent(termo)}`)
      .pipe(map((lista) => this.mapearLista(lista)));
  }

  // POST /api/produto
  cadastrarProduto(produto: Produto): Observable<string> {
    return this.http.post(`${this.apiUrl}/produto`, produto, {
      responseType: 'text',
    });
  }

  // PUT /api/produto
  alterarProduto(produto: Produto): Observable<string> {
    return this.http.put(`${this.apiUrl}/produto`, produto, {
      responseType: 'text',
    });
  }

  // DELETE /api/produto/{codigo}
  excluirProduto(codigo: number): Observable<string> {
    return this.http.delete(`${this.apiUrl}/produto/${codigo}`, {
      responseType: 'text',
    });
  }

  calcularDesconto(valor: number, valorPromo: number): number {
    if (!valorPromo || valorPromo === 0) return 0;
    return Math.round(((valor - valorPromo) / valor) * 100);
  }

  verDetalhes(codigo: number): void {
    this.router.navigate(['/detalheproduto', codigo]);
  }
  
}