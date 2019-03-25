/*
  Faça uma função que receba duas strings e compara as mesmas, verificando se são iguais.
*/
function verifica(str1, str2) {
  let tam = str1.length
  for (let i = 0; i < tam; i++) {
    if (str1[i] != str2[i]) {
      return false
    }
  }
  return true
}

/*
  Faça uma função que receba uma string e verifica se é minúscula, caso ela seja retorne true, se não, retorne false.
*/
function minuscula(str) {
  return false
}

/*
  Faça uma função que receba uma string e verifica se é maiuscula, caso ela seja retorne true, se não, retorne false.
*/
function maiuscula(str) {
  return false
}

/*
  Faça uma função que receba uma string e verifica se há espaço, caso tenha algum espaço retorne true, se não, retorne false.
*/
function verificaEspaco(str) {
  let tam = str.length
  for (let i = 0; i < tam; i++) {
    if (str[i] == ' ') {
      return true
    }
  }
  return false
}

/*
  Faça uma função que recebe uma string e retorne o seu tamanho (sem usar o length).
*/
function tamanhoString(str) {
  return 0
}

/*
  Faça uma função que recebe duas strings, compare o tamanho da duas e retorne o tamanho da maior string.
*/
function comparaStrings(str1, str2) {
  return 0
}

/*
  Faça uma funçao que recebe uma string e deixe a mesma maiúscula.
*/
function stringMaiuscula(str) {
}

/*
  Faça uma função que crie uma nova string a partir de dest até o tam e retorne a mesma.
*/
function strCopy(dest, tam) {
  return ''
}

/*
  Faça uma funçao que recebe uma string e retorna a soma dos valores
  do codigo ASCII dos seus caracteres
*/
function somaCodigoASCII(str) {
  return 0
}

/*
  Escreva uma função em que recebe como parâmetro uma cadeia e um caractere, e retorna
  como resultado o número de ocorrências desse caractere na cadeia passada como parâmetro.
*/
function contaCaractere(str, caractere) {
  return 0
}

/*
  Faça uma funçao que recebe uma string, retira espaços desnecessários e retorna.
  EXEMPLO
  string 1: LABORATORIO     DE      PROGRAMACAO      I
  depois da função:
  string 2: LABORATORIO DE PROGRAMACAO I
*/
function retiraEspacosDesnecessarios(str) {
  return ''
}

/*
  Uma string é um palíndromo se a sequência dos caracteres da esquerda para
  direita é igual à seqüência da direita para a esquerda. Por exemplo,são
  palíndromos "ARARA", "RADAR", "AKASAKA" e "ANA". Faça uma função que dada
  uma string de entrada retorne true, caso seja palindroma ou retorne false se não um palíndromo.
*/
function ehPalindroma(str) {
  return false
}

/*
  Faça uma função que receba uma string e retorne a mesma string codificada pelo método
  TENIS-POLAR: Para cada letra da string que aparece nas palavras, deve-se substituí-la pela letra
  correspondente na outra palavra. Troca-se P por T, T por P, E por O, O por E etc. As demais
  permanecem como no original.
  Letras que trocam
  T E N I S
  P O L A R
  Exemplo
  LABORATORIO
  NIBESIPESAE
*/
function tenisPolar(nome) {
}

/*
  Faça uma funçao que recebe uma string e modifica ela própria. A string deve ser
  criptografada, trocando as consoantes por # e invertendo a string.
  EXEMPLO:
  string entrada: sua casa
  depois da função: a#a# au#
*/
function criptografar(nome) {
}

/*
  Retorne a a string menor esta no comeco da string maior
  Exemplo:
  menor = "pavao"
  maior = "pavao eh lindo"
*/
function estaNoComeco(menor, maior) {
  return false
}

/*
  Faca uma funcao que recebe uma substring menor, e uma string maior e verifica se a substring pode ser encontrada na posicao passada na substring maior.
  Ex: menor = "bin"
  maior = "o bin laden e o bingo"
  se pos = 2 ou 16 voce deve retornar true,
  e false caso contrario
*/
function substringPos(menor, maior, pos) {
  return false
}

/*
  Escreva uma função em que recebe como parâmetro uma substring e uma string e
  retorna como resultado o número de ocorrências da substring na string.
*/
function numSubstring(menor, maior) {
  return 0
}

/*
  Faça uma função que receba duas strings e retorne true, se uma for anagrama
  da outra, ou retorne false se não for anagrama.
  Lembre-se, uma palavra é anagrama de outra se é formada pelas mesmas letras
  mas que podem estar em ordem diferente.
  Sugestao: que tal ordenar a string??
  EXEMPLO: ALMA LAMA | true
  AMOR ROMA | true
  RODA DOAR | true
  BOLA DAMA | false
*/
function ehAnagrama(A, B) {
  return false
}

module.exports = {
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
}