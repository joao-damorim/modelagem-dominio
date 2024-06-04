import Erros from "@/constants/Erros"
import Pessoa from "@/core/pessoa/Pessoa"

test('Deve lançar erro ao tentar criar uma pessoa com nome vazio.', () => {
  expect(() => new Pessoa('', '')).toThrowError(Erros.NOME_VAZIO)
})

test('Deve criar uma pessoa válida.', () => {
  const pessoa = new Pessoa('Pedro Augusto Soares', '935.619.760-18')
  expect(pessoa.nome.primeiroNome).toBe('Pedro')
  expect(pessoa.id.novo).toBeTruthy()
})