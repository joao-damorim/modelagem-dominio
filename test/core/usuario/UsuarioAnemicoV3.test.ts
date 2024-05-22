import Usuario from '@/core/usuario//UsuarioAnemicoV3'

const usuarioValido = () => new Usuario(
  123,
  'Fulano',
  'fulano@mail.com',
  '123456'
)
  

test('Deve permitir usuario sem nome.', () => {
  const usuario: Usuario = usuarioValido()
  usuario.setNome('')
  expect(usuario.getNome()).toBe('')
})

test('Deve permitir usuario com nome undefined.', () => {
  const usuario: Usuario = usuarioValido()
  usuario.setNome(undefined as any)
  expect(usuario.getNome()).toBe(undefined)
})

test('Deve permitir usuario com id negativo.', () => {
  const usuario: Usuario = usuarioValido()
  usuario.setID(-123)
  expect(usuario.getID()).toBe(-123)
})

test('Deve permitir usuario com emai invalido.', () => {
  const usuario: Usuario = usuarioValido()
  usuario.setEmail('!@Z')
  expect(usuario.getEmail()).toBe('!@Z')
})

test('Deve permitir usuario com senha invalida.', () => {
  const usuario: Usuario = usuarioValido()
  usuario.setSenha('a')
  expect(usuario.getSenha()).toBe('a')
})