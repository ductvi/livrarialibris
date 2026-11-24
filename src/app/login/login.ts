import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Clienteservice } from '../clienteservice';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private clienteService = inject(Clienteservice);

  // Para onde voltar depois do login (a cesta manda ?retorno=/cesta)
  private retorno = inject(ActivatedRoute).snapshot.queryParamMap.get('retorno') ?? '/telainicial';

  mostrarSenha: boolean = false;

  // Signal: faz a mensagem aparecer quando a resposta da API chega
  erro = signal('');

  form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', Validators.required],
  });

  toggleSenha() {
    this.mostrarSenha = !this.mostrarSenha;
  }

  entrar() {
    this.erro.set('');

    if (this.form.invalid) {
      this.erro.set('Preencha e-mail e senha corretamente.');
      return;
    }

    const { email, senha } = this.form.getRawValue();

    this.clienteService.login(email, senha).subscribe({
      next: (ok) => {
        if (ok) {
          this.router.navigateByUrl(this.retorno);
        } else {
          this.erro.set('E-mail ou senha incorretos.');
        }
      },
      error: () => {
        this.erro.set('Não foi possível acessar o servidor. Tente novamente.');
      },
    });
  }
}