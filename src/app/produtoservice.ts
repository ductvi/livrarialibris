import { inject, Injectable } from '@angular/core';
import { Produto } from './models/produto';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Produtoservice {

  private router = inject(Router);
  
  private lista: Produto[] = [
      {
    codigo: 1,
    nome: "A Odisséia",
    autor: "Homero",
    imagem: "1.jpg",
    valor: 60.00,
    valorPromo: 45.00,
    ano: 2022,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Clássicos",
    paginas: 448,
    isbn: "9788538078305",
    sinopse: "Após dez anos lutando na Guerra de Troia, Odisseu parte para retornar a Ítaca, onde sua esposa, Penélope, e seu filho, Telêmaco, o aguardam. Porém, a viagem que deveria ser rápida transforma-se em uma aventura de outros dez anos, marcada pela ira de Poseidon e por inúmeros perigos.",
    quantidade: 15,
    destaque: 1,
    keywords: "odisseia, Odisseia, Odisséia, odisséia, a odisseia, A Odisseia, A Odisséia, a odisséia"
  },

  {
    codigo: 2,
    nome: "1984",
    autor: "George Orwell",
    imagem: "2.jpg",
    valor: 74.99,
    valorPromo: 39.99,
    ano: 2021,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Ficção",
    paginas: 416,
    isbn: "9788535914849",
    sinopse: "Entre em um mundo sombrio de vigilância e controle, onde a resistência individual se torna uma luta desesperada pela liberdade.",
    quantidade: 15,
    destaque: 1,
    keywords: "1984, George Orwell, ficção, distopia"
  },

  {
    codigo: 3,
    nome: "Box Harry Potter",
    autor: "J.K. Rowling",
    imagem: "3.jpg",
    valor: 699.99,
    valorPromo: 484.99,
    ano: 2023,
    tamanhoLetra: "Normal",
    tipoCapa: "Capa dura",
    genero: "Juvenil",
    paginas: 3068,
    isbn: "9788532530784",
    sinopse: "Harry recebe uma carta misteriosa, entregue por uma coruja: um convite para estudar num lugar incrível chamado Escola de Magia e Bruxaria Hogwarts. Lá ele vai encontrar não só amigos, esportes praticados em vassouras voadoras e magia para todo lado, como também seu destino: ser um aprendiz de feiticeiro até o dia em que terá que enfrentar a pior força do mal, o bruxo que assassinou seus pais.",
    quantidade: 15,
    destaque: 1,
    keywords: "Harry Potter, Box, J.K. Rowling, Hogwarts"
  },

  {
    codigo: 4,
    nome: "A Hora da Estrela",
    autor: "Clarice Lispector",
    imagem: "4.jpg",
    valor: 25.99,
    valorPromo: 0,
    ano: 2020,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Brasileiro",
    paginas: 88,
    isbn: "9788535924729",
    sinopse: "A nordestina Macabéa, a protagonista de A hora da estrela, é uma mulher miserável, que mal tem consciência de existir. Depois de perder seu único elo com o mundo, uma velha tia, ela viaja para o Rio, onde aluga um quarto, se emprega como datilógrafa e gasta suas horas ouvindo a Rádio Relógio. Apaixona-se, então, por Olímpico de Jesus, um metalúrgico nordestino, que logo a trai com uma colega de trabalho. Desesperada, Macabéa consulta uma cartomante, que lhe prevê um futuro luminoso, bem diferente do que a espera.",
    quantidade: 30,
    destaque: 1,
    keywords: "A hora da estrela, estrela, Clarice, Lispector"
  },

  {
    codigo: 5,
    nome: "Como fortalecer sua autoestima",
    autor: "Stefanie Stahl",
    imagem: "5.jpg",
    valor: 64.90,
    valorPromo: 37.50,
    ano: 2023,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Autoajuda",
    paginas: 224,
    isbn: "9786555644740",
    sinopse: "A imagem que fazemos de nós mesmos determina grande parte da nossa atitude diante da vida, interferindo em nossas relações, nosso comportamento e em nossa saúde física e mental. Quando as experiências da infância são dolorosas, deixam marcas profundas que distorcem nossa autoimagem e criam falsas crenças a respeito de nosso valor. Para curar essas feridas e construir uma autoestima saudável, precisamos olhar para dentro com compaixão e, ao mesmo tempo, assumir a responsabilidade pelas escolhas que fazemos por medo e insegurança. Trazendo reflexões e exercícios práticos, este livro ensina como superar as armadilhas da autocrítica, da vergonha e da sensação de nunca ser suficiente.",
    quantidade: 30,
    destaque: 1,
    keywords: "Autoestima, insegurança, medo, vergonha"
  }
  ];

  private listaMaisVendidos: Produto[] = [
    {
      codigo: 6,
      nome: "Dom Casmurro",
      autor: "Machado de Assis",
      imagem: "6.jpg",
      valor: 39.90,
      valorPromo: 29.90,
      ano: 2022,
      tamanhoLetra: "Normal",
      tipoCapa: "Brochura",
      genero: "Brasileiro",
      paginas: 256,
      isbn: "9788535910661",
      sinopse: "Um dos maiores clássicos da literatura brasileira, narrado por Bentinho, que relembra sua infância, seu relacionamento com Capitu e os acontecimentos que marcaram sua vida.",
      quantidade: 50,
      destaque: 1,
      keywords: "Machado de Assis, Dom Casmurro, Capitu, Bentinho, clássico, literatura brasileira"
    },

    {
      codigo: 7,
      nome: "Vidas Secas",
      autor: "Graciliano Ramos",
      imagem: "7.jpg",
      valor: 34.90,
      valorPromo: 27.90,
      ano: 2021,
      tamanhoLetra: "Normal",
      tipoCapa: "Brochura",
      genero: "Brasileiro",
      paginas: 176,
      isbn: "9788501067340",
      sinopse: "A história de uma família de retirantes que enfrenta a seca, a pobreza e as dificuldades da vida no sertão nordestino.",
      quantidade: 45,
      destaque: 1,
      keywords: "Graciliano Ramos, Vidas Secas, sertão, nordeste, Fabiano, Sinhá Vitória"
    },

    {
      codigo: 8,
      nome: "O Pequeno Príncipe",
      autor: "Antoine de Saint-Exupéry",
      imagem: "8.jpg",
      valor: 29.90,
      valorPromo: 22.90,
      ano: 2020,
      tamanhoLetra: "Normal",
      tipoCapa: "Brochura",
      genero: "Juvenil",
      paginas: 96,
      isbn: "9788522031442",
      sinopse: "Uma história sobre amizade, amor, responsabilidade e os valores da vida, contada através do encontro entre um piloto e um pequeno príncipe que veio de outro planeta.",
      quantidade: 80,
      destaque: 1,
      keywords: "O Pequeno Príncipe, Saint-Exupéry, clássico, amizade, literatura juvenil"
    },

    {
      codigo: 9,
      nome: "Crime e Castigo",
      autor: "Fiódor Dostoiévski",
      imagem: "9.jpg",
      valor: 59.90,
      valorPromo: 47.92,
      ano: 2021,
      tamanhoLetra: "Normal",
      tipoCapa: "Brochura",
      genero: "Clássicos",
      paginas: 592,
      isbn: "9788573266465",
      sinopse: "Um jovem estudante enfrenta as consequências psicológicas e morais de um crime, mergulhando em conflitos de culpa, justiça e redenção.",
      quantidade: 30,
      destaque: 1,
      keywords: "Dostoiévski, Crime e Castigo, Raskólnikov, literatura russa, clássico"
    },

    {
      codigo: 10,
      nome: "A Metamorfose",
      autor: "Franz Kafka",
      imagem: "10.jpg",
      valor: 32.90,
      valorPromo: 26.32,
      ano: 2022,
      tamanhoLetra: "Normal",
      tipoCapa: "Brochura",
      genero: "Ficção",
      paginas: 96,
      isbn: "9788535925092",
      sinopse: "Gregor Samsa acorda transformado em um inseto e passa a enfrentar o isolamento, a rejeição e as mudanças em sua relação com sua família.",
      quantidade: 55,
      destaque: 1,
      keywords: "Kafka, A Metamorfose, Gregor Samsa, clássico, ficção, literatura"
    }
  ];

listaClassicos: Produto[] = [
  {
    codigo: 11,
    nome: "Dom Quixote",
    autor: "Miguel de Cervantes",
    imagem: "11.jpg",
    valor: 59.90,
    valorPromo: 47.92,
    ano: 1605,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Clássicos",
    paginas: 736,
    isbn: "9788535911989",
    sinopse: "A história de Dom Quixote, um homem que, após ler muitos livros de cavalaria, decide tornar-se cavaleiro andante e parte em busca de aventuras ao lado de seu fiel escudeiro, Sancho Pança.",
    quantidade: 20,
    destaque: 1,
    keywords: "Dom Quixote, Cervantes, clássico, literatura espanhola, cavalaria"
  },

  {
    codigo: 12,
    nome: "Os Miseráveis",
    autor: "Victor Hugo",
    imagem: "12.jpg",
    valor: 89.90,
    valorPromo: 0,
    ano: 1862,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Clássicos",
    paginas: 1512,
    isbn: "9788535919946",
    sinopse: "Um dos grandes romances da literatura mundial, acompanhando a trajetória de Jean Valjean em meio à pobreza, injustiça, redenção e transformação social na França do século XIX.",
    quantidade: 18,
    destaque: 1,
    keywords: "Os Miseráveis, Victor Hugo, Jean Valjean, clássico, literatura francesa"
  },

  {
    codigo: 13,
    nome: "Orgulho e Preconceito",
    autor: "Jane Austen",
    imagem: "13.jpg",
    valor: 49.90,
    valorPromo: 39.92,
    ano: 1813,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Clássicos",
    paginas: 424,
    isbn: "9788535914849",
    sinopse: "Elizabeth Bennet enfrenta as expectativas sociais de sua época enquanto desenvolve uma relação marcada por conflitos, preconceitos e descobertas com o reservado Mr. Darcy.",
    quantidade: 25,
    destaque: 1,
    keywords: "Orgulho e Preconceito, Jane Austen, Elizabeth Bennet, Darcy, romance"
  },

  {
    codigo: 14,
    nome: "O Morro dos Ventos Uivantes",
    autor: "Emily Brontë",
    imagem: "14.jpg",
    valor: 54.90,
    valorPromo: 43.92,
    ano: 1847,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Clássicos",
    paginas: 368,
    isbn: "9788535914849",
    sinopse: "Uma história de paixão, ressentimento e vingança envolvendo Heathcliff e Catherine Earnshaw, marcada pelas relações turbulentas entre duas famílias.",
    quantidade: 22,
    destaque: 1,
    keywords: "O Morro dos Ventos Uivantes, Emily Brontë, Heathcliff, Catherine, romance"
  },

  {
    codigo: 15,
    nome: "Anna Kariênina",
    autor: "Liev Tolstói",
    imagem: "15.jpg",
    valor: 79.90,
    valorPromo: 63.92,
    ano: 1878,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Clássicos",
    paginas: 816,
    isbn: "9788573266496",
    sinopse: "Anna Kariênina vive um conflito entre as convenções da sociedade russa e sua paixão por Vronski, enquanto diferentes histórias de amor, família e sociedade se desenvolvem ao seu redor.",
    quantidade: 17,
    destaque: 1,
    keywords: "Anna Kariênina, Tolstói, literatura russa, romance, clássico"
  },

  {
    codigo: 16,
    nome: "O Conde de Monte Cristo",
    autor: "Alexandre Dumas",
    imagem: "16.jpg",
    valor: 69.90,
    valorPromo: 55.92,
    ano: 1844,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Clássicos",
    paginas: 736,
    isbn: "9788535914757",
    sinopse: "Edmond Dantès é vítima de uma conspiração e passa anos preso injustamente. Após escapar, retorna com uma nova identidade e uma grande fortuna para buscar justiça e vingança.",
    quantidade: 21,
    destaque: 1,
    keywords: "O Conde de Monte Cristo, Alexandre Dumas, Edmond Dantès, aventura, vingança"
  },

  {
    codigo: 17,
    nome: "Hamlet",
    autor: "William Shakespeare",
    imagem: "17.jpg",
    valor: 39.90,
    valorPromo: 31.92,
    ano: 1603,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Clássicos",
    paginas: 224,
    isbn: "9788525414730",
    sinopse: "O príncipe Hamlet descobre um segredo envolvendo a morte de seu pai e passa a buscar a verdade enquanto enfrenta conflitos familiares, políticos e pessoais.",
    quantidade: 28,
    destaque: 1,
    keywords: "Hamlet, Shakespeare, tragédia, teatro, clássico"
  },

  {
    codigo: 18,
    nome: "Fausto",
    autor: "Johann Wolfgang von Goethe",
    imagem: "18.jpg",
    valor: 64.90,
    valorPromo: 51.92,
    ano: 1808,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Clássicos",
    paginas: 464,
    isbn: "9788525412934",
    sinopse: "O doutor Fausto, insatisfeito com os limites do conhecimento humano, faz um pacto com Mefistófeles em busca de experiências e realizações que ultrapassem sua existência comum.",
    quantidade: 15,
    destaque: 1,
    keywords: "Fausto, Goethe, Mefistófeles, literatura alemã, clássico"
  },

  {
    codigo: 19,
    nome: "O Retrato de Dorian Gray",
    autor: "Oscar Wilde",
    imagem: "19.jpg",
    valor: 44.90,
    valorPromo: 35.92,
    ano: 1890,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Clássicos",
    paginas: 256,
    isbn: "9788535911149",
    sinopse: "Dorian Gray deseja conservar para sempre sua juventude e beleza. Enquanto seu retrato envelhece e revela as marcas de suas escolhas, ele mergulha cada vez mais em uma vida de excessos.",
    quantidade: 24,
    destaque: 1,
    keywords: "Dorian Gray, Oscar Wilde, retrato, clássico, literatura inglesa"
  },

  {
    codigo: 20,
    nome: "Frankenstein",
    autor: "Mary Shelley",
    imagem: "20.jpg",
    valor: 42.90,
    valorPromo: 34.32,
    ano: 1818,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Clássicos",
    paginas: 288,
    isbn: "9788535914894",
    sinopse: "O jovem cientista Victor Frankenstein consegue criar uma criatura a partir de partes humanas. Porém, horrorizado com sua criação, abandona-a, desencadeando uma série de acontecimentos trágicos.",
    quantidade: 30,
    destaque: 1,
    keywords: "Frankenstein, Mary Shelley, monstro, terror, ficção, clássico"
  }
];


listaJuvenis: Produto[] = [
  {
    codigo: 21,
    nome: "Harry Potter e a Pedra Filosofal",
    autor: "J.K. Rowling",
    imagem: "21.jpg",
    valor: 49.90,
    valorPromo: 39.90,
    ano: 2017,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Juvenil",
    paginas: 208,
    isbn: "9788532530783",
    sinopse: "Harry Potter descobre que é um bruxo e começa seus estudos em Hogwarts, onde faz novos amigos e descobre segredos sobre seu passado.",
    quantidade: 35,
    destaque: 1,
    keywords: "Harry Potter, Pedra Filosofal, J.K. Rowling, Hogwarts, magia, juvenil"
  },

  {
    codigo: 22,
    nome: "As Crônicas de Nárnia",
    autor: "C. S. Lewis",
    imagem: "22.jpg",
    valor: 89.90,
    valorPromo: 67.90,
    ano: 2019,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Juvenil",
    paginas: 752,
    isbn: "9788578270696",
    sinopse: "Uma coleção de aventuras ambientadas em Nárnia, um mundo fantástico habitado por criaturas mágicas, reis, rainhas e grandes batalhas.",
    quantidade: 25,
    destaque: 1,
    keywords: "Nárnia, C.S. Lewis, fantasia, aventura, As Crônicas de Nárnia"
  },

  {
    codigo: 23,
    nome: "Percy Jackson e o Ladrão de Raios",
    autor: "Rick Riordan",
    imagem: "23.jpg",
    valor: 44.90,
    valorPromo: 31.90,
    ano: 2014,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Juvenil",
    paginas: 400,
    isbn: "9788580575398",
    sinopse: "Percy Jackson descobre que é filho de um deus grego e embarca em uma aventura para encontrar o raio-mestre de Zeus e evitar uma guerra entre os deuses.",
    quantidade: 40,
    destaque: 1,
    keywords: "Percy Jackson, Rick Riordan, mitologia grega, aventura, deuses"
  },

  {
    codigo: 24,
    nome: "Jogos Vorazes",
    autor: "Suzanne Collins",
    imagem: "24.jpg",
    valor: 49.90,
    valorPromo: 42.90,
    ano: 2010,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Juvenil",
    paginas: 400,
    isbn: "9788579800243",
    sinopse: "Katniss Everdeen se oferece para participar dos Jogos Vorazes no lugar de sua irmã e precisa lutar pela sobrevivência em uma competição organizada pelo governo de Panem.",
    quantidade: 32,
    destaque: 1,
    keywords: "Jogos Vorazes, Suzanne Collins, Katniss, Panem, distopia, juvenil"
  },

  {
    codigo: 25,
    nome: "O Hobbit",
    autor: "J.R.R. Tolkien",
    imagem: "25.jpg",
    valor: 54.90,
    valorPromo: 39.90,
    ano: 2019,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Juvenil",
    paginas: 336,
    isbn: "9788595084742",
    sinopse: "Bilbo Bolseiro deixa sua vida tranquila no Condado para acompanhar um grupo de anões em uma aventura para recuperar um tesouro guardado pelo dragão Smaug.",
    quantidade: 27,
    destaque: 1,
    keywords: "O Hobbit, Tolkien, Bilbo, Smaug, fantasia, aventura"
  },

  {
    codigo: 26,
    nome: "Coraline",
    autor: "Neil Gaiman",
    imagem: "26.jpg",
    valor: 39.90,
    valorPromo: 33.90,
    ano: 2020,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Juvenil",
    paginas: 224,
    isbn: "9788551003723",
    sinopse: "Coraline encontra uma porta misteriosa em sua nova casa e descobre um mundo aparentemente perfeito, mas que esconde uma ameaça assustadora.",
    quantidade: 29,
    destaque: 1,
    keywords: "Coraline, Neil Gaiman, fantasia, terror, aventura, juvenil"
  },

  {
    codigo: 27,
    nome: "O Diário de Anne Frank",
    autor: "Anne Frank",
    imagem: "27.jpg",
    valor: 42.90,
    valorPromo: 28.90,
    ano: 2014,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Juvenil",
    paginas: 352,
    isbn: "9788506075027",
    sinopse: "O diário escrito por Anne Frank durante o período em que ela e sua família permaneceram escondidos durante a Segunda Guerra Mundial.",
    quantidade: 24,
    destaque: 1,
    keywords: "Anne Frank, diário, Segunda Guerra Mundial, história, juvenil"
  },

  {
    codigo: 28,
    nome: "Extraordinário",
    autor: "R. J. Palacio",
    imagem: "28.jpg",
    valor: 39.90,
    valorPromo: 35.90,
    ano: 2013,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Juvenil",
    paginas: 320,
    isbn: "9788580573011",
    sinopse: "Auggie Pullman nasceu com uma deformidade facial e começa a frequentar uma escola pela primeira vez, enfrentando desafios, preconceitos e descobrindo o valor da amizade.",
    quantidade: 38,
    destaque: 1,
    keywords: "Extraordinário, R.J. Palacio, Auggie, amizade, escola, juvenil"
  },

  {
    codigo: 29,
    nome: "O Menino do Pijama Listrado",
    autor: "John Boyne",
    imagem: "29.jpg",
    valor: 34.90,
    valorPromo: 24.90,
    ano: 2007,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Juvenil",
    paginas: 192,
    isbn: "9788535911125",
    sinopse: "Bruno, filho de um oficial nazista, muda-se com sua família para perto de um campo de concentração e desenvolve uma amizade com um menino que vive do outro lado da cerca.",
    quantidade: 31,
    destaque: 1,
    keywords: "O Menino do Pijama Listrado, John Boyne, Bruno, guerra, história"
  },

  {
    codigo: 30,
    nome: "Alice no País das Maravilhas",
    autor: "Lewis Carroll",
    imagem: "30.jpg",
    valor: 32.90,
    valorPromo: 0,
    ano: 1865,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Juvenil",
    paginas: 192,
    isbn: "9788535913868",
    sinopse: "Alice cai em uma toca de coelho e chega a um mundo fantástico onde encontra personagens curiosos e vive situações completamente inesperadas.",
    quantidade: 45,
    destaque: 1,
    keywords: "Alice, País das Maravilhas, Lewis Carroll, fantasia, aventura, juvenil"
  }
];

listaLancamentos: Produto[] = [
  {
    codigo: 31,
    nome: "Desconhecido",
    autor: "Riley Sager",
    imagem: "31.jpg",
    valor: 69.90,
    valorPromo: 62.91,
    ano: 2026,
    tamanhoLetra: "Normal",
    tipoCapa: "Não informado",
    genero: "Thriller",
    paginas: 384,
    isbn: "978-85-510-1881-1",
    sinopse: "Uma equipe de cinema viaja para uma ilha remota para produzir um filme sobre o desaparecimento de cinco mulheres ocorrido um século antes. Presos no local, os integrantes começam a viver acontecimentos que parecem repetir a tragédia do passado.",
    quantidade: 25,
    destaque: 1,
    keywords: "Desconhecido, Riley Sager, thriller, suspense, mistério, ilha"
  },

  {
    codigo: 32,
    nome: "As Irmãs de Amarelo",
    autor: "Mieko Kawakami",
    imagem: "32.jpg",
    valor: 89.90,
    valorPromo: 76.42,
    ano: 2026,
    tamanhoLetra: "Normal",
    tipoCapa: "Não informado",
    genero: "Ficção Literária",
    paginas: 496,
    isbn: "978-85-510-1871-2",
    sinopse: "Hana e sua mãe vivem em uma situação precária nos arredores de Tóquio. A chegada de uma mulher misteriosa transforma a vida de Hana e a conduz por uma história marcada por amizade, traição e questões sociais.",
    quantidade: 18,
    destaque: 1,
    keywords: "As Irmãs de Amarelo, Mieko Kawakami, ficção japonesa, Tóquio, amizade"
  },

  {
    codigo: 33,
    nome: "Os Assassinatos da Casa Decagonal",
    autor: "Yukito Ayatsuji",
    imagem: "33.jpg",
    valor: 69.90,
    valorPromo: 64.31,
    ano: 2026,
    tamanhoLetra: "Normal",
    tipoCapa: "Não informado",
    genero: "Suspense",
    paginas: 288,
    isbn: "978-85-510-1895-8",
    sinopse: "Sete estudantes vão até uma ilha remota para investigar uma sequência de assassinatos não solucionados. Quando um deles é encontrado morto, o grupo percebe que precisa descobrir o assassino antes que outras mortes aconteçam.",
    quantidade: 22,
    destaque: 1,
    keywords: "Casa Decagonal, Yukito Ayatsuji, mistério, suspense, assassinato, Japão"
  },

  {
    codigo: 34,
    nome: "Não se Apaixona, Não",
    autor: "Isabela Freitas",
    imagem: "34.jpg",
    valor: 79.90,
    valorPromo: 70.31,
    ano: 2026,
    tamanhoLetra: "Normal",
    tipoCapa: "Não informado",
    genero: "Romance",
    paginas: 400,
    isbn: "978-85-510-1866-8",
    sinopse: "Isabela acompanha uma nova fase de sua vida enquanto enfrenta relacionamentos, exposição pública, inseguranças e os desafios de lidar com as próprias escolhas e sentimentos.",
    quantidade: 30,
    destaque: 1,
    keywords: "Não se Apaixona Não, Isabela Freitas, romance, relacionamentos, amor"
  },

  {
    codigo: 35,
    nome: "Enchantra",
    autor: "Kaylie Smith",
    imagem: "35.jpg",
    valor: 79.90,
    valorPromo: 71.91,
    ano: 2026,
    tamanhoLetra: "Normal",
    tipoCapa: "Não informado",
    genero: "Fantasia",
    paginas: 383,
    isbn: "978-85-510-1902-3",
    sinopse: "Genevieve vai até a misteriosa mansão da família Silver e descobre que seus integrantes estão presos em um jogo mortal. Para sobreviver, ela precisa formar uma aliança com Rowin, mesmo sem saber se pode confiar nele.",
    quantidade: 20,
    destaque: 1,
    keywords: "Enchantra, Kaylie Smith, fantasia, romantasia, magia, Rowin"
  },

  {
    codigo: 36,
    nome: "Alguém Caminha Sobre o Seu Túmulo",
    autor: "Mariana Enriquez",
    imagem: "36.jpg",
    valor: 89.90,
    valorPromo: 78.21,
    ano: 2026,
    tamanhoLetra: "Normal",
    tipoCapa: "Não informado",
    genero: "Não ficção",
    paginas: 376,
    isbn: "978-85-510-1870-5",
    sinopse: "Mariana Enriquez percorre cemitérios de diferentes partes do mundo e transforma suas visitas em uma investigação sobre história, arquitetura, memória, morte e as histórias associadas aos lugares.",
    quantidade: 16,
    destaque: 1,
    keywords: "Mariana Enriquez, cemitérios, morte, memória, arquitetura, viagem"
  },

  {
    codigo: 37,
    nome: "Os Diários de Emma M. Lion: Volume 1",
    autor: "Beth Brower",
    imagem: "37.jpg",
    valor: 59.90,
    valorPromo: 56.91,
    ano: 2026,
    tamanhoLetra: "Normal",
    tipoCapa: "Não informado",
    genero: "Romance",
    paginas: 160,
    isbn: "978-85-510-1861-3",
    sinopse: "Emma M. Lion está prestes a completar 21 anos e espera receber sua herança, a Casa Lápis-Lazúli. Entre conflitos familiares, vizinhos curiosos e situações inesperadas, ela registra sua vida em forma de diário.",
    quantidade: 28,
    destaque: 1,
    keywords: "Emma M. Lion, Beth Brower, romance histórico, Londres, diário"
  },

  {
    codigo: 38,
    nome: "Os Diários de Emma M. Lion: Volume 2",
    autor: "Beth Brower",
    imagem: "38.jpg",
    valor: 59.90,
    valorPromo: 53.91,
    ano: 2026,
    tamanhoLetra: "Normal",
    tipoCapa: "Não informado",
    genero: "Romance",
    paginas: 224,
    isbn: "978-85-510-1860-6",
    sinopse: "Emma assume novas responsabilidades na Casa Lápis-Lazúli, ajuda a prima a encontrar um pretendente e se envolve em novas situações enquanto sua vida social e amorosa ganha novos rumos.",
    quantidade: 24,
    destaque: 1,
    keywords: "Emma M. Lion, Beth Brower, romance histórico, Londres, época vitoriana"
  },

  {
    codigo: 39,
    nome: "Uma Longa Órbita",
    autor: "Jana Bianchi",
    imagem: "39.jpg",
    valor: 54.90,
    valorPromo: 51.06,
    ano: 2026,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Ficção Científica",
    paginas: 240,
    isbn: "9788576578413",
    sinopse: "Uma bióloga participa de uma missão em uma colônia científica em Tau Ceti f, onde um problema biológico ameaça o abastecimento de água. Para agir à distância, ela utiliza avatares que permitem projetar sua consciência na superfície do planeta.",
    quantidade: 19,
    destaque: 1,
    keywords: "Uma Longa Órbita, Jana Bianchi, ficção científica, espaço, tecnologia, Brasil"
  },

  {
    codigo: 40,
    nome: "A Estranha na Cama",
    autor: "Raphael Montes",
    imagem: "40.jpg",
    valor: 64.90,
    valorPromo: 55.17,
    ano: 2026,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Thriller",
    paginas: 304,
    isbn: "978-85-359-4790-8",
    sinopse: "Um casal decide convidar uma desconhecida para uma noite íntima, mas a situação termina de forma inesperada. A partir daí, os personagens precisam lidar com mentiras, segredos e as consequências de suas escolhas.",
    quantidade: 26,
    destaque: 1,
    keywords: "A Estranha na Cama, Raphael Montes, thriller, suspense, mistério, crime"
  }
];

listaAutoAjuda: Produto[] = [
  {
    codigo: 41,
    nome: "Você é Insubstituível",
    autor: "Augusto Cury",
    imagem: "41.jpg",
    valor: 49.90,
    valorPromo: 44.91,
    ano: 2018,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Autoajuda",
    paginas: 128,
    isbn: "9788543106137",
    sinopse: "Augusto Cury aborda autoestima, sonhos, metas e os acontecimentos que ajudam a construir a história de cada pessoa, incentivando o leitor a valorizar a própria vida.",
    quantidade: 35,
    destaque: 1,
    keywords: "Augusto Cury, Você é Insubstituível, autoestima, sonhos, metas, desenvolvimento pessoal"
  },

  {
    codigo: 42,
    nome: "Nunca Desista de Seus Sonhos",
    autor: "Augusto Cury",
    imagem: "42.jpg",
    valor: 54.90,
    valorPromo: 46.67,
    ano: 2015,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Autoajuda",
    paginas: 160,
    isbn: "9788543102559",
    sinopse: "Augusto Cury discute a importância dos sonhos para a construção de projetos de vida e apresenta reflexões sobre perseverança, objetivos e realização pessoal.",
    quantidade: 28,
    destaque: 1,
    keywords: "Augusto Cury, sonhos, motivação, objetivos, perseverança, desenvolvimento pessoal"
  },

  {
    codigo: 43,
    nome: "O Médico da Emoção",
    autor: "Augusto Cury",
    imagem: "43.jpg",
    valor: 64.90,
    valorPromo: 55.17,
    ano: 2022,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Autoajuda",
    paginas: 288,
    isbn: "9786555643077",
    sinopse: "Em mais uma obra protagonizada por Marco Polo, Augusto Cury explora temas relacionados às emoções, aos desafios da vida e à capacidade de superar dificuldades.",
    quantidade: 21,
    destaque: 1,
    keywords: "Augusto Cury, emoções, inteligência emocional, Marco Polo, desenvolvimento pessoal"
  },

  {
    codigo: 44,
    nome: "Me Poupe!",
    autor: "Nathalia Arcuri",
    imagem: "44.jpg",
    valor: 59.90,
    valorPromo: 49.90,
    ano: 2020,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Autoajuda",
    paginas: 176,
    isbn: "9786555640786",
    sinopse: "Nathalia Arcuri apresenta conceitos de educação financeira e estratégias para organizar as finanças, economizar, estabelecer objetivos e investir melhor.",
    quantidade: 40,
    destaque: 1,
    keywords: "Nathalia Arcuri, Me Poupe, finanças, dinheiro, economia, investimentos"
  },

  {
    codigo: 45,
    nome: "Chefe de Mim",
    autor: "Nathalia Arcuri",
    imagem: "45.jpg",
    valor: 59.90,
    valorPromo: 50.91,
    ano: 2024,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Autoajuda",
    paginas: 192,
    isbn: "9786555648997",
    sinopse: "Nathalia Arcuri aborda a busca por autonomia profissional, organização financeira e a possibilidade de construir uma carreira alinhada aos próprios objetivos.",
    quantidade: 26,
    destaque: 1,
    keywords: "Nathalia Arcuri, Chefe de Mim, carreira, empreendedorismo, independência financeira"
  },

  {
    codigo: 46,
    nome: "O Poder da Ação",
    autor: "Paulo Vieira",
    imagem: "46.jpg",
    valor: 69.90,
    valorPromo: 55.92,
    ano: 2015,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Autoajuda",
    paginas: 256,
    isbn: "9788545200345",
    sinopse: "Paulo Vieira apresenta um método voltado à mudança de comportamento, ao estabelecimento de objetivos e à transformação de planos em ações práticas.",
    quantidade: 32,
    destaque: 1,
    keywords: "Paulo Vieira, O Poder da Ação, ação, metas, mudança, desenvolvimento pessoal"
  },

  {
    codigo: 47,
    nome: "Do Mil ao Milhão: Sem Cortar o Cafezinho",
    autor: "Thiago Nigro",
    imagem: "47.jpg",
    valor: 54.90,
    valorPromo: 43.92,
    ano: 2018,
    tamanhoLetra: "Normal",
    tipoCapa: "Capa comum",
    genero: "Autoajuda",
    paginas: 192,
    isbn: "9788595083271",
    sinopse: "Thiago Nigro apresenta conceitos de educação financeira organizados em três pilares: gastar melhor, investir melhor e ganhar mais.",
    quantidade: 37,
    destaque: 1,
    keywords: "Thiago Nigro, Do Mil ao Milhão, investimentos, dinheiro, educação financeira, riqueza"
  },

  {
    codigo: 48,
    nome: "A Coragem de Ser Imperfeito",
    autor: "Brené Brown",
    imagem: "48.jpg",
    valor: 59.90,
    valorPromo: 50.92,
    ano: 2016,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Autoajuda",
    paginas: 208,
    isbn: "9788543104331",
    sinopse: "Brené Brown aborda vulnerabilidade, vergonha e aceitação pessoal, mostrando como abandonar a busca pela perfeição pode ajudar na construção de relações mais autênticas.",
    quantidade: 23,
    destaque: 1,
    keywords: "Brené Brown, vulnerabilidade, autoestima, coragem, perfeccionismo, desenvolvimento pessoal"
  },

  {
    codigo: 49,
    nome: "Essencialismo",
    autor: "Greg McKeown",
    imagem: "49.jpg",
    valor: 64.90,
    valorPromo: 55.17,
    ano: 2015,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Autoajuda",
    paginas: 272,
    isbn: "9788543102146",
    sinopse: "Greg McKeown apresenta um método para identificar aquilo que é realmente importante, reduzir excessos e concentrar tempo e energia no que traz maior significado.",
    quantidade: 29,
    destaque: 1,
    keywords: "Greg McKeown, Essencialismo, produtividade, foco, prioridades, organização"
  },

  {
    codigo: 50,
    nome: "A Coragem de Não Agradar",
    autor: "Ichiro Kishimi e Fumitake Koga",
    imagem: "50.jpg",
    valor: 54.90,
    valorPromo: 46.67,
    ano: 2018,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Autoajuda",
    paginas: 272,
    isbn: "9788543105697",
    sinopse: "Baseado na psicologia de Alfred Adler, o livro apresenta um diálogo sobre liberdade, relações humanas, responsabilidade pessoal e a necessidade de não viver preso à aprovação dos outros.",
    quantidade: 34,
    destaque: 1,
    keywords: "A Coragem de Não Agradar, Ichiro Kishimi, Fumitake Koga, psicologia, liberdade, autoestima"
  }
];

ListaFiccao: Produto[] = [
  {
    codigo: 51,
    nome: "Dois Irmãos",
    autor: "Milton Hatoum",
    imagem: "51.jpg",
    valor: 69.90,
    valorPromo: 55.92,
    ano: 2022,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Ficção",
    paginas: 280,
    isbn: "9786559211388",
    sinopse: "A história acompanha os irmãos gêmeos Yaqub e Omar e os conflitos de sua família em Manaus. Anos depois, o filho de Domingas tenta reconstruir as relações, rivalidades e segredos que marcaram aquela casa.",
    quantidade: 24,
    destaque: 1,
    keywords: "Dois Irmãos, Milton Hatoum, Yaqub, Omar, Manaus, literatura brasileira, ficção"
  },

  {
    codigo: 52,
    nome: "O Grande Gatsby",
    autor: "F. Scott Fitzgerald",
    imagem: "52.jpg",
    valor: 59.90,
    valorPromo: 47.92,
    ano: 2011,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Ficção",
    paginas: 208,
    isbn: "9780141345655",
    sinopse: "Na Nova York dos anos 1920, Nick Carraway observa a vida luxuosa e misteriosa de Jay Gatsby, um homem que organiza festas grandiosas enquanto tenta recuperar um amor do passado.",
    quantidade: 21,
    destaque: 1,
    keywords: "O Grande Gatsby, F. Scott Fitzgerald, Jay Gatsby, Nick Carraway, literatura americana, romance"
  },

  {
    codigo: 53,
    nome: "O Avesso da Pele",
    autor: "Jeferson Tenório",
    imagem: "53.jpg",
    valor: 59.90,
    valorPromo: 49.90,
    ano: 2020,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Ficção",
    paginas: 192,
    isbn: "9788535933390",
    sinopse: "Pedro revisita a trajetória do pai, Henrique, procurando compreender sua história, sua relação com a família e os acontecimentos que marcaram sua vida.",
    quantidade: 31,
    destaque: 1,
    keywords: "O Avesso da Pele, Jeferson Tenório, Pedro, Henrique, literatura brasileira, ficção"
  },

  {
    codigo: 54,
    nome: "Cem Anos de Solidão",
    autor: "Gabriel García Márquez",
    imagem: "54.jpg",
    valor: 74.90,
    valorPromo: 59.92,
    ano: 2018,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Ficção",
    paginas: 448,
    isbn: "9780241968581",
    sinopse: "A saga da família Buendía atravessa várias gerações na cidade fictícia de Macondo. Realidade, memória, guerras, amores e acontecimentos fantásticos se misturam em uma narrativa sobre solidão e destino.",
    quantidade: 19,
    destaque: 1,
    keywords: "Cem Anos de Solidão, Gabriel García Márquez, Macondo, família Buendía, realismo mágico"
  },

  {
    codigo: 55,
    nome: "Ensaio sobre a Cegueira",
    autor: "José Saramago",
    imagem: "55.jpg",
    valor: 74.90,
    valorPromo: 59.90,
    ano: 2026,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Ficção",
    paginas: 360,
    isbn: "9788535946048",
    sinopse: "Uma epidemia de cegueira atinge uma cidade sem explicação. À medida que a sociedade entra em colapso, um pequeno grupo tenta sobreviver enquanto enfrenta medo, violência e a perda das estruturas sociais.",
    quantidade: 20,
    destaque: 1,
    keywords: "Ensaio sobre a Cegueira, José Saramago, cegueira, distopia, ficção portuguesa"
  },

  {
    codigo: 56,
    nome: "O Sol é Para Todos",
    autor: "Harper Lee",
    imagem: "56.jpg",
    valor: 64.90,
    valorPromo: 51.92,
    ano: 2015,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Ficção",
    paginas: 368,
    isbn: "9780060935467",
    sinopse: "Scout Finch narra sua infância em uma pequena cidade do Alabama, onde seu pai, o advogado Atticus Finch, defende um homem negro acusado injustamente de um crime.",
    quantidade: 26,
    destaque: 1,
    keywords: "O Sol é Para Todos, Harper Lee, Scout Finch, Atticus Finch, racismo, literatura americana"
  },

  {
    codigo: 57,
    nome: "O Alienista",
    autor: "Machado de Assis",
    imagem: "57.jpg",
    valor: 42.90,
    valorPromo: 34.90,
    ano: 2022,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Ficção",
    paginas: 72,
    isbn: "9786559212644",
    sinopse: "O médico Simão Bacamarte decide estudar a loucura e cria uma instituição para tratar aqueles que considera mentalmente desequilibrados. Aos poucos, seus critérios levantam questões sobre os limites entre razão e loucura.",
    quantidade: 30,
    destaque: 1,
    keywords: "O Alienista, Machado de Assis, Simão Bacamarte, loucura, ficção brasileira"
  },

  {
    codigo: 58,
    nome: "A Revolução dos Bichos",
    autor: "George Orwell",
    imagem: "58.jpg",
    valor: 49.90,
    valorPromo: 39.92,
    ano: 2007,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Ficção",
    paginas: 144,
    isbn: "9780451526342",
    sinopse: "Os animais de uma fazenda se revoltam contra o dono e assumem o controle do lugar. O sonho de igualdade, porém, começa a ser distorcido quando novos líderes passam a concentrar o poder.",
    quantidade: 28,
    destaque: 1,
    keywords: "A Revolução dos Bichos, George Orwell, animais, alegoria política, distopia, literatura inglesa"
  },

  {
    codigo: 59,
    nome: "Memórias Póstumas de Brás Cubas",
    autor: "Machado de Assis",
    imagem: "59.jpg",
    valor: 69.90,
    valorPromo: 55.92,
    ano: 2014,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Ficção",
    paginas: 368,
    isbn: "9788582850015",
    sinopse: "Depois de morrer, Brás Cubas decide contar sua própria história, relembrando episódios de sua vida com ironia e uma perspectiva particular sobre a sociedade, os relacionamentos e seus próprios fracassos.",
    quantidade: 33,
    destaque: 1,
    keywords: "Memórias Póstumas de Brás Cubas, Machado de Assis, Brás Cubas, realismo, literatura brasileira"
  },

  {
    codigo: 60,
    nome: "A Metamorfose",
    autor: "Franz Kafka",
    imagem: "60.jpg",
    valor: 54.90,
    valorPromo: 43.92,
    ano: 2016,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Ficção",
    paginas: 96,
    isbn: "9780241340789",
    sinopse: "Gregor Samsa acorda transformado em um inseto e passa a enfrentar o isolamento, a rejeição e a mudança na relação com sua família. A narrativa explora a alienação e a fragilidade das relações humanas.",
    quantidade: 23,
    destaque: 1,
    keywords: "A Metamorfose, Franz Kafka, Gregor Samsa, literatura alemã, absurdo, ficção"
  }
];

listaFilosofia: Produto[] = [
  {
    codigo: 61,
    nome: "Os Analectos",
    autor: "Confúcio",
    imagem: "61.jpg",
    valor: 54.90,
    valorPromo: 46.67,
    ano: 2009,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Filosofia",
    paginas: 272,
    isbn: "9788525415639",
    sinopse: "Reunião dos ensinamentos atribuídos a Confúcio e compilados por seus discípulos. A obra aborda temas como ética, educação, virtude, relações sociais e o aperfeiçoamento moral do indivíduo.",
    quantidade: 25,
    destaque: 1,
    keywords: "Confúcio, Os Analectos, filosofia chinesa, ética, moral, virtude"
  },

  {
    codigo: 62,
    nome: "Meditações",
    autor: "Marco Aurélio",
    imagem: "62.jpg",
    valor: 49.90,
    valorPromo: 41.92,
    ano: 2024,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Filosofia",
    paginas: 208,
    isbn: "9788582851777",
    sinopse: "Reflexões pessoais do imperador romano Marco Aurélio sobre a vida, a natureza, a morte, a razão e a maneira de lidar com as dificuldades, dentro da tradição estoica.",
    quantidade: 30,
    destaque: 1,
    keywords: "Marco Aurélio, Meditações, estoicismo, filosofia romana, ética, virtude"
  },

  {
    codigo: 63,
    nome: "O Príncipe",
    autor: "Nicolau Maquiavel",
    imagem: "63.jpg",
    valor: 49.90,
    valorPromo: 39.92,
    ano: 2010,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Filosofia",
    paginas: 176,
    isbn: "9788563560032",
    sinopse: "Obra clássica do pensamento político em que Maquiavel analisa o poder, o governo, a liderança e as condições necessárias para conquistar e manter um Estado.",
    quantidade: 32,
    destaque: 1,
    keywords: "Maquiavel, O Príncipe, filosofia política, poder, Estado, política"
  },

  {
    codigo: 64,
    nome: "Discurso do Método",
    autor: "René Descartes",
    imagem: "64.jpg",
    valor: 49.90,
    valorPromo: 42.42,
    ano: 2002,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Filosofia",
    paginas: 159,
    isbn: "9788534918787",
    sinopse: "Descartes apresenta o caminho intelectual que o levou a formular seu método de investigação baseado na dúvida, na razão e na busca por conhecimentos seguros.",
    quantidade: 22,
    destaque: 1,
    keywords: "Descartes, Discurso do Método, racionalismo, razão, dúvida, filosofia moderna"
  },

  {
    codigo: 65,
    nome: "Assim Falou Zaratustra",
    autor: "Friedrich Nietzsche",
    imagem: "65.jpg",
    valor: 67.90,
    valorPromo: 57.72,
    ano: 2018,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Filosofia",
    paginas: 360,
    isbn: "9788535930481",
    sinopse: "Nietzsche apresenta as ideias de Zaratustra por meio de discursos e encontros alegóricos. A obra aborda temas como a superação de si, a moral, a religião e o sentido da existência.",
    quantidade: 27,
    destaque: 1,
    keywords: "Nietzsche, Zaratustra, filosofia alemã, super-homem, moral, existência"
  },

  {
    codigo: 66,
    nome: "O Segundo Sexo",
    autor: "Simone de Beauvoir",
    imagem: "66.jpg",
    valor: 99.90,
    valorPromo: 84.92,
    ano: 2014,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Filosofia",
    paginas: 936,
    isbn: "9788520939130",
    sinopse: "Simone de Beauvoir investiga a condição feminina a partir de perspectivas históricas, sociais, culturais e filosóficas, questionando a construção da posição da mulher na sociedade.",
    quantidade: 16,
    destaque: 1,
    keywords: "Simone de Beauvoir, O Segundo Sexo, feminismo, filosofia, mulher, existencialismo"
  },

  {
    codigo: 67,
    nome: "O Existencialismo é um Humanismo",
    autor: "Jean-Paul Sartre",
    imagem: "67.jpg",
    valor: 29.90,
    valorPromo: 24.82,
    ano: 2014,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Filosofia",
    paginas: 64,
    isbn: "9788532642868",
    sinopse: "Texto baseado em uma conferência de Sartre na qual o filósofo apresenta princípios fundamentais do existencialismo e responde às críticas dirigidas à corrente filosófica.",
    quantidade: 38,
    destaque: 1,
    keywords: "Sartre, existencialismo, liberdade, responsabilidade, filosofia francesa"
  },

  {
    codigo: 68,
    nome: "A Condição Humana",
    autor: "Hannah Arendt",
    imagem: "68.jpg",
    valor: 157.00,
    valorPromo: 133.45,
    ano: 2016,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Filosofia",
    paginas: 476,
    isbn: "9788530972165",
    sinopse: "Hannah Arendt analisa as atividades fundamentais da vida ativa — trabalho, obra e ação — e investiga suas relações com a política e a condição humana.",
    quantidade: 14,
    destaque: 1,
    keywords: "Hannah Arendt, A Condição Humana, filosofia política, ação, trabalho, política"
  },

  {
    codigo: 69,
    nome: "Pedagogia do Oprimido",
    autor: "Paulo Freire",
    imagem: "69.jpg",
    valor: 54.90,
    valorPromo: 46.67,
    ano: 2005,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Filosofia",
    paginas: 213,
    isbn: "9788521900054",
    sinopse: "Paulo Freire desenvolve uma reflexão sobre educação, diálogo, conscientização e transformação social, propondo uma prática pedagógica voltada à superação das relações de opressão.",
    quantidade: 29,
    destaque: 1,
    keywords: "Paulo Freire, Pedagogia do Oprimido, educação, diálogo, conscientização, filosofia brasileira"
  },

  {
    codigo: 70,
    nome: "Pele Negra, Máscaras Brancas",
    autor: "Frantz Fanon",
    imagem: "70.jpg",
    valor: 79.90,
    valorPromo: 67.92,
    ano: 2020,
    tamanhoLetra: "Normal",
    tipoCapa: "Brochura",
    genero: "Filosofia",
    paginas: 320,
    isbn: "9786586497205",
    sinopse: "Fanon investiga os efeitos psicológicos e sociais do racismo e do colonialismo, discutindo identidade, linguagem, relações raciais e os mecanismos de desumanização.",
    quantidade: 20,
    destaque: 1,
    keywords: "Frantz Fanon, Pele Negra Máscaras Brancas, racismo, colonialismo, identidade, pensamento anticolonial"
  }
];

  getLista(): Produto[] {
    return this.lista;
  }

  getListaMaisVendidos(): Produto[] {
    return this.listaMaisVendidos;
  }

  getListaClassicos(): Produto[] {
    return this.listaClassicos;
  }

  getListaJuvenis(): Produto[]{
    return this.listaJuvenis
  }

  getListaLancamentos(): Produto[]{
    return this.listaLancamentos
  }  
  
  getListaAutoajuda(): Produto[]{
    return this.listaAutoAjuda
  }

  getListaFiccao(): Produto[]{
    return this.ListaFiccao
  }

  getListaFilosofia(): Produto[]{
    return this.listaFilosofia
  }

  getProdutoPorCodigo(codigo: number): Produto | undefined {
    const todos = [...this.lista, ...this.listaMaisVendidos, ...this.listaClassicos, 
      ...this.listaJuvenis, ...this.listaLancamentos, ...this.listaAutoAjuda, 
      ...this.ListaFiccao, ...this.listaFilosofia

    ];
    return todos.find(p => p.codigo === codigo);
  }

  calcularDesconto(valor: number, valorPromo: number): number {
    if (!valorPromo || valorPromo === 0) return 0;
    return Math.round(((valor - valorPromo) / valor) * 100);
  }

  verDetalhes(codigo: number): void {
    this.router.navigate(['/detalheproduto', codigo]);
  }

}