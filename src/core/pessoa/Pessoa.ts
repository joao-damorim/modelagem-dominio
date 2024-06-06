import Cpf from "../shared/Cpf";
import Id from "../shared/Id";
import NomePessoa from "../shared/NomePessoa";

export interface PessoaProps {
  id?: string
  nome?: string
  cpf?: string
}
export default class Pessoa {
  readonly props: PessoaProps
  readonly id: Id
  readonly nome: NomePessoa
  readonly cpf: Cpf

  constructor(props: PessoaProps) {
    this.id = new Id(props.id)
    this.nome = new NomePessoa(props.nome)
    this.cpf = new Cpf(props.cpf)

    this.props = { ...props, id: this.id.valor }
  }

  // clone(nome?: string, cpf?: string, id?: string) {
  //   return new Pessoa(
  //     nome ?? this.nome.completo,
  //     cpf ?? this.cpf.valor,
  //     id ?? this.id.valor
  //   )
  // }

  clone (props: PessoaProps) {
    return new Pessoa({...this.props, ...props})
  }
}


