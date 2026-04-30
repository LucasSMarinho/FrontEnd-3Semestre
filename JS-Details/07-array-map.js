const numeros = [
    50,
    200,
    250,
    800,
    992.87,
    500,
    9867,
    13,
    99,
    888
]

console.log(`Array original: ${numeros}`)


let numerosDouble = numeros.map((num2x) =>
{
   return num2x * 2;
});

var resultado = "Array modificado:";

numerosDouble.forEach(numerosDouble => {
    resultado += ` ${numerosDouble} |`;
});

resultado = resultado.substring(0, (resultado.length - 2))
console.log(resultado)