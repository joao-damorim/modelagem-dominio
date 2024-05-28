export default class Validador {

  static naoNulo(valor: any, erro: string): string | null {
    return valor !== null && valor !== undefined ? null : erro
  }

  static naoVazio(valor: string | null | undefined, erro: string): string | null {
    if(Validador.naoNulo(valor, erro)) return erro
    return valor!.trim() !== '' ? null : erro
  }

  static tamanhoMenorQue(valor: string | any[], tamanhoMaximo: number, erro: string): string | null {
    return valor.length <= tamanhoMaximo ? null : erro
  }

  static isEmailValido(email: string): boolean {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return regex.test(email)
  }
}