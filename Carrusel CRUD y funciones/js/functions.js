"use strict";

let posicion = 0;

function buscar(nombreImagen) {
    let promptValue = prompt("Ingrese el nombre de la imagen a buscar").toLowerCase();
    for (let i = 0; i < images.length; i++) {
        if (images[i].name.toLowerCase() == promptValue) {
            return alert(`La imagen ${images[i].name} existe en la posición ${i}`);
        }
    }
    return alert("La imagen no existe");
}

function crearImagen() {
    let nombre = prompt("Ingrese el nombre de la imagen");
    let titulo = prompt("Ingrese el titulo de la imagen");
    let descripcion = prompt("Ingrese la descripcion de la imagen");
    let imagen = {
        image: nombre + ".jpg",
        name: nombre,
        title: titulo,
        description: descripcion
    };
    images.push(imagen);
    alert("Imagen creada con exito");
}

function borrarImagen() {
    const nombreImagen = prompt("Ingrese el nombre de la imagen");
    const image = images.find(image => image.name.toLowerCase() == nombreImagen);
    if (image) {
        const index = images.indexOf(image);
        confirm("¿Está seguro de eliminar la imagen?");
        images.splice(index, 1); // Elimina el elemento en la posición index y solo 1 elemento
        alert("Imagen eliminada con exito");
    } else {
        alert("La imagen no existe");
    }
    mostrarImagen();
}
console.log(images);


function modificarImagen() {
    let nombreImagen = prompt("Ingrese el nombre de la imagen");
    let posicion = images.findIndex(image => image.name.toLowerCase() == nombreImagen);
    if (posicion == -1) {
        alert("La imagen no existe");
    } else {
        let name = prompt("Ingrese el nombre de la imagen");
        let title = prompt("Ingrese el titulo de la imagen");
        let description = prompt("Ingrese la descripcion de la imagen");
        images[posicion].name = name;
        images[posicion].title = title;
        images[posicion].description = description;
        alert("Imagen modificada con exito");
    }
}

function mostrarImagen() {
    let image = "./img/" + images[posicion].image;
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
console.log(images);

}

function retrocede() {
    posicion--;
    if (posicion < 0) {
        posicion = images.length - 1;
    }
    mostrarImagen();
console.log(images);

}

function salir() {
    window.close();
}
