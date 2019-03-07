/*
  Implemente uma função que soma todos os numeros de 1 a 10.
*/
function soma1Ate10() {
  let soma = 0
  for (let i = 1; i <= 10; i++) {
    soma += i
  }
  return soma
}

/*
  Implemente uma função que soma todos os numeros de zero ate o num
*/
function somatorio(num) {
  let soma = 0
  for(i = 0; i <= num; i++){
    soma += i
  }
  return soma
}

/*
  Implemente uma função que retorna quantos números ímpares e divisíveis por 3 existem entre 0 e 500.
*/
function imparesDe3Ate500() {
  let num = 0
  let cont = 0
  while (num <= 500) {
    if (num%2 != 0 && num%3 == 0) {
      cont++
    }
    num++
  }	
  return cont
}


/*
  Uma determinada especie de Bacteria se divide a cada segundo, dizendo que eu
  começo com uma população de apenas 1 bacteria, quantas bacteria eu terei após
  N segundos...
*/
function bacteria(seg) {
  let rece = 1
  let num = 0
  while (num < seg) {
    rece *= 2
    num++
  }
  return rece
}

/*
  Implemente uma função que retorne a soma dos primeiros 200 números naturais que sejam divisíveis
  por 3 mas que não sejam divisíveis por 7.
*/
function somaDivisiveis() {
  let soma = 0
  for (let i = 0; i < 200; i++) {
    if (i%3 == 0 && i%7 != 0) {
      soma += i
    }
  }
  return soma
}

/*
  Implemente uma função diz se um numero e primo ou nao
*/
function ehPrimo(num) {
  if (num <= 1) {
    return false
  }
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false
    }
  }
  return true
}

/*
  Implemente uma função que diz quantos primos existem entre 0 e num incluindo num
*/
function primeirosPrimos(num) {
  let cont = 0
  for (let i = 1; i <= num; i++) {
    if (ehPrimo(i) == true) {
      cont++
    }
  }
  return cont
}

/*
  Implemente que soma todos os primos de 1 a num
*/
function somaPrimos(num) {
  let soma = 0
  for (let i = 1; i <= num; i++) {
    if (ehPrimo(i)) {
      soma += i
    }
  }
  return soma
}


/*
  Dado um num N como entrada, determinar no conjunto {1 · · · N} a soma
  de todos os não-primos subtraída da soma dos primos.
*/
function naoPrimosMenosPrimo(num) {
  let soma = 0  
  for (let i = 1; i <= num; i++) {
    if (ehPrimo(i) != true) {
      soma += i
    }
  }
  return soma - somaPrimos(num)
}

/*
  Implemente que calcula a potencia eira positiva de um numero
*/
function potencia(base, expoente) {
  potencia = 1
  for (let i = 1; i <= expoente; i++) {
    potencia *= base
  }
  return potencia
}

/*
  Um quadrado perfeito é um número natural cuja raiz quadrada também
  pertence aos naturais. O conjunto dos quadrados perfeitos é {1, 4, 9, 16, 25, 36, 49, ...}.
  Dado um num de entrada determinar, sem uso de operadores reais
  (como raiz quadrada, por exemplo), se ele é retorne verdadeiro senão retorne falso.
*/
function ehQuadradoPerfeito(num) {
  for (let i = 1; i <= num; i++) {
    if (i * i == num) {
      return true
    }
  }
  return false
}

/*
  Implemente que calcule o fatorial de um numero
*/
function fatorial(numero) {
  let rece = 1
  for (let i = 1; i <= numero; i++) {
    rece *= i
  }
  return rece
}

/*
  Voce deve retornar o enesimo termo da sequencia 1, 2 , 4, 8, 16, 32, 64

  Ex: se num for 1, voce retorna 1. se num for 4, voce retorna 8.
*/
function sequencia1(num) {
  let val = 1
  for (let i = 1; i < num; i++) {
    val *= 2
  }
  return val
}

/*
  Voce deve retornar o enesimo termo da sequencia 1, 3, 7, 15, 31, 63, 127...
*/
function sequencia2(num) {
  let val = 1
  for (let i = 1; i < num; i++) {
    val = (val + val) + 1
  }
  return val
}

/*
  Voce deve retornar o enesimo termo da sequencia 2, -3, 4, -5, 6, -7, 8, -9 ...
*/
function sequencia3(num) {
  let val = 2
  for (let i = 1; i < num; i++) {
    val++
  }
  if (val % 2 == 0) {
    return val
  }
  return val * (-1)
}

/*
  Voce deve retornar o enesimo termo da sequencia 3, -6, 15, -42, 123, -366
*/
function sequencia4(num) {
  let val = 3

  for (let i = 1; i < num; i++) {
    val = (val * 3) -3
  }
  if (val % 2 == 0) {
    return val * (-1)
  }
  return val
}

module.exports = {
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
}