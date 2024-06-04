import Erros from '@/constants/Erros'
import { isCPF, isCNPJ } from 'validation-br'

export default class Cpf {
  // readonly valor: string

  // constructor(valor?: string) {
  //   this.valor = valor

  //   if(!isCPF(this.valor)) throw new Error(Erros.CPF_INVALIDO)
  // }

  // get formatado() {

  // }

  // get digitoVerificador() {

  // }

  static isValido(cpf: string): boolean {
    if(!cpf) return false
    const nums = cpf.replace(/\D/g, '').split('')
    if(nums.length !== 11) return false
    const dv1 = Cpf.validarDV(nums.splice(0,9), nums[9])
    const dv2 = Cpf.validarDV(nums.splice(1,9), nums[10])
    return dv1 && dv2
  }

  private static validarDV(digitos: string[], dvInformado: string): boolean {
    const fatores = [10,9,8,7,6,5,4,3,2]
    const total = digitos.reduce((total, digito, i) => {
      return total + (+digito * fatores[i])
    }, 0)
    const resto = total % 11
    const dvCalculado = resto < 2 ? 0 : 11 - resto
    return dvCalculado === +dvInformado
  }
}