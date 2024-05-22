import Usuario from '@/core/usuario//UsuarioAnemicoV2'

const usuarioValido = () => new Usuario(
  123,
  'Fulano',
  'fulano@mail.com',
  '123456'
)
  

test('Deve permitir usuario sem nome.', () => {
  const usuario: Usuario = usuarioValido()
  usuario.nome = ''
  expect(usuario.nome).toBe('')
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

test('Deve permitir usuario com emai invalido.', () => {
  const usuario: Usuario = usuarioValido()
  usuario.email = '!@Z'
  expect(usuario.email).toBe('!@Z')
})

test('Deve permitir usuario com senha invalida.', () => {
  const usuario: Usuario = usuarioValido()
  usuario.senha = 'a'
  expect(usuario.senha).toBe('a')
})