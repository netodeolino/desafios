const assert = require('assert')
const {
  menor, 
  maior,
  somaMaiorMenor,
  copiar,
  soma,
  existe,
  numRepeticao,
  saoIguais,
  elemComum,
  estaContido
} = require('./arrays.respostas')

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

describe('numRepeticao()', () => {
  it('Deve retornar a quantidade de repetições do elem no array [1]', async () => {
    const elem = 1
    const array = [7, 3, 6, 2, 9, 1]
    assert.notEqual(numRepeticao(array, elem), 2)
  })

  it('Deve retornar a quantidade de repetições do elem no array [2]', async () => {
    const elem = 3
    const array = [3, 2, 3, 5, 6, 3]
    assert.equal(numRepeticao(array, elem), 3)
  })

  it('Deve retornar a quantidade de repetições do elem no array [3]', async () => {
    const elem = 4
    const array = [1, 2, 3, 4, 5, 6, 7]
    assert.equal(numRepeticao(array, elem), 1)
  })
})

describe('saoIguais()', () => {
  it('Deve retornar se dois arrays são iguais [1]', async () => {
    const array1 = [7, 3, 6, 2, 9, 1]
    const array2 = [7, 3, 6, 2, 9, 1, 4]
    assert.equal(saoIguais(array1, array2), false)
  })

  it('Deve retornar se dois arrays são iguais [2]', async () => {
    const array1 = [3, 2, 3, 5, 6, 3]
    const array2 = [3, 2, 3, 5, 6, 3]
    assert.equal(saoIguais(array1, array2), true)
  })

  it('Deve retornar se dois arrays são iguais [3]', async () => {
    const array1 = [1, 2, 3, 4, 5, 6, 7]
    const array2 = [1, 2, 3, 4, 5, 6, 7]
    assert.notEqual(saoIguais(array1, array2), false)
  })
})

describe('elemComum()', () => {
  it('Deve retornar se elem existe em array1 e array2 [1]', async () => {
    const elem = 1
    const array1 = [7, 3, 6, 2, 9, 1]
    const array2 = [7, 3, 6, 4, 8, 1, 4]
    assert.notEqual(elemComum(array1, array2, elem), false)
  })

  it('Deve retornar se elem existe em array1 e array2 [2]', async () => {
    const elem = 3
    const array1 = [3, 2, 3, 5, 6, 3]
    const array2 = [4, 3, 2, 6, 5, 7]
    assert.equal(elemComum(array1, array2, elem), true)
  })

  it('Deve retornar se elem existe em array1 e array2 [3]', async () => {
    const elem = 7
    const array1 = [1, 3, 2, 9, 5, 6, 7]
    const array2 = [1, 2, 3, 8, 5, 7, 6]
    assert.equal(elemComum(array1, array2, elem), true)
  })
})

describe('estaContido()', () => {
  it('Deve retornar se elem existe em array1 e array2 [1]', async () => {
    const array1 = 'Esta'
    const array2 = 'Esta contido'
    assert.equal(estaContido(array1, array2), true)
  })

  it('Deve retornar se elem existe em array1 e array2 [2]', async () => {
    const array1 = 'asd'
    const array2 = 'dsaasddsa'
    assert.equal(estaContido(array1, array2), true)
  })

  it('Deve retornar se elem existe em array1 e array2 [3]', async () => {
    const array1 = 'calabaca'
    const array2 = 'cabalaca'
    assert.notEqual(estaContido(array1, array2), true)
  })
})