import Validador from "@/utils/Validador"

test('Deve retornar null com texto não nulo.', () => {
  const erro = Validador.naoNulo('Bom dia', 'Texto inválido.')
  expect(erro).toBeNull()
})

test('Deve retornar erro com texto nulo.', () => {
  const msgErro = 'Texto inválido.'
  const erro = Validador.naoNulo(null, msgErro)
  expect(erro).toBe(msgErro)
})

test('Deve retornar null com texto não vazio.', () => {
  const erro = Validador.naoVazio('Bom dia', 'Texto vazio.')
  expect(erro).toBeNull()
})

test('Deve retornar erro com texto vazio.', () => {
  const msgErro = 'Texto inválido.'
  const e1 = Validador.naoVazio(' ', msgErro)
  expect(e1).toBe(msgErro)
})

test('Deve retornar erro com texto nulo.', () => {
  const msgErro = 'Texto inválido.'
  const e2 = Validador.naoVazio(null, msgErro)
  expect(e2).toBe(msgErro)
})

test('Deve retornar erro com texto undefined.', () => {
  const msgErro = 'Texto inválido.'
  const e3 = Validador.naoVazio(undefined, msgErro)
  expect(e3).toBe(msgErro)
})

test('Deve retornar null com texto menor que o tamanho máximo.', () => {
  const erro = Validador.tamanhoMenorQue('teste', 6, 'erro')
  expect(erro).toBe(null)
})

test('Deve retornar null com texto menor que o tamanho máximo.', () => {
  const erro = Validador.tamanhoMenorQue('Bom dia', 6, 'erro')
  expect(erro).toBe('erro')
})

test('Deve combinar os erros.', () => {
  const erros = Validador.combinar (
    Validador.naoVazio('', 'erro1'),
    Validador.naoVazio('Legal', 'erro2'),
    Validador.naoVazio('', 'erro3'),
    Validador.naoVazio('', 'erro4'),
  )
  // console.log(erros)
  expect(erros?.join(', ')).toBe('erro1, erro3, erro4')
})

test('Deve combinar sem erros.', () => {
  const erros = Validador.combinar (
    Validador.naoVazio('Legal', 'erro1'),
    Validador.naoVazio('Legal', 'erro2'),
    Validador.naoVazio('Legal', 'erro3'),
    Validador.naoVazio('Legal', 'erro4'),
  )
  // console.log(erros)
  expect(erros).toBeNull()
})