import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgxMaskDirective } from 'ngx-mask';
import { Clienteservice } from '../clienteservice';

@Component({
  selector: 'app-cadastro',
  imports: [ReactiveFormsModule, NgxMaskDirective, RouterLink],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private clienteService = inject(Clienteservice);

  mostrarSenha: boolean = false;
  mostrarConfirmarSenha: boolean = false;

  // Signal: faz a mensagem aparecer quando a resposta da API chega
  erro = signal('');

  form = this.fb.nonNullable.group({
    nome: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    cpf: ['', Validators.required],
    telefone: ['', Validators.required],
    senha: ['', Validators.required],
    confirmarSenha: ['', Validators.required],
  });

  toggleSenha() {
    this.mostrarSenha = !this.mostrarSenha;
  }

  toggleConfirmarSenha() {
    this.mostrarConfirmarSenha = !this.mostrarConfirmarSenha;
  }

  enviar() {
    this.erro.set('');

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.erro.set('Preencha todos os campos corretamente.');
      return;
    }

    const { nome, email, cpf, telefone, senha, confirmarSenha } = this.form.getRawValue();

    if (senha !== confirmarSenha) {
      this.erro.set('As senhas não conferem.');
      return;
    }

    this.clienteService
      .cadastrar({
        nome,
        email,
        documento: cpf,
        telefone,
        senha,
        ativo: 1, // sem isso o login nunca encontra o cliente
      })
      .subscribe({
        next: () => this.router.navigate(['/login']),
        error: () => {
          this.erro.set('Não foi possível concluir o cadastro. Tente novamente.');
        },
      });
  }
}