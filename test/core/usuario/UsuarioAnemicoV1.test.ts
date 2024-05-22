import Usuario from '@/core/usuario//UsuarioAnemicoV1'

const usuarioValido: Usuario = {
  id: 123,
  nome: 'Fulano',
  email: 'fulano@mail.com',
  senha: '123456'
}

test('Deve permitir usuario sem nome.', () => {
  const usuario: Usuario = {...usuarioValido, nome: ''}
  expect(usuario.nome).toBe('')
})

test('Deve permitir usuario com id negativo.', () => {
  const usuario: Usuario = {...usuarioValido, id: -123}
  expect(usuario.id).toBe(-123)
})

test('Deve permitir usuario com emai invalido.', () => {
  const usuario: Usuario = {...usuarioValido, email: '!@Z'}
  expect(usuario.email).toBe('!@Z')
})

test('Deve permitir usuario com senha invalida.', () => {
  const usuario: Usuario = {...usuarioValido, senha: 'a'}
  expect(usuario.senha).toBe('a')
})