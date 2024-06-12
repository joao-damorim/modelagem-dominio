export default class RegiaoCpf {
  static readonly TODAS = [
    new RegiaoCpf(0, ["RS"]),
    new RegiaoCpf(1, ["DF", "GO"]),
    new RegiaoCpf(2, ["AC", "AM"]),
    new RegiaoCpf(3, ["AC", "AM"]),
    new RegiaoCpf(4, ["AC", "AM"]),
    new RegiaoCpf(5, ["AC", "AM"]),
    new RegiaoCpf(6, ["AC", "AM"]),
    new RegiaoCpf(7, ["ES", "RJ"]),
    new RegiaoCpf(8, ["SP"]),
    new RegiaoCpf(9, ["PR", "SC"])
  ]

  private constructor (readonly codigo: number, readonly estados: string[]) {
  }

  static readonly RS = RegiaoCpf.TODAS[0]

  static porCodigo(codigo: number): RegiaoCpf {
    return RegiaoCpf.TODAS[codigo]
  }

  static porCpf(cpf: string): RegiaoCpf {
    const codigo = +cpf.replace(/\D/g, '')[8]
    return RegiaoCpf.TODAS[codigo]
  }

  igual(outraRegiao: RegiaoCpf): boolean {
    return this.codigo === outraRegiao?.codigo
  }

  diferente(outraRegiao: RegiaoCpf): boolean {
    return this.codigo !== outraRegiao?.codigo
  }
}