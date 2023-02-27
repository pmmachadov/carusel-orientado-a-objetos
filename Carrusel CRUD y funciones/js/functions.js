"use strict";

let posicion = 0;

function buscar(nombreImagen) {
    prompt.toLowerCase();
    for (let i = 0; i < images.length; i++) {
        if (images[i].image.toLowerCase() == nombreImagen) { // images[i].image muestra el nombre de la imagen en la posicion i del array images
            return i;
        }
    }
    return -1;
}

function crearImagen() {
    let imagen = prompt("Ingrese el nombre de la imagen");
    let indice = buscar(imagen);
    if (indice == -1) {
        let nombre = prompt("Ingrese el nombre de la imagen");
        let titulo = prompt("Ingrese el titulo de la imagen");
        let descripcion = prompt("Ingrese la descripcion de la imagen");
        let nuevaImagen = {
            image: imagen,
            name: nombre,
            title: titulo,
            description: descripcion
        };
        images.push(nuevaImagen);
        alert("Imagen agregada con exito");
    } else {
        alert("La imagen ya existe");
    }
}


function borrarImagen() {
    let nombreImagen = prompt("Ingrese el nombre de la imagen");
    let indice = buscar(nombreImagen);
    if (indice == -1) {
        alert("La imagen no existe");
    } else {
        images.splice(indice, 1);
        alert("Imagen eliminada con exito");
    }
}

function modificarImagen() {
    let nombreImagen = prompt("Ingrese el nombre de la imagen");
    let indice = buscar(nombreImagen);
    if (indice == -1) {
        alert("La imagen no existe");
    } else {
        let nombre = prompt("Ingrese el nombre de la imagen");
        let titulo = prompt("Ingrese el titulo de la imagen");
        let descripcion = prompt("Ingrese la descripcion de la imagen");
        images[indice].name = nombre;
        images[indice].title = titulo;
        images[indice].description = descripcion;
        alert("Imagen modificada con exito");
    }
}

function mostrarImagen() {
    let image = RUTA + images[posicion].image;
    document.getElementById("imagen").src = image;
    document.getElementById("nombre").innerHTML = images[posicion].name;
    document.getElementById("titulo").innerHTML = images[posicion].title;
    document.getElementById("descripcion").innerHTML = images[posicion].description;
}

function avanza() {
    posicion++;
    if (posicion >= images.length) {
        posicion = 0;
    }
    mostrarImagen();
}

function retrocede() {
    posicion--;
    if (posicion < 0) {
        posicion = images.length - 1;
    }
    mostrarImagen();
}

function salir() {
    window.close();
}
