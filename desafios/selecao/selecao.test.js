const assert = require('assert')
const {
  valorMaximo
} = require('./selecao')

describe('valorMaximo()', () => {
  it('Deve retornar o maior valor do array [1]', async () => {
    const a = 3, b = 1
    assert.equal(valorMaximo(a, b), 3)
  })

  it('Deve retornar o maior valor do array [2]', async () => {
    const a = 2, b = 3
    assert.equal(valorMaximo(a, b), 3)
  })

  it('Deve retornar o maior valor do array [3]', async () => {
    const a = 3, b = 1
    assert.notEqual(valorMaximo(a, b), 1)
  })
})