//import {ConcessionariaDao} from './ConcessionariaDAO'
//import { PessoaDao } from './PessoaDAO';
import Pessoa from './Pessoa';
import { Dao } from './DAO';
import Concessionaria from './Concessionaria';

//let dao: ConcessionariaDao = new ConcessionariaDao()
let concessionaria: Concessionaria = new Concessionaria('', [])

//let dao2: PessoaDao = new PessoaDao()
let pessoa: Pessoa = new Pessoa('', '')

let dao3: Dao<Concessionaria> = new Dao<Concessionaria>()
let dao4: Dao<Pessoa> = new Dao<Pessoa>()

dao3.inserir(concessionaria)
dao4.atualizar(pessoa)