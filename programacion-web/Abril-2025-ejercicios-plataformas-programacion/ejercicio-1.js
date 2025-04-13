/*
Ejercicio 1

Escriba una función en JavaScript que reciba como parámetro un array de números enteros comprendidos entre 1 y 100 y que escriba por la consola (o la terminal) el número más alto del array (solo el número, sin texto ni otros mensajes).
Suponga que el código que rellena el array y lanza la función ya está escrito.

Ejemplo:
```js
const numeros = [1, 2, 5, 3, 7, 8, 3, 9, 5, 1];
```

Mostrará en la consola:
```txt
9
```
*/

function highestNumber( listOfNumbers ) {

  if( !listOfNumbers ) {
    console.error('El parámetro es null');
    return;
  }

  if( Array.isArray(listOfNumbers) ) {
    console.error('El parámetro no es un array');
    return;
  }

  if( listOfNumbers.length === 0 ) {
    console.error('El array está vacio');
    return;
  }

  let record = listOfNumbers[0];

  for( const number of listOfNumbers ) {
    if( number > record ) {
      record = number;
    }
  }

  console.log(record);
}



const numeros = [1, 2, 5, 3, 7, 8, 3, 9, 5, 1]

highestNumber( numeros );

highestNumber( null );