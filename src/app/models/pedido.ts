export interface Pedido {
  codigoPedido?: number;
  valorTotal: number;
  entrega: string;
  obs: string;
  dataPedido: string; // formato yyyy-MM-dd
  codigoCliente: number;
}