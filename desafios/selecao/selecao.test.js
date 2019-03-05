const assert = require('assert')
const {
  maximoAouB,
  AMaiorQueBeC,
  maximoEntreABC,
  maximoEntreABCD,
  aEstaNoMeio,
  restoDivisao,
  restoDivisaoMaior,
  ehPar,
  ehMultiploDe3,
  ehMultiploDoNum2,
  ehSobra31Div5,
  ehParENaodivisivelPor4e6,
  satisfazSituacao,
  modulo,
  operacao,
  operacao2,
  ambos3OuAmbos5,
  restosIguais,
  div35
} = require('./selecao.respostas')

describe('maximoAouB()', () => {
  it('Deve retornar qual o valor máximo entre A e B [1]', async () => {
    const a = 3, b = 1
    assert.equal(maximoAouB(a, b), 3)
  })

  it('Deve retornar qual o valor máximo entre A e B [2]', async () => {
    const a = 2, b = 3
    assert.equal(maximoAouB(a, b), 3)
  })

  it('Deve retornar qual o valor máximo entre A e B [3]', async () => {
    const a = 3, b = 1
    assert.notEqual(maximoAouB(a, b), 1)
  })
})

describe('AMaiorQueBeC()', () => {
  it('Deve retornar se A é maior que B e C [1]', async () => {
    const a = 3, b = 1, c = 2
    assert.equal(AMaiorQueBeC(a, b, c), true)
  })

  it('Deve retornar se A é maior que B e C [2]', async () => {
    const a = 5, b = 3, c = 2
    assert.equal(AMaiorQueBeC(a, b, c), true)
  })

  it('Deve retornar se A é maior que B e C [3]', async () => {
    const a = 3, b = 1, c = 3
    assert.notEqual(AMaiorQueBeC(a, b, c), true)
  })
})

describe('maximoEntreABC()', () => {
  it('Deve retornar o maior valor entre A, B e C [1]', async () => {
    const a = 3, b = 1, c = 2
    assert.equal(maximoEntreABC(a, b, c), 3)
  })

  it('Deve retornar o maior valor entre A, B e C [2]', async () => {
    const a = 5, b = 3, c = 2
    assert.equal(maximoEntreABC(a, b, c), 5)
  })

  it('Deve retornar o maior valor entre A, B e C [3]', async () => {
    const a = 3, b = 1, c = 3
    assert.notEqual(maximoEntreABC(a, b, c), 1)
  })
})