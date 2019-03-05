/*
  Implemente uma função que retorna quem é maior, A ou B.
*/
function maximoAouB(a, b) {
	if (a > b) {
    return a
  }
  return b
}

/*
  Retornar true se o valor de A for maior que o de B e C
*/
function AMaiorQueBeC(a, b, c) {
	if (a > b && a > c) {
		return true
  }
	return false
}

/*
  Retornar o maior dos numeros A e B e C dados como entrada.
*/
function maximoEntreABC(a, b, c) {
	if (a > b && a > c) {
		return a
  } else if (b > a && b > c) {
		return b
  } else {
		return c
	}
}

/*
  Retornar o maior dos numeros A e B e C e D dados como entrada.
*/
function maximoEntreABCD(a, b, c, d) {
	if (a > b && a > c && a > d) {
		return a
  } else if (b > a && b > c && b > d) {
		return b
	} else if (c > a && c > b && c > d) {
		return c
	} else {
		return d
	}
}

/*
  Retornar true se A esta entre os numeros B e C.
*/
function aEstaNoMeio(a, b, c) {
	if (a > b && a < c) {
		return true
	}
	return false
}

/*
  Dados dois numeros naturais como entrada, determinar o resto da
  divisao do  primeiro pelo segundo quando possível.
*/
function restoDivisao(n1, n2) {
  return n1 % n2
}

/*
  Dados dois numeros naturais como entrada, determinar o resto da
  divisao do maior pelo menor.
*/
function restoDivisaoMaior(n1, n2) {
	if (n1 > n2) {
		return n1 % n2
	}
	return n2 % n1
}

/*
  Implemente uma função que recebe um numero e retorne true se ele for par.
*/
function ehPar(num) {
	if (num % 2 == 0) {
		return true
	}
	return false
}

/*
  Retorne verdadeiro se o numero passado for multiplo de 3.
*/
function ehMultiploDe3(num) {
	if (num % 3 == 0) {
		return true
	}
	return false
}

/*
  Retorne verdadeiro se o numero passado for multiplo do segundo.
*/
function ehMultiploDoNum2(num1, num2) {
	if (num1 % num2 == 0) {
		return true
	}
	return false
}

/*
  Retorne verdadeiro se o resto da divisao do numero num por 3
  for igual a 1 e tambem num for divisivel por 5.
*/
function ehSobra31Div5(num) {
	if (num % 3 == 1 && num % 5 == 0) {
		return true
	}
	return false
}

/*
  Retorne verdadeiro se o num por par, mas nao for divisivel por 4 nem por 6.
*/
function ehParENaodivisivelPor4e6(num) {
	if ((num % 2 == 0) && (num % 4 != 0) && (num % 6 != 0)) {
		return true
	}
	return false
}

/*
  Faca um algoritmo que receba dois numeros eiros e verifique se ha
  a seguinte situacao: se o n1 esta entre 50 e 200 e n2 esta entre -1 e 9.
  A saida deve ser true se os numeros satisfazem a situacao e false
  se nao satisfazem.
*/
function satisfazSituacao(n1, n2) {
	if ((n1 < 200 && n1 > 50) && (n2 < 9 && n2 > -1)) {
		return true
	}
	return false
}

/*
  Se o numero for negativo, inverter deixando positivo e retornar.
  Se for positivo, retornar o valor positivo.
*/
function modulo(num) {
	if (num < 0) {
		return num *= -1
	}
	return num
}


/*
  Se o numero por positivo, retornar o numero multiplicado por 5,
  se for negativo retorne o numero subtraido de 3.
*/
function operacao(num) {
	if (num >= 1) {
		return num *= 5
	}
	return num - 3
}

/*
  Pegue o resto da divisao entre num1 e num2 e multiplique por num1.
  Se o resultado for par, divida por 2. Retorne o resultado.
*/
function operacao2(num1, num2) {
	let resto = (num1 % num2) * num1
	if (resto % 2 == 0) {
    return resto / 2
  }
  return null
}

/*
  Se num1 e num2 forem ambos divisiveis por 3 ou forem ambos divisiveis
  por 5 retorne true.
*/
function ambos3OuAmbos5(num1, num2) {
	if ((num1 % 3 == 0 && num2 % 3 == 0) || (num1 % 5 == 0 && num2 % 5 == 0)) {
    return true
  }
  return false
}

/*
  Retorne true se o resto da divisao de num1 por num2 for igual ao
  resto da divisao de num3 por num4.
*/
function restosIguais(num1, num2, num3, num4) {
	if (num1 % num2 == num3 % num4) {
		return true
  }
	return false
}

/*
  Se o numero for divisivel por 3 retorne 1, se for divisivel por 5 retorne 2,
  se for divisível por 3 e por 5 ao mesmo tempo retorne 3.
*/
function div35(num) {
	if ((num % 3 == 0) && (num % 5 == 0)) {
    return 3
  }
	if (num % 3 == 0) {
		return 1
	}
	if (num % 5 == 0) {
		return 2
	}
	return 0
}

module.exports = {
  maximoAouB,
  AMaiorQueBeC,
  maximoEntreABC,
  maximoEntreABCD,
  aEstaNoMeio,
  restoDivisao,
  restoDivisaoMaior,
  ehPar,
  ehMultiploDe3,
  ehMultiploDoNum2,
  ehSobra31Div5,
  ehParENaodivisivelPor4e6,
  satisfazSituacao,
  modulo,
  operacao,
  operacao2,
  ambos3OuAmbos5,
  restosIguais,
  div35
}