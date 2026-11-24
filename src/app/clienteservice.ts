import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Cliente } from './models/cliente';

@Injectable({
  providedIn: 'root',
})
export class Clienteservice {
  private http = inject(HttpClient);

  private readonly apiUrl = 'http://localhost:8081/api/cliente';
  private readonly chave = 'libris.cliente';

  // Cliente logado (sem a senha). null = ninguém logado.
  clienteLogado: Cliente | null = this.carregar();

  get estaLogado(): boolean {
    return this.clienteLogado !== null;
  }

  // POST /api/cliente  (a API responde texto puro, não JSON)
  cadastrar(cliente: Cliente): Observable<string> {
    return this.http.post(this.apiUrl, cliente, { responseType: 'text' });
  }

  // POST /api/cliente/login
  // Se e-mail/senha estiverem errados a API NÃO dá erro: devolve um Cliente vazio (codigo 0).
  login(email: string, senha: string): Observable<boolean> {
    return this.http.post<Cliente>(`${this.apiUrl}/login`, { email, senha }).pipe(
      map((resposta) => {
        if (!resposta || !resposta.codigo) {
          return false;
        }
        // Guardamos só o necessário: a resposta da API traz a senha junto
        this.clienteLogado = {
          codigo: resposta.codigo,
          nome: resposta.nome,
          email: resposta.email,
        };
        localStorage.setItem(this.chave, JSON.stringify(this.clienteLogado));
        return true;
      })
    );
  }

  sair(): void {
    this.clienteLogado = null;
    localStorage.removeItem(this.chave);
  }

  private carregar(): Cliente | null {
    const salvo = localStorage.getItem(this.chave);
    return salvo ? JSON.parse(salvo) : null;
  }
}