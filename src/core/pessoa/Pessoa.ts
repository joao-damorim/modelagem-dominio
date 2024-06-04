import Cpf from "../shared/Cpf";
import Id from "../shared/Id";
import NomePessoa from "../shared/NomePessoa";

export default class Pessoa {
  readonly id: Id
  readonly nome: NomePessoa
  readonly cpf: Cpf

  constructor(
    nome: string,
    cpf: string,
    id?: string
  ) {
    this.nome = new NomePessoa(nome)
    this.cpf = new Cpf(cpf)
    this.id = new Id(id)
  }
}


