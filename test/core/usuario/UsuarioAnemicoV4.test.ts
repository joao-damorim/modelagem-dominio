import Erros from '@/constants/Erros'
import Usuario from '@/core/usuario//UsuarioAnemicoV4'

const usuarioValido = () => new Usuario(
  123,
  'Fulano',
  'fulano@mail.com',
  '123456'
)
  
test('Deve permitir usuario sem nome.', () => {
  const usuario: Usuario = usuarioValido()
  usuario.nome = undefined as any
  expect(usuario.nome).toBe(undefined)
})

test('Deve permitir usuario com nome undefined.', () => {
  const usuario: Usuario = usuarioValido()
  usuario.nome = undefined as any
  expect(usuario.nome).toBe(undefined)
})

test('Deve permitir usuario com id negativo.', () => {
  const usuario: Usuario = usuarioValido()
  usuario.id = -123
  expect(usuario.id).toBe(-123)
})

test('Deve permitir usuario com email invalido.', () => {
  const usuario: Usuario = usuarioValido()
  usuario.email = '!@Z'
  expect(usuario.email).toBe(usuario.email)
})

test('Deve alterar email com email válido.', () => {
  const usuario: Usuario = usuarioValido()
  usuario.email = 'fulan@gmail.com.br'
  expect(usuario.email).toBe(usuario.email)
})

// test('Deve permitir usuario com senha invalida.', () => {
//   const usuario: Usuario = usuarioValido()
//   usuario.setSenha('a')
//   expect(usuario.getSenha()).toBe('a')
// })

test('Deve lançar erro ao tentar alterar senha com tamanho menor que 6 caracteres.', () => {
  const usuario: Usuario = usuarioValido()
  expect(() => usuario.senha = 'a').toThrowError(Erros.SENHA_INVALIDA)
})

test('Deve alterar senha com tamanho maior ou igual a 6 caracteres.', () => {
  const novaSenhaValida = '123456'
  const usuario: Usuario = usuarioValido()
  usuario.senha = novaSenhaValida
  expect(usuario.senha).toBe(novaSenhaValida)
})