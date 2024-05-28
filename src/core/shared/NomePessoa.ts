import Erros from "@/constants/Erros"
import Validador from "@/utils/Validador"

export default class NomePessoa {
  readonly nome: string

  constructor(nome: string) {
    this.nome = nome.trim()

    const erros = Validador.combinar(
      Validador.naoVazio(this.nome, Erros.NOME_VAZIO)
    )

    if(erros) throw new Error (erros.join(', '))
  }
}