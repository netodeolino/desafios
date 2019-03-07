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

describe('imparesDe3Ate500()', () => {
  it('Deve somar impares de 3 a 500 [1]', async () => {
    assert.equal(imparesDe3Ate500(), 83)
  })

  it('Deve somar impares de 3 a 500 [2]', async () => {
    assert.notEqual(imparesDe3Ate500(), 3)
  })

  it('Deve somar impares de 3 a 500 [3]', async () => {
    assert.notEqual(imparesDe3Ate500(), 503)
  })
})

describe('bacteria()', () => {
  it('Deve retornar a quantidade de bacterias [1]', async () => {
    const num = 0
    assert.equal(bacteria(num), 1)
  })

  it('Deve retornar a quantidade de bacterias [2]', async () => {
    const num = 1
    assert.equal(bacteria(num), 2)
  })

  it('Deve retornar a quantidade de bacterias [3]', async () => {
    const num = 13
    assert.equal(bacteria(num), 8192)
  })
})

describe('somaDivisiveis()', () => {
  it('Deve somar 200 num naturais divisiveis por e não por 7 [1]', async () => {
    assert.equal(somaDivisiveis(), 5688)
  })

  it('Deve somar 200 num naturais divisiveis por e não por 7 [2]', async () => {
    assert.notEqual(somaDivisiveis(), 5687)
  })

  it('Deve somar 200 num naturais divisiveis por e não por 7 [3]', async () => {
    assert.notEqual(somaDivisiveis(), 5689)
  })
})

describe('ehPrimo()', () => {
  it('Deve retornar true se num for primo [1]', async () => {
    const num = 3
    assert.equal(ehPrimo(num), true)
  })

  it('Deve retornar true se num for primo [2]', async () => {
    const num = 4
    assert.equal(ehPrimo(num), false)
  })

  it('Deve retornar true se num for primo [3]', async () => {
    const num = 12
    assert.notEqual(ehPrimo(num), true)
  })
})

describe('primeirosPrimos()', () => {
  it('Deve retornar a quantidade de primos até num [1]', async () => {
    const num = 1
    assert.equal(primeirosPrimos(num), 0)
  })

  it('Deve retornar a quantidade de primos até num [2]', async () => {
    const num = 3
    assert.equal(primeirosPrimos(num), 2)
  })

  it('Deve retornar a quantidade de primos até num [3]', async () => {
    const num = 5
    assert.equal(primeirosPrimos(num), 3)
  })
})

describe('somaPrimos()', () => {
  it('Deve retornar a soma de primos até num [1]', async () => {
    const num = 1
    assert.equal(somaPrimos(num), 0)
  })

  it('Deve retornar a soma de primos até num [2]', async () => {
    const num = 2
    assert.equal(somaPrimos(num), 2)
  })

  it('Deve retornar a soma de primos até num [3]', async () => {
    const num = 4
    assert.equal(somaPrimos(num), 5)
  })
})

describe('naoPrimosMenosPrimo()', () => {
  it('Deve retornar a soma de primos menos não primos [1]', async () => {
    const num = 1
    assert.equal(naoPrimosMenosPrimo(num), 1)
  })

  it('Deve retornar a soma de primos menos não primos [2]', async () => {
    const num = 2
    assert.equal(naoPrimosMenosPrimo(num), -1)
  })

  it('Deve retornar a soma de primos menos não primos [3]', async () => {
    const num = 3
    assert.equal(naoPrimosMenosPrimo(num), -4)
  })
})

describe('potencia()', () => {
  it('Deve retornar a potencia de base com expoente [1]', async () => {
    const base = 2, expoente = 3
    assert.equal(potencia(base, expoente), 8)
  })

  it('Deve retornar a potencia de base com expoente [2]', async () => {
    const base = 2, expoente = 4
    assert.equal(potencia(base, expoente), 16)
  })

  it('Deve retornar a potencia de base com expoente [3]', async () => {
    const base = 2, expoente = 0
    assert.equal(potencia(base, expoente), 1)
  })
})

describe('ehQuadradoPerfeito()', () => {
  it('Deve retornar true se num é quadrado perfeito [1]', async () => {
    const num = 4
    assert.equal(ehQuadradoPerfeito(num), true)
  })

  it('Deve retornar true se num é quadrado perfeito [2]', async () => {
    const num = 9
    assert.equal(ehQuadradoPerfeito(num), true)
  })

  it('Deve retornar true se num é quadrado perfeito [3]', async () => {
    const num = 8
    assert.equal(ehQuadradoPerfeito(num), false)
  })
})

describe('fatorial()', () => {
  it('Deve retornar o fatorial de num [1]', async () => {
    const num = 3
    assert.equal(fatorial(num), 6)
  })

  it('Deve retornar o fatorial de num [2]', async () => {
    const num = 9
    assert.equal(fatorial(num), 362880)
  })

  it('Deve retornar o fatorial de num [3]', async () => {
    const num = 2
    assert.notEqual(fatorial(num), 1)
  })
})

describe('sequencia1()', () => {
  it('Deve retornar o enesimo termo da sequencia 1 [1]', async () => {
    const num = 4
    assert.equal(sequencia1(num), 8)
  })

  it('Deve retornar o enesimo termo da sequencia 1 [2]', async () => {
    const num = 11
    assert.equal(sequencia1(num), 1024)
  })

  it('Deve retornar o enesimo termo da sequencia 1 [3]', async () => {
    const num = 2
    assert.equal(sequencia1(num), 2)
  })
})

describe('sequencia2()', () => {
  it('Deve retornar o enesimo termo da sequencia 2 [1]', async () => {
    const num = 2
    assert.equal(sequencia2(num), 3)
  })

  it('Deve retornar o enesimo termo da sequencia 2 [2]', async () => {
    const num = 6
    assert.equal(sequencia2(num), 63)
  })

  it('Deve retornar o enesimo termo da sequencia 2 [3]', async () => {
    const num = 11
    assert.equal(sequencia2(num), 2047)
  })
})

describe('sequencia3()', () => {
  it('Deve retornar o enesimo termo da sequencia 3 [1]', async () => {
    const num = 2
    assert.equal(sequencia3(num), -3)
  })

  it('Deve retornar o enesimo termo da sequencia 3 [2]', async () => {
    const num = 6
    assert.equal(sequencia3(num), -7)
  })

  it('Deve retornar o enesimo termo da sequencia 3 [3]', async () => {
    const num = 1234
    assert.equal(sequencia3(num), -1235)
  })
})

describe('sequencia4()', () => {
  it('Deve retornar o enesimo termo da sequencia 4 [1]', async () => {
    const num = 1
    assert.equal(sequencia4(num), 3)
  })

  it('Deve retornar o enesimo termo da sequencia 4 [2]', async () => {
    const num = 2
    assert.equal(sequencia4(num), -6)
  })

  it('Deve retornar o enesimo termo da sequencia 4 [3]', async () => {
    const num = 8
    assert.equal(sequencia4(num), -3282)
  })
})