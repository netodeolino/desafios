const assert = require('assert')
const { menor, maior, somaMaiorMenor, copiar, soma, existe } = require('./arrays')

describe('menor()', () => {
  it('Deve retornar o menor valor do array [1]', async () => {
    const array = [7, 3, 6, 2, 9]
    assert.equal(menor(array), 2)
  })

  it('Deve retornar o menor valor do array [2]', async () => {
    const array = [1, 2, 3, 4, 5, 6, 7]
    assert.notEqual(menor(array), 2)
  })

  it('Deve retornar o menor valor do array [3]', async () => {
    const array = [3, 6, 3, 8, 4, 5, 7, 9]
    assert.equal(menor(array), 3)
  })
})

describe('maior()', () => {
  it('Deve retornar o maior valor do array [1]', async () => {
    const array = [7, 3, 6, 2, 9, 1]
    assert.equal(maior(array), 9)
  })

  it('Deve retornar o maior valor do array [2]', async () => {
    const array = [1, 2, 3, 4, 5, 6, 7]
    assert.notEqual(maior(array), 6)
  })

  it('Deve retornar o maior valor do array [3]', async () => {
    const array = [13, 6, 3, 8, 4, 5, 17, 19]
    assert.equal(maior(array), 19)
  })
})

describe('somaMaiorMenor()', () => {
  it('Deve retornar a soma do maior e o menor valor do array [1]', async () => {
    const array = [7, 3, 6, 2, 9, 1]
    assert.equal(somaMaiorMenor(array), 10)
  })

  it('Deve retornar a soma do maior e o menor valor do array [2]', async () => {
    const array = [1, 2, 3, 4, 5, 6, 7]
    assert.equal(somaMaiorMenor(array), 8)
  })

  it('Deve retornar a soma do maior e o menor valor do array [3]', async () => {
    const array = [13, 6, 3, 8, 4, 5, 17, 19]
    assert.notEqual(somaMaiorMenor(array), 21)
  })
})

describe('copiar()', () => {
  it('Deve retornar a copia do array [1]', async () => {
    const array = [7, 3, 6, 2, 9, 1]
    assert.deepEqual(copiar(array), [7, 3, 6, 2, 9, 1])
  })

  it('Deve retornar a copia valor do array [2]', async () => {
    const array = [1, 2, 3, 4, 5, 6, 7]
    assert.notStrictEqual(copiar(array), [1, 2, 3, 4, 5, 6, 7])
  })

  it('Deve retornar a copia valor do array [3]', async () => {
    const array = [1, 2, 3, 4, 5, 6, 7]
    assert.notEqual(copiar(array), [7, 3, 6, 2, 9, 1])
  })
})

describe('soma()', () => {
  it('Deve retornar a soma dos valores do array [1]', async () => {
    const array = [7, 3, 6, 2, 9, 1]
    assert.equal(soma(array), 28)
  })

  it('Deve retornar a soma dos valores valor do array [2]', async () => {
    const array = [1, 2, 3, 4, 5, 6, 7]
    assert.notEqual(soma(array), 7)
  })

  it('Deve retornar a soma dos valores valor do array [3]', async () => {
    const array = [1, 2, 3, 4, 5, 6, 7]
    assert.equal(soma(array), 28)
  })
})

describe('existe()', () => {
  it('Deve retornar se existe o elem no array [1]', async () => {
    const elem = 7
    const array = [7, 3, 6, 2, 9, 1]
    assert.equal(existe(array, elem), true)
  })

  it('Deve retornar se existe o elem no array [2]', async () => {
    const elem = 13
    const array = [1, 2, 3, 4, 5, 6, 7]
    assert.notEqual(existe(array, elem), true)
  })

  it('Deve retornar se existe o elem no array [3]', async () => {
    const elem = 4
    const array = [1, 2, 3, 4, 5, 6, 7]
    assert.equal(existe(array, elem), true)
  })
})