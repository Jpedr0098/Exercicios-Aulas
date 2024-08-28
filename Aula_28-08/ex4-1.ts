function encontrarMaiorElemento<T>(array: T[]): T {
    let maiorElemento = array[0];
    let temp;
    const tamanhoArray = array.length;

    for (let index = 1; index < tamanhoArray; index++) {
        temp = array[index];
        maiorElemento < temp ? maiorElemento = temp : maiorElemento
    }

    return maiorElemento;
}

// Exemplo de uso:
const maiorNumero = encontrarMaiorElemento([10, 20, 30]);  // 30
console.log(maiorNumero);
const maiorPalavra = encontrarMaiorElemento(['gato', 'elefante', 'zebra']);  // 'zebra'
console.log(maiorPalavra);