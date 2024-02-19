

console.log("hola mundo");

// funcion que recoja  una cantidad de numeros indeterminados
function sumar(...numeros: number[]): number {
    return numeros.reduce((total, num) => total + num);
}

sumar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);



console.log("hola mundo cruel");




