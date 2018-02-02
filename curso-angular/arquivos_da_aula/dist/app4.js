"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import {ConcessionariaDao} from './ConcessionariaDAO'
//import { PessoaDao } from './PessoaDAO';
var Pessoa_1 = require("./Pessoa");
var DAO_1 = require("./DAO");
var Concessionaria_1 = require("./Concessionaria");
//let dao: ConcessionariaDao = new ConcessionariaDao()
var concessionaria = new Concessionaria_1.default('', []);
//let dao2: PessoaDao = new PessoaDao()
var pessoa = new Pessoa_1.default('', '');
var dao3 = new DAO_1.Dao();
var dao4 = new DAO_1.Dao();
dao3.inserir(concessionaria);
dao4.atualizar(pessoa);
