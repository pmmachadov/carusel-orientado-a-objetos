let posicionActual = 0;

function avanza() {
    posicionActual++;
    if (posicionActual >= images.length) {
        posicionActual = 0;
    }
    mostrarimage();
}

function retrocede() {
    posicionActual--;
    if (posicionActual < 0) {
        posicionActual = images.length - 1;
    }
    mostrarimage();
}

function mostrarimage() {
    let image = "./img/" + images[posicionActual].image; // En este caso la ruta es la carpeta img es: ./img/
    let name = images[posicionActual].name;
    let title = images[posicionActual].title;
    let description = images[posicionActual].description;
    document.getElementById("image").src = image;
    document.getElementById("image").title = title;
    document.getElementById("image").alt = images[posicionActual].name;
    document.getElementById("nameimage").innerHTML = name;
    document.getElementById("description").innerHTML = description;
}