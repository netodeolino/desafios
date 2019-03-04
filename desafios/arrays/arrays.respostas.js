/*
  Implemente uma função que recebe um array e retorna o seu menor valor.
*/
function menor(array) {
  let menor = array[0]
  for (let i = 0; i < array.length; i++) {
    if (array[i] < menor) {
      menor = array[i]
    }
  }
  return menor
}

/*
  Implemente uma função que recebe um array e retorna o seu maior valor.
*/
function maior(array) {
  let maior = array[0]
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maior) {
      maior = array[i]
    }
  }
  return maior
}

/*
  Implemente uma função que recebe um array e retorna o seu maior valor
  somado com o menor valor.
*/
function somaMaiorMenor(array) {
  const valorMaior = maior(array)
  const valorMenor = menor(array)
  return valorMaior + valorMenor
}

/*
  Implemente uma função que copia os valores de um array dentro de um novo.
*/
function copiar(array) {
  let arrayNovo = []
  for (let i = 0; i < array.length; i++) {
    arrayNovo[i] = array[i]
  }
  return arrayNovo
}

/*
  Implemente uma função que soma todos valores de um array.
*/
function soma(array) {
  let soma = 0
  for (let i = 0; i < array.length; i++) {
    soma += array[i]
  }
  return soma
}

/*
  Implemente uma função que retorna true se elem existe no array.
*/
function existe(array, elem) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == elem) {
      return true
    }
  }
  return false
}

/*
  Implemente uma função que retorna quantas vezes um elemento se repete no array.
*/
function numRepeticao(array, elem) {
  let cont = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] == elem) {
      cont++
    }
  }
  return cont
}

/*
  Implemente uma função que retorna true se dois arrays são iguais.
  Caso contrário, retorne false.
*/
function saoIguais(array1, array2) {
  if (array1.length != array2.length) {
    return false
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] != array2[i]) {
      return false
    }
  }
  return true
}

/*
  Implemente uma função que retorna se um elem existe em dois arrays distintos.
*/
function elemComum(array1, array2, elem) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] == elem) {
      for (let z = 0; z < array2.length; z++) {
        if (array2[z] == elem) {
          return true
        }
      }
    }
  }
  return false
}

function estaContido(array1, array2) {
  return false
}

function swapElem(array, posicao1, posicao2) {
  return null
}

function swapArray(array1, array2) {
  return null
}

function inverte(array) {
  return null
}

function media(array) {
  return 0
}

function isOrdenado(array) {
  return false
}

function inserirNoFim(array, elem) {
  return null
}

function removerComSwap(array, posicao) {
  return null
}

function arrayParaInt(array) {
  return 0
}

function removeRepetidos(array) {
  return null
}

function somaArray(array1, array2) {
  return null
}

module.exports = {
  menor, maior, somaMaiorMenor, copiar, soma, existe, numRepeticao, saoIguais, elemComum
}