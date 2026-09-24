import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Cadastro } from './cadastro/cadastro';
import { DetalheProduto } from './detalhe-produto/detalhe-produto';
import { EsqueciSenha } from './esqueci-senha/esqueci-senha';
import { Telainicial } from './telainicial/telainicial';
import { ResultadoBusca } from './resultado-busca/resultado-busca';
import { Cesta } from './cesta/cesta';
import { Classicos } from './classicos/classicos';
import { Juvenil } from './juvenil/juvenil';
import { Lancamentos } from './lancamentos/lancamentos';
import { Ficcao } from './ficcao/ficcao';
import { Autoajuda } from './autoajuda/autoajuda';
import { Filosofia } from './filosofia/filosofia';

export const routes: Routes = [
    {path: "", component: Telainicial},
    {path: "login", component: Login},
    {path: "cadastro", component: Cadastro},
    {path: "detalheproduto/:codigo", component: DetalheProduto},
    {path: "esqueci-senha", component: EsqueciSenha},
    {path: "telainicial", component: Telainicial},
    {path: "resultado-busca", component: ResultadoBusca}, 
    {path: "telainicial", component: Telainicial},
    {path: "cesta", component: Cesta},
    {path: "classicos", component: Classicos},
    {path: "juvenil", component: Juvenil},
    {path: "lancamentos", component: Lancamentos},
    {path: "ficcao", component: Ficcao},
    {path: "autoajuda", component: Autoajuda},
    {path: "filosofia", component: Filosofia},
];
