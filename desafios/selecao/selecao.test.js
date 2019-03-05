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
  num1EhMultiploDonum2,
  ehSobra31Div5,
  ehParENaodivisivelPor4e6,
  satisfazSituacao,
  modulo,
  operacao,
  operacao2,
  ambos3OuAmbos5,
  restosIguais,
  div35
} = require('./selecao')

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

describe('maximoEntreABCD()', () => {
  it('Deve retornar o maior valor entre A, B, C e D [1]', async () => {
    const a = 3, b = 1, c = 2, d = 10
    assert.equal(maximoEntreABCD(a, b, c, d), 10)
  })

  it('Deve retornar o maior valor entre A, B, C e D [2]', async () => {
    const a = 5, b = 3, c = 2, d = 1
    assert.equal(maximoEntreABCD(a, b, c, d), 5)
  })

  it('Deve retornar o maior valor entre A, B, C e D [3]', async () => {
    const a = 3, b = 1, c = 3, d = 2
    assert.notEqual(maximoEntreABCD(a, b, c, d), 2)
  })
})

describe('aEstaNoMeio()', () => {
  it('Deve retornar se A está entre B e C [1]', async () => {
    const a = 3, b = 2, c = 4
    assert.equal(aEstaNoMeio(a, b, c), true)
  })

  it('Deve retornar se A está entre B e C [2]', async () => {
    const a = 5, b = 3, c = 2
    assert.equal(aEstaNoMeio(a, b, c), false)
  })

  it('Deve retornar se A está entre B e C [3]', async () => {
    const a = 3, b = 1, c = 3
    assert.notEqual(aEstaNoMeio(a, b, c), true)
  })
})

describe('restoDivisao()', () => {
  it('Deve retornar o resto da divisão entre A e B [1]', async () => {
    const a = 2, b = 3
    assert.equal(restoDivisao(a, b), 2)
  })

  it('Deve retornar o resto da divisão entre A e B [2]', async () => {
    const a = 5, b = 3
    assert.equal(restoDivisao(a, b), 2)
  })

  it('Deve retornar o resto da divisão entre A e B [3]', async () => {
    const a = 3, b = 1
    assert.notEqual(restoDivisao(a, b), 1)
  })
})

describe('restoDivisaoMaior()', () => {
  it('Deve retornar o resto da divisão do maior entre A e B [1]', async () => {
    const a = 2, b = 3
    assert.equal(restoDivisaoMaior(a, b), 1)
  })

  it('Deve retornar o resto da divisão do maior entre A e B [2]', async () => {
    const a = 5, b = 3
    assert.equal(restoDivisaoMaior(a, b), 2)
  })

  it('Deve retornar o resto da divisão do maior entre A e B [3]', async () => {
    const a = 3, b = 1
    assert.notEqual(restoDivisaoMaior(a, b), 2)
  })
})

describe('ehPar()', () => {
  it('Deve retornar true se num é par [1]', async () => {
    const num = 2
    assert.equal(ehPar(num), true)
  })

  it('Deve retornar true se num é par [2]', async () => {
    const num = 5
    assert.equal(ehPar(num), false)
  })

  it('Deve retornar true se num é par [3]', async () => {
    const num = 3
    assert.notEqual(ehPar(num), true)
  })
})

describe('ehMultiploDe3()', () => {
  it('Deve retornar true se num é multiplo de 3 [1]', async () => {
    const num = 3
    assert.equal(ehMultiploDe3(num), true)
  })

  it('Deve retornar true se num é multiplo de 3 [2]', async () => {
    const num = 4
    assert.equal(ehMultiploDe3(num), false)
  })

  it('Deve retornar true se num é multiplo de 3 [3]', async () => {
    const num = 4
    assert.notEqual(ehMultiploDe3(num), true)
  })
})

describe('num1EhMultiploDonum2()', () => {
  it('Deve retornar true se num1 é multiplo de num2 [1]', async () => {
    const num1 = 4, num2 = 4
    assert.equal(num1EhMultiploDonum2(num1, num2), true)
  })

  it('Deve retornar true se num1 é multiplo de num2 [2]', async () => {
    const num1 = 4, num2 = 3
    assert.equal(num1EhMultiploDonum2(num1, num2), false)
  })

  it('Deve retornar true se num1 é multiplo de num2 [3]', async () => {
    const num1 = 4, num2 = 3
    assert.notEqual(num1EhMultiploDonum2(num1, num2), true)
  })
})

describe('ehSobra31Div5()', () => {
  it('Deve retornar true se num tem resto 1 e é divisível por 5 [1]', async () => {
    const num = 10
    assert.equal(ehSobra31Div5(num), true)
  })

  it('Deve retornar true se num tem resto 1 e é divisível por 5 [2]', async () => {
    const num = 15
    assert.equal(ehSobra31Div5(num), false)
  })

  it('Deve retornar true se num tem resto 1 e é divisível por 5 [3]', async () => {
    const num = 25
    assert.notEqual(ehSobra31Div5(num), false)
  })
})

