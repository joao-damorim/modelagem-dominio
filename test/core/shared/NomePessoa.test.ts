import Erros from "@/constants/Erros";
import NomePessoa from "@/core/shared/NomePessoa";

test('Deve lançar erro ao tentar criar nome vazio.', () => {
  expect(() => new NomePessoa('')).toThrowError(Erros.NOME_VAZIO)
})