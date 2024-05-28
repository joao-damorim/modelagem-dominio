import Erros from "@/constants/Erros";
import NomePessoa from "@/core/shared/NomePessoa";

test('Deve lançar erro ao tentar criar nome vazio.', () => {
  expect(() => new NomePessoa('')).toThrowError(Erros.NOME_VAZIO)
})

test('Deve lançar erro ao tentar criar nome menor que 3 caracteres.', () => {
  expect(() => new NomePessoa('Li Z')).toThrowError(Erros.NOME_PEQUENO)
})

test('Deve lançar erro ao tentar criar nome maior que 120 caracteres.', () => {
  const nomeGigante = 'João Pedro Carlos Rafael Miguel Salvador Leopoldo Sergio Luiz Ricardo'
  expect(() => new NomePessoa(nomeGigante)).toThrowError(Erros.NOME_GRANDE)
})

test('Deve lançar erro ao tentar criar nome sem sobrenome.', () => {
  expect(() => new NomePessoa('Guilherme')).toThrowError(Erros.NOME_SEM_SOBRENOME)
})

test('Deve lançar erro ao tentar criar nome com caracteres especiais.', () => {
  expect(() => new NomePessoa('João @$')).toThrowError(Erros.NOME_CARACTERES_INVALIDOS)
})