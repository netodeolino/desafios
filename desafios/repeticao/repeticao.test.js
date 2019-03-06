const assert = require('assert')
const {
  soma1Ate10,
  somatorio,
  imparesDe3Ate500,
  bacteria,
  somaDivisiveis,
  ehPrimo,
  primeirosPrimos,
  somaPrimos,
  naoPrimosMenosPrimo,
  potencia,
  ehQuadradoPerfeito,
  fatorial,
  sequencia1,
  sequencia2,
  sequencia3,
  sequencia4
} = require('./repeticao.respostas')

describe('soma1Ate10()', () => {
  it('Deve somar de 1 ate 10 [1]', async () => {
    assert.equal(soma1Ate10(), 55)
  })

  it('Deve somar de 1 ate 10 [2]', async () => {
    assert.notEqual(soma1Ate10(), 56)
  })

  it('Deve somar de 1 ate 10 [3]', async () => {
    assert.notEqual(soma1Ate10(), 54)
  })
})

describe('somatorio()', () => {
  it('Deve somar de 0 ate num [1]', async () => {
    const num = 0
    assert.equal(somatorio(num), 0)
  })

  it('Deve somar de 0 ate num [2]', async () => {
    const num = 2
    assert.equal(somatorio(num), 3)
  })

  it('Deve somar de 0 ate num [3]', async () => {
    const num = 1
    assert.notEqual(somatorio(num), 2)
  })
})