import Erros from "@/constants/Erros"
import Pessoa from "@/core/pessoa/Pessoa"
import Id from "@/core/shared/Id"

test('Deve lançar erro ao tentar criar uma pessoa com nome vazio.', () => {
  expect(() => new Pessoa({nome:'', cpf:''})).toThrowError(Erros.NOME_VAZIO)
})

test('Deve criar uma pessoa válida.', () => {
  const pessoa = new Pessoa({nome: 'Pedro Augusto Soares', cpf: '935.619.760-18'})
  expect(pessoa.nome.primeiroNome).toBe('Pedro')
  expect(pessoa.id.novo).toBeTruthy()
})

test('Deve clonar objeto com nome alterado', () => {
  const pessoa = new Pessoa({nome: 'Pedro Augusto Soares', cpf: '935.619.760-18'})
  const novaPessoa = pessoa.clone({nome: 'Pedro Augusto Pereira'})
  expect(novaPessoa.id.valor).toBe(pessoa.id.valor)
  expect(novaPessoa.cpf.valor).toBe(pessoa.cpf.valor)
  expect(novaPessoa.nome.completo).toBe('Pedro Augusto Pereira')
})

test('Deve clonar objeto com id alterado', () => {
  const pessoa = new Pessoa({nome: 'Pedro Augusto Soares', cpf: '935.619.760-18'})
  const novaPessoa = pessoa.clone({id: Id.novo.valor})
  expect(novaPessoa.id.valor !== pessoa.id.valor).toBe(true)
  expect(novaPessoa.cpf.valor).toBe(pessoa.cpf.valor)
  expect(novaPessoa.nome.completo).toBe(pessoa.nome.completo)
})