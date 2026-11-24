import { Component, inject, signal } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Cestaservice } from '../cestaservice';
import { Clienteservice } from '../clienteservice';
import { Pedidoservice } from '../pedidoservice';

@Component({
  selector: 'app-cesta',
  imports: [CommonModule, RouterLink],
  templateUrl: './cesta.html',
  styleUrl: './cesta.css',
})
export class Cesta {
  cestaService = inject(Cestaservice);
  private clienteService = inject(Clienteservice);
  private pedidoService = inject(Pedidoservice);
  private router = inject(Router);

  // Signals: fazem a tela atualizar quando a resposta da API chega
  finalizando = signal(false);
  mensagem = signal('');

  finalizarCompra() {
    const codigoCliente = this.clienteService.clienteLogado?.codigo;

    // Sem login não dá pra montar o pedido: vai pro login e volta pra cesta
    if (!codigoCliente) {
      this.router.navigate(['/login'], { queryParams: { retorno: '/cesta' } });
      return;
    }

    // Evita pedido duplicado por clique repetido
    if (this.finalizando()) {
      return;
    }

    this.finalizando.set(true);
    this.mensagem.set('');

    const itens = this.cestaService.listaCesta.map((item) => ({
      codigoProduto: item.produto.codigo,
      quantidade: item.quantidadeNoCarrinho,
      // preço unitário já considerando promoção (subtotal dividido pela quantidade)
      valor: Math.round((item.calcularSubTotal() / item.quantidadeNoCarrinho) * 100) / 100,
    }));

    this.pedidoService
      .registrarPedido(
        {
          valorTotal: Math.round(this.cestaService.calcularTotal() * 100) / 100,
          entrega: '', // confirmar com o professor o que a API espera aqui
          obs: '',
          dataPedido: formatDate(new Date(), 'yyyy-MM-dd', 'en-US'),
          codigoCliente: codigoCliente,
        },
        itens
      )
      .subscribe({
        next: (codigoPedido) => {
          this.finalizando.set(false);
          this.cestaService.limparCarrinho();
          this.mensagem.set(`Pedido nº ${codigoPedido} registrado com sucesso!`);
        },
        error: () => {
          this.finalizando.set(false);
          this.mensagem.set('Não foi possível registrar o pedido. Tente novamente.');
        },
      });
  }
}