import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../models/produto';
import { Produtoservice } from '../produtoservice';
import { Cestaservice } from '../cestaservice';

@Component({
  selector: 'app-detalhe-produto',
  imports: [CommonModule],
  templateUrl: './detalhe-produto.html',
  styleUrl: './detalhe-produto.css',
})
export class DetalheProduto implements OnInit {
  private route = inject(ActivatedRoute);
  private produtoService = inject(Produtoservice);
  private cestaService = inject(Cestaservice);
  private cdr = inject(ChangeDetectorRef);

  produto?: Produto;
  imagemAtiva?: string;
  carregando: boolean = true;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const codigo = Number(params.get('codigo') || params.get('id'));

      if (codigo) {
        this.carregando = true;
        this.produtoService.getProdutoPorCodigo(codigo).subscribe({
          next: (dados) => {
            this.produto = dados;
            this.imagemAtiva = dados?.imagem;
            this.carregando = false;
            this.cdr.detectChanges();
          },
          error: (erro) => {
            console.error('Erro ao buscar detalhes do produto:', erro);
            this.produto = undefined;
            this.carregando = false;
            this.cdr.detectChanges();
          },
        });
      } else {
        this.carregando = false;
        this.cdr.detectChanges();
      }
    });
  }

  calcularDesconto(valor: number, valorPromo: number): number {
    return this.produtoService.calcularDesconto(valor, valorPromo);
  }

  adicionarAoCarrinho(produto: Produto): void {
    this.cestaService.adicionarProdutoCarrinho(produto);
  }
}