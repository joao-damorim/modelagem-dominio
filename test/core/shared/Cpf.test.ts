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
  expect(Cpf.isValido('123')).toBeFalsy()
  expect(Cpf.isValido('123456')).toBeFalsy()
  expect(Cpf.isValido('123123421234')).toBeFalsy()
  expect(Cpf.isValido('123.423.421-00')).toBeFalsy()
})

test('Deve retornar cpf válido para dv válido.', () => {
  expect(Cpf.isValido('450.163.980-62')).toBeTruthy
  expect(Cpf.isValido('935.619.760-18')).toBeTruthy
})