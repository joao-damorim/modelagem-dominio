import UsuarioAnemicoV3 from "@/core/usuario/UsuarioAnemicoV3"

export function somar(a: number, b: number) {
  return a + b
}

const usuario = new UsuarioAnemicoV3(123, 'João', '#$@')

console.log(usuario)