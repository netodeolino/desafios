const assert = require('assert')

const {
  verifica,
  minuscula,
  maiuscula,
  verificaEspaco,
  tamanhoString,
  comparaStrings,
  stringMaiuscula,
  strCopy,
  somaCodigoASCII,
  contaCaractere,
  retiraEspacosDesnecessarios,
  ehPalindroma,
  tenisPolar,
  criptografar,
  estaNoComeco,
  substringPos,
  numSubstring,
  ehAnagrama
} = require('./strings.respostas')

describe('verifica', () => {
  it('Deve verificar se as strings são iguais [1]', async () => {
    const str1 = 'test', str2 = 'test'
    assert.equal(verifica(str1, str2), true)
  })

  it('Deve verificar se as strings são iguais [2]', async () => {
    const str1 = 'test', str2 = 'tset'
    assert.equal(verifica(str1, str2), false)
  })

  it('Deve verificar se as strings são iguais [3]', async () => {
    const str1 = 'test', str2 = 'tset'
    assert.notEqual(verifica(str1, str2), true)
  })
})

describe('minuscula', () => {
  it('Deve retornar true se a string é minúscula [1]', async () => {
    const str = 'test'
    assert.equal(minuscula(str), true)
  })

  it('Deve retornar true se a string é minúscula [2]', async () => {
    const str = 'TEST'
    assert.equal(minuscula(str), false)
  })

  it('Deve retornar true se a string é minúscula [3]', async () => {
    const str = 'TEsT'
    assert.notEqual(minuscula(str), true)
  })
})