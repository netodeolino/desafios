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

describe('maiuscula', () => {
  it('Deve retornar true se a string é maiúscula [1]', async () => {
    const str = 'test'
    assert.equal(maiuscula(str), false)
  })

  it('Deve retornar true se a string é maiúscula [2]', async () => {
    const str = 'TEST'
    assert.equal(maiuscula(str), true)
  })

  it('Deve retornar true se a string é maiúscula [3]', async () => {
    const str = 'TEsT'
    assert.notEqual(maiuscula(str), true)
  })
})

describe('verificaEspaco', () => {
  it('Deve retornar true se a string possui espaço [1]', async () => {
    const str = 'test '
    assert.equal(verificaEspaco(str), true)
  })

  it('Deve retornar true se a string possui espaço [2]', async () => {
    const str = 'test'
    assert.equal(verificaEspaco(str), false)
  })

  it('Deve retornar true se a string possui espaço [3]', async () => {
    const str = 'test'
    assert.notEqual(verificaEspaco(str), false)
  })
})

describe('tamanhoString', () => {
  it('Deve retornar o tamanho da string [1]', async () => {
    const str = 'test'
    assert.equal(tamanhoString(str), 4)
  })

  it('Deve retornar o tamanho da string [2]', async () => {
    const str = 'testtest'
    assert.equal(tamanhoString(str), 8)
  })

  it('Deve retornar o tamanho da string [3]', async () => {
    const str = 'test '
    assert.notEqual(tamanhoString(str), 4)
  })
})

describe('comparaStrings', () => {
  it('Deve retornar o tamanho da maior string [1]', async () => {
    const str1 = 'test1', str2 = 'test2'
    assert.equal(comparaStrings(str1, str2), 5)
  })

  it('Deve retornar o tamanho da maior string [2]', async () => {
    const str1 = 'test11', str2 = 'test3'
    assert.equal(comparaStrings(str1, str2), 6)
  })

  it('Deve retornar o tamanho da maior string [3]', async () => {
    const str1 = 'test111', str2 = 'test7'
    assert.notEqual(comparaStrings(str1, str2), 5)
  })
})

describe('stringMaiuscula', () => {
  it('Deve retornar a string maiúscula [1]', async () => {
    const str = 'test'
    assert.equal(stringMaiuscula(str), 'TEST')
  })

  it('Deve retornar a string maiúscula [2]', async () => {
    const str = 'testAbC'
    assert.equal(stringMaiuscula(str), 'TESTABC')
  })

  it('Deve retornar a string maiúscula [3]', async () => {
    const str = 'testAbC'
    assert.notEqual(stringMaiuscula(str), 'TESTaBc')
  })
})

describe('strCopy', () => {
  it('Deve retornar a nova string origem [1]', async () => {
    const str = 'test', tam = 2
    assert.equal(strCopy(str, tam), 'te')
  })

  it('Deve rretornar a nova string origem [2]', async () => {
    const str = 'testtest', tam = 3
    assert.equal(strCopy(str, tam), 'tes')
  })

  it('Deve retornar a nova string origem [3]', async () => {
    const str = 'test', tam = 2
    assert.notEqual(strCopy(str, tam), 'test')
  })
})

describe('somaCodigoASCII', () => {
  it('Deve retornar a soma dos caracteres ASCII [1]', async () => {
    const str = 'casa'
    assert.equal(somaCodigoASCII(str), 408)
  })

  it('Deve rretornar a soma dos caracteres ASCII [2]', async () => {
    const str = 'escola'
    assert.equal(somaCodigoASCII(str), 631)
  })

  it('Deve retornar a soma dos caracteres ASCII [3]', async () => {
    const str = 'escola'
    assert.notEqual(somaCodigoASCII(str), 632)
  })
})

describe('contaCaractere', () => {
  it('Deve retornar a quantidade de ocorrências de caractere [1]', async () => {
    const str = 'casa', caratere = 'a'
    assert.equal(contaCaractere(str, caratere), 2)
  })

  it('Deve rretornar a quantidade de ocorrências de caractere [2]', async () => {
    const str = 'test', caratere = 't'
    assert.equal(contaCaractere(str, caratere), 2)
  })

  it('Deve retornar a quantidade de ocorrências de caractere [3]', async () => {
    const str = 'casa', caratere = 'c'
    assert.notEqual(contaCaractere(str, caratere), 4)
  })
})

