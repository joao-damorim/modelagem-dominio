import Entidade, { EntidadeProps } from "@/core/shared/Entidade"
import Id from "@/core/shared/Id"

interface TesteProps extends EntidadeProps{
  nome?: string
  idade?: number
}

class Teste extends Entidade<Teste, TesteProps> {
  readonly nome: string
  readonly idade: number
  constructor (props: TesteProps) {
    super(props)
    this.nome = props.nome ?? ''
    this.idade = props.idade ?? 0
  }
}

test('Deve comparar duas entidades diferentes.', () => {
  const e1 =  new Teste({nome: 'Pedro', idade: 18})
  const e2 = new Teste({nome: 'Pedro', idade: 18})

  expect(e1.igual(e2)).toBe(false)
  expect(e1.diferente(e2)).toBe(true)
})

test('Deve comparar duas entidades com o mesmo id e atributos diferentes.', () => {
  const id = Id.novo.valor
  const e1 =  new Teste({id, nome: 'Pedro', idade: 18})
  const e2 = new Teste({id, nome: 'Maria', idade: 12})

  expect(e1.igual(e2)).toBe(true)
  expect(e1.diferente(e2)).toBe(false)
})


test('Deve comparar entidade com undefined id ou null.', () => {
  const e1 =  new Teste({nome: 'Pedro', idade: 18})

  expect(e1.igual(undefined as any)).toBe(false)
  expect(e1.igual(null as any)).toBe(false)
  expect(e1.diferente(undefined as any)).toBe(true)
  expect(e1.diferente(null as any)).toBe(true)
})

test('Deve clonar uma entidade com o nome diferente', () => {
  const e1 = new Teste({nome: 'Maria', idade: 55})
  const e2 = e1.clone({nome: 'João da Silva Pereira'})

  expect(e2.idade).toBe(e1.idade)
  expect(e2.nome).toBe('João da Silva Pereira')
  expect(e2.id.valor).toBe(e1.id.valor)
})

test('Deve clonar uma entidade com o id diferente', () => {
  const e1 = new Teste({nome: 'Maria', idade: 55})
  const e2 = e1.clone({ id: Id.novo.valor})

  expect(e2.id.diferente(e1.id)).toBe(true)
  expect(e2.nome).toBe(e1.nome)
  expect(e2.idade).toBe(e1.idade)
})