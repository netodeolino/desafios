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

/*
  Implemente uma função que retorna se array2 está contido em array1.
*/
function estaContido(array1, array2) {
  let achou = false
  for (let i = 0; i < array2.length; i++) {
    let cont = 0
    while (cont + i < array2.length) {
      if (array2[cont + i] != array1[cont]) {
        achou = false
        break
      } else {
        cont++
        if (cont == array1.length) {
          achou = true
          break
        }
      }
    }
    if (achou == true) {
      break
    }
  }
  return achou
}

/*
  Implemente uma função que inverte os valores da posicao1 com a posicao2 do array.
*/
function swapElem(array, posicao1, posicao2) {
  let aux = array[posicao1]
  array[posicao1] = array[posicao2]
  array[posicao2] = aux
  return array
}

/*
  Implemente uma função que inverte os valores do array1 com o array2.
  Obs.: O retorno deve ser no padrão: return { novoArray1: array1, novoArray2: array2 }
*/
function swapArray(array1, array2) {
  let aux = 0
  for (let i = 0; i < array1.length; i++) {
    aux = array1[i]
    array1[i] = array2[i]
    array2[i] = aux
  }
}

/*
  Implemente uma função que inverte o array na ordem contrária.
*/
function inverte(array) {
  let aux = null
  for (let i = 0; i < array.length/2; i++) {
    aux = array[i]
    array[i] = array[array.length-i-1]
    array[array.length-i-1] = aux
  }
}

/*
  Implemente uma função que retorna a media aritimética dos valores no array.
*/
function media(array) {
  let soma = 0
  for (let i = 0; i < array.length; i++) {
    soma += array[i];
  }
  return soma/array.length
}

/*
  Implemente uma função que verifica se um array está ordenado.
*/
function isOrdenado(array) {
  if (array.length == 1) {
    return true
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i+1]) {
      return false
    }
  }
  return true
}

/*
  Implemente uma função que insere um elem no fim do array.
*/
function inserirNoFim(array, elem) {
  array.push(elem)
  return array
}

/*
  Implemente uma função que faz o swap da ultima posição com valor da posicao
  e apaga o último elemento do array.
*/
function removerComSwap(array, posicao) {
  if (posicao == -1) {
    return array
  }
  array[posicao] = array[array.length-1]
  array.pop()
  return array
}

/*
  Implemente uma função que transforma um array em um número inteiro e retorna
  esse valor. Ex.: [1, 2, 3, 4] = 1234
*/
function arrayParaInt(array) {
  let aux = 0
  aux = array[0]
  for (let i = 1; i < array.length; i++) {
    aux = (aux * 10) + array[i]
  }
  return aux
}

/*
  Implemente uma função que remove valores repetidos do array.
*/
function removeRepetidos(array) {
  for (let i = 0; i < array.length; i++) {
    if (numRepeticao(array, array[i]) > 1) {
      array.splice(i, 1)
    }
  }
  return array
}

/*
  Implemente uma função que soma os valores do array1 e array2 e adiciona um novo array.
  Ex.: array1 = [10, 5, 30]. array2 = [5, 5, 15]. novo array = [15, 20, 45].
*/
function somaArray(array1, array2) {
  let arrayNovo = []
  for (let i = 0; i < array1.length; i++) {
    arrayNovo[i] = array1[i] + array2[i];
  }
  return arrayNovo
}

module.exports = {
  menor,
  maior,
  somaMaiorMenor,
  copiar,
  soma,
  existe,
  numRepeticao,
  saoIguais,
  elemComum,
  estaContido,
  swapElem,
  swapArray,
  inverte,
  media,
  isOrdenado,
  inserirNoFim,
  removerComSwap,
  arrayParaInt,
  removeRepetidos,
  somaArray
}