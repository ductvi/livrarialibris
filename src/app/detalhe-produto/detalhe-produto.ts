import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../models/produto';
import { Produtoservice } from '../produtoservice';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalhe-produto.html',
  styleUrl: './detalhe-produto.css'
})
export class DetalheProduto implements OnInit {
  private route = inject(ActivatedRoute);
  private produtoService = inject(Produtoservice);

  produto: Produto | undefined;
  imagemAtiva: string = '';

  ngOnInit(): void {
    const codigo = Number(this.route.snapshot.paramMap.get('codigo'));
    this.produto = this.produtoService.getProdutoPorCodigo(codigo);

    if (this.produto) {
      this.imagemAtiva = this.produto.imagem;
    }
  }

  calcularDesconto(valor: number, valorPromo: number): number {
    return this.produtoService.calcularDesconto(valor, valorPromo);
  }
}