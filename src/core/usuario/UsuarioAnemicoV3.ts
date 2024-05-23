import Erros from "@/constants/Erros"
import Validador from "@/utils/Validador"

export default class UsuarioAnemicoV3 {
  private id!: number
  private nome!: string
  private email!: string
  private senha?: string

  constructor(id: number, nome: string, email: string, senha?: string) {
    this.setID(id)
    this.setNome(nome)
    this.setEmail(email)
    if (senha) this.setSenha(senha)
  }

  getID(): number {
    return this.id
  }

  setID(id: number) {
    this.id = id
  }

  getNome(): string {
    return this.nome
  }

  setNome(nome: string) {
    this.nome = nome
  }

  getEmail(): string {
    return this.email
  }

  setEmail(email: string) {
    if (Validador.isEmailValido(email)) {
      this.email = email
    }
  }

  getSenha(): string | undefined {
    return this.senha
  }

  setSenha(senha: string) {
    if (senha.length < 6) throw new Error(Erros.SENHA_INVALIDA)
    this.senha = senha
  }
}


