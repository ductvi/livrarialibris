export interface Cliente {
  codigo?: number;
  nome: string;
  email: string;
  telefone?: string;
  documento?: string; // CPF
  senha?: string;
  logradouro?: string;
  ativo?: number; // a query de login só encontra clientes com ativo = 1
}