import Erros from "@/constants/Erros"
import Cpf from "@/core/shared/Cpf"

test('Deve retornar cpf inválido para string vazia.', () => {
  expect(Cpf.isValido('')).toBeFalsy()
})

test('Deve retornar cpf inválido para string incompleta.', () => {
  expect(Cpf.isValido('123')).toBeFalsy()
  expect(Cpf.isValido('123456')).toBeFalsy()
  expect(Cpf.isValido('123123421234')).toBeFalsy()
  expect(Cpf.isValido('123.123.421-234')).toBeFalsy()
})

test('Deve retornar cpf inválido para dv inválido.', () => {
  expect(Cpf.isValido('123.423.421-00')).toBeFalsy()
})

test('Deve retornar cpf válido para dv válido.', () => {
  expect(Cpf.isValido('450.163.980-62')).toBeTruthy
  expect(Cpf.isValido('935.619.760-18')).toBeTruthy
})

test('Deve retornar o dv do cpf.', () => {
  expect(new Cpf('450.163.980-62').digitoVerificador).toBe('62')
  expect(new Cpf('935.619.760-18').digitoVerificador).toBe('18')
})

test('Deve lançar erro para cpf com string vazia.', () => {
  expect(() => new Cpf('')).toThrowError(Erros.CPF_INVALIDO)
  expect(() => new Cpf()).toThrowError(Erros.CPF_INVALIDO)
})

test('Deve lançar erro para cpf com strin incompleta.', () => {
  expect(() => new Cpf('123')).toThrowError(Erros.CPF_INVALIDO)
  expect(() => new Cpf('123456')).toThrowError(Erros.CPF_INVALIDO)
  expect(() => new Cpf('123123421234')).toThrowError(Erros.CPF_INVALIDO)
  expect(() => new Cpf('123.123.421-23')).toThrowError(Erros.CPF_INVALIDO)
})

test('Deve lançar erro para cpf com dv inválido.', () => {
  expect(() => new Cpf('123.423.421-00')).toThrowError(Erros.CPF_INVALIDO)
})

test('Deve retornar o cpf formatado.', () => {
  expect(new Cpf('93561976018').formatado).toBe("935.619.760-18")
})

test('Deve retornar o valor do cpf.', () => {
  expect(new Cpf('935.619.760-18').valor).toBe("93561976018")
})