// Escribe tu código aquí.

// 1.
function filtrarPalabras(cadenaDeComparacion, arrayDeComparacion) {
    return arrayDeComparacion.filter(palabra => palabra.length > cadenaDeComparacion.length);
}// function

// cadena de comparacion
const cadena = "zelda";
// arreglo de comparacion
const myArray = ["musica", "dibujar", "audifonos", "gato", "morado"];

// uso de la funcion filtrar palabras
const resultado = filtrarPalabras(cadena, myArray);

// resultado en la consola
console.log("Palabras más largas:", resultado);


// 2.
// div del index con bootstrap
let divLista = document.getElementById("lista");

// funcion para crear listas con el array[] de la parte 1.
function imprimirLista(lista) {
    divLista.insertAdjacentHTML("beforeend", `
        <a href="#" class="list-group-item list-group-item-action list-group-item-success">${lista[0]}</a>
        <a href="#" class="list-group-item list-group-item-action list-group-item-danger">${lista[1]}</a>
        <a href="#" class="list-group-item list-group-item-action list-group-item-warning">${lista[2]}</a>
        <a href="#" class="list-group-item list-group-item-action list-group-item-info">${lista[3]}</a>
        <a href="#" class="list-group-item list-group-item-action list-group-item-light">${lista[4]}</a>
    `);
}

imprimirLista(myArray);