import { Component, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { Cestaservice } from './cestaservice';
import { Clienteservice } from './clienteservice';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  cestaService = inject(Cestaservice);
  clienteService = inject(Clienteservice);
  protected readonly title = signal('livrarialibris');

  private router = inject(Router);

  pesquisar(termo: string): void {
    const busca = termo.trim();
    if (busca) {
      this.router.navigate(['/resultado-busca', busca]);
    }
  }

  primeiroNome(nome: string | undefined): string {
    return (nome ?? '').trim().split(' ')[0];
  }

  sair(): void {
    this.clienteService.sair();
    this.router.navigate(['/telainicial']);
  }
}