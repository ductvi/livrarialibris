# 📚 Livraria Libris — Frontend

Interface web de e-commerce da **Livraria Libris**, desenvolvida em **Angular** com **TypeScript**, **Bootstrap** e CSS customizado. O projeto permite navegar por categorias literárias, pesquisar livros por título, autor ou palavras-chave, gerenciar o carrinho de compras, realizar cadastro/login de clientes e acompanhar o histórico de pedidos.

---

## ✨ Funcionalidades

- **Vitrine & Catálogo por Categorias**: Exibição de livros em destaque na página inicial e filtragem por gêneros (*Lançamentos, Clássicos, Juvenil, Ficção, Autoajuda e Filosofia*).
- **Busca Dinâmica**: Pesquisa em tempo real por título, autor, sinopse ou palavras-chave com atualização reativa via Signals e RxJS.
- **Detalhes do Produto**: Visualização completa das informações do livro (sinopse, ISBN, número de páginas, tipo de capa, tamanho da letra e preços promocionais com cálculo automático de desconto).
- **Cesta de Compras**: Adição e remoção de livros, controle de quantidades, contador dinâmico no cabeçalho e persistência no navegador.
- **Autenticação de Clientes**: Cadastro, login e logout com persistência de sessão via `localStorage`.
- **Histórico de Pedidos (`Meus Pedidos`)**: Consulta de pedidos realizados pelo cliente logado, exibindo data, modalidade de entrega, observações, itens adquiridos e valor total.

---

## 🛠️ Tecnologias Utilizadas

- **Angular** (Standalone Components, Signals, Reactive Routing)
- **TypeScript**
- **RxJS** (`switchMap`, `forkJoin`, `combineLatest`)
- **HTML5 & CSS3** (Variáveis CSS, Flexbox, Grid e responsividade)
- **Bootstrap 5** & **Bootstrap Icons**

---

## 📂 Estrutura Principal do Projeto

```text
src/
└── app/
    ├── models/              # Interfaces TypeScript (Produto, Cliente, Pedido, ItemPedido)
    ├── meus-pedidos/        # Página de histórico de pedidos do cliente
    ├── resultado-busca/     # Página de resultados da barra de pesquisa
    ├── cestaservice.ts      # Gerenciamento do carrinho de compras
    ├── clienteservice.ts    # Autenticação e operações de cliente
    ├── pedidoservice.ts     # Registro e consulta de pedidos e itens
    ├── produtoservice.ts    # Consulta de vitrine, categorias e busca de livros
    ├── app.routes.ts        # Configuração das rotas da aplicação
    └── app.ts / app.html    # Layout principal (Header, Navbar, RouterOutlet e Footer)