describe('ehParENaodivisivelPor4e6()', () => {
  it('Deve retornar true se num é par e não divisível por 4 e 6 [1]', async () => {
    const num = 10
    assert.equal(ehParENaodivisivelPor4e6(num), true)
  })

  it('Deve retornar true se num é par e não divisível por 4 e 6 [2]', async () => {
    const num = 15
    assert.equal(ehParENaodivisivelPor4e6(num), false)
  })

  it('Deve retornar true se num é par e não divisível por 4 e 6 [3]', async () => {
    const num = 14
    assert.notEqual(ehParENaodivisivelPor4e6(num), false)
  })
})

describe('satisfazSituacao()', () => {
  it('Deve retornar se num se o num1 está entre 50 e 200 e num2 entre -1 e 9 [1]', async () => {
    const num1 = 199, num2 = 0
    assert.equal(satisfazSituacao(num1, num2), true)
  })

  it('Deve retornar se num se o num1 está entre 50 e 200 e num2 entre -1 e 9 [2]', async () => {
    const num1 = 55, num2 = -2
    assert.equal(satisfazSituacao(num1, num2), false)
  })

  it('Deve retornar se num se o num1 está entre 50 e 200 e num2 entre -1 e 9 [3]', async () => {
    const num1 = 80, num2 = 0
    assert.notEqual(satisfazSituacao(num1, num2), false)
  })
})

describe('modulo()', () => {
  it('Deve retornar o modulo do número [1]', async () => {
    const num = 199
    assert.equal(modulo(num), 199)
  })

  it('Deve retornar o modulo do número [2]', async () => {
    const num = -2
    assert.notEqual(modulo(num), -2)
  })

  it('Deve retornar o modulo do número [3]', async () => {
    const num = -2
    assert.equal(modulo(num), 2)
  })
})

describe('operacao()', () => {
  it('Deve retornar o num multiplicado por 5 ou subtraido por 3 [1]', async () => {
    const num = 10
    assert.equal(operacao(num), 50)
  })

  it('Deve retornar o num multiplicado por 5 ou subtraido por 3 [2]', async () => {
    const num = -2
    assert.notEqual(operacao(num), -10)
  })

  it('Deve retornar o num multiplicado por 5 ou subtraido por 3 [3]', async () => {
    const num = -2
    assert.equal(operacao(num), -5)
  })
})

describe('operacao2()', () => {
  it('Deve retornar o valor da operacao2 divido caso seja par [1]', async () => {
    const num1 = 4, num2 = 2
    assert.equal(operacao2(num1, num2), 0)
  })

  it('Deve retornar o valor da operacao2 divido caso seja par [2]', async () => {
    const num1 = 5, num2 = 3
    assert.equal(operacao2(num1, num2), 5)
  })

  it('Deve retornar o valor da operacao2 divido caso seja par [3]', async () => {
    const num1 = 21, num2 = 3
    assert.notEqual(operacao2(num1, num2), 7)
  })
})

describe('ambos3OuAmbos5()', () => {
  it('Deve retornar se num1 e num2 são divisiveis por 3 ou 5 [1]', async () => {
    const num1 = 9, num2 = 27
    assert.equal(ambos3OuAmbos5(num1, num2), true)
  })

  it('Deve retornar se num1 e num2 são divisiveis por 3 ou 5 [2]', async () => {
    const num1 = 18, num2 = 5
    assert.equal(ambos3OuAmbos5(num1, num2), false)
  })

  it('Deve retornar se num1 e num2 são divisiveis por 3 ou 5 [3]', async () => {
    const num1 = 35, num2 = 10
    assert.notEqual(ambos3OuAmbos5(num1, num2), false)
  })
})

describe('restosIguais()', () => {
  it('Deve retornar se resto da divisão de num1 e num2 é igual o de num3 e num4 [1]', async () => {
    const num1 = 10, num2 = 3
    const num3 = 8, num4 = 7
    assert.equal(restosIguais(num1, num2, num3, num4), true)
  })

  it('Deve retornar se resto da divisão de num1 e num2 é igual o de num3 e num4 [2]', async () => {
    const num1 = 25, num2 = 6
    const num3 = 8, num4 = 3
    assert.equal(restosIguais(num1, num2, num3, num4), false)
  })

  it('Deve retornar se resto da divisão de num1 e num2 é igual o de num3 e num4 [3]', async () => {
    const num1 = 18, num2 = 5
    const num3 = 19, num4 = 4
    assert.notEqual(restosIguais(num1, num2, num3, num4), false)
  })
})

describe('div35()', () => {
  it('Deve retornar 0, 1, 2 ou 3 pelas regras de div35 [1]', async () => {
    const num = 3
    assert.equal(div35(num), 1)
  })

  it('Deve retornar 0, 1, 2 ou 3 pelas regras de div35 [2]', async () => {
    const num = 10
    assert.equal(div35(num), 2)
  })

  it('Deve retornar 0, 1, 2 ou 3 pelas regras de div35 [3]', async () => {
    const num = 30
    assert.equal(div35(num), 3)
  })
})