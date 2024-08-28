function encontrarMaiorElemento(array) {
    var maiorElemento = array[0];
    var temp;
    var tamanhoArray = array.length;
    for (var index = 1; index < tamanhoArray; index++) {
        temp = array[index];
        maiorElemento < temp ? maiorElemento = temp : maiorElemento;
    }
    return maiorElemento;
}
// Exemplo de uso:
var maiorNumero = encontrarMaiorElemento([10, 20, 30]); // 30
console.log(maiorNumero);
var maiorPalavra = encontrarMaiorElemento(['gato', 'elefante', 'zebra']); // 'zebra'
console.log(maiorPalavra);
