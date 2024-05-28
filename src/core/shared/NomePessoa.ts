import Erros from "@/constants/Erros"
import Validador from "@/utils/Validador"

export default class NomePessoa {
  readonly nome: string

  constructor(nome: string) {
    this.nome = nome.trim()

    const erros = Validador.combinar(
      Validador.naoVazio(this.nome, Erros.NOME_VAZIO),
      Validador.tamanhoMaiorQue(this.nome, 121, Erros.NOME_PEQUENO),
      Validador.tamanhoMenorQue(this.nome, 3, Erros.NOME_GRANDE),
      Validador.naoVazio(this.nome.split(' ')[1], Erros.NOME_SEM_SOBRENOME)
    )

    if(erros) throw new Error (erros.join(', '))
  }
}