describe('retiraEspacosDesnecessarios', () => {
  it('Deve retornar string sem espaços desnecessários [1]', async () => {
    const str = 'test  de    espacos    '
    assert.equal(retiraEspacosDesnecessarios(str), 'test de espacos')
  })

  it('Deve rretornar string sem espaços desnecessários [2]', async () => {
    const str = '    test remove  espacos    '
    assert.equal(retiraEspacosDesnecessarios(str), 'test remove espacos')
  })

  it('Deve retornar string sem espaços desnecessários [3]', async () => {
    const str = '    test remove  espacos    '
    assert.notEqual(retiraEspacosDesnecessarios(str), ' test remove espacos ')
  })
})

describe('ehPalindroma', () => {
  it('Deve retornar true se string for palindroma [1]', async () => {
    const str = 'akasaka'
    assert.equal(ehPalindroma(str), true)
  })

  it('Deve rretornar true se string for palindroma [2]', async () => {
    const str = 'radar'
    assert.equal(ehPalindroma(str), true)
  })

  it('Deve retornar true se string for palindroma [3]', async () => {
    const str = 'rotestor'
    assert.notEqual(ehPalindroma(str), true)
  })
})

describe('tenisPolar', () => {
  it('Deve retornar a string após o TENIS POLAR [1]', async () => {
    const str = 'AMBULANCIA'
    assert.equal(tenisPolar(str), 'IMBUNILCAI')
  })

  it('Deve retornar a string após o TENIS POLAR [2]', async () => {
    const str = 'TENIS'
    assert.equal(tenisPolar(str), 'POLAR')
  })

  it('Deve retornar a string após o TENIS POLAR [3]', async () => {
    const str = 'LABORATORIO'
    assert.equal(tenisPolar(str), 'NIBESIPESAE')
  })
})

describe('criptografar', () => {
  it('Deve retornar string criptografada pelas consoantes [1]', async () => {
    const str = 'casa nova'
    assert.equal(criptografar(str), 'a#o# a#a#')
  })

  it('Deve retornar string criptografada pelas consoantes [2]', async () => {
    const str = 'cidade'
    assert.equal(criptografar(str), 'e#a#i#')
  })

  it('Deve retornar string criptografada pelas consoantes [3]', async () => {
    const str = 'cidade'
    assert.notEqual(criptografar(str), '#d#d#c')
  })
})

describe('estaNoComeco', () => {
  it('Deve retornar true se string menor está no começo [1]', async () => {
    const menor = 'paralelo', maior = 'universo paralelo'
    assert.equal(estaNoComeco(menor, maior), false)
  })

  it('Deve retornar true se string menor está no começo [2]', async () => {
    const menor = 'terra', maior = 'terra nossa?'
    assert.equal(estaNoComeco(menor, maior), true)
  })

  it('Deve retornar true se string menor está no começo [3]', async () => {
    const menor = 'cidade', maior = 'cidade azul'
    assert.notEqual(estaNoComeco(menor, maior), false)
  })
})

describe('substringPos', () => {
  it('Deve retornar true se string menor está em pos [1]', async () => {
    const menor = 'vao', maior = 'pavao carvao', pos = 2
    assert.equal(substringPos(menor, maior, pos), true)
  })

  it('Deve retornar true se string menor está em pos [2]', async () => {
    const menor = 'vao', maior = 'pavao carvao', pos = 9
    assert.equal(substringPos(menor, maior, pos), true)
  })

  it('Deve retornar true se string menor está em pos [3]', async () => {
    const menor = 'vao', maior = 'pavao carvao', pos = 3
    assert.notEqual(substringPos(menor, maior, pos), true)
  })
})

describe('numSubstring', () => {
  it('Deve retornar quantidade de ocorrências do menor em maior [1]', async () => {
    const menor = 'MAE', maior = 'MAEDE DEMAE DEMAE'
    assert.equal(numSubstring(menor, maior), 3)
  })

  it('Deve retornar quantidade de ocorrências do menor em maior [2]', async () => {
    const menor = 'RAD', maior = 'RADA DARAD RAAD'
    assert.equal(numSubstring(menor, maior), 2)
  })

  it('Deve retornar quantidade de ocorrências do menor em maior [3]', async () => {
    const menor = 'RAD', maior = 'RADA DARAD RAAD'
    assert.notEqual(numSubstring(menor, maior), 3)
  })
})

describe('ehAnagrama', () => {
  it('Deve retornar true se A e B forem anagramas [1]', async () => {
    const A = 'RODA', B = 'DOAR'
    assert.equal(ehAnagrama(A, B), true)
  })

  it('Deve retornar true se A e B forem anagramas [2]', async () => {
    const A = 'AMOR', B = 'ROMA'
    assert.equal(ehAnagrama(A, B), true)
  })

  it('Deve retornar true se A e B forem anagramas [3]', async () => {
    const A = 'RAD', B = 'DRA'
    assert.notEqual(ehAnagrama(A, B), true)
  })
})