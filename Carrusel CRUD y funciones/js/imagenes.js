"use strict";


const images = [
   {  //POSICIÓN 0
      image: "Acuario.jpg",
      name: "Acuario",
      title: "Acuario son los nacidos entre el 21 de enero y el 19 de febrero.",
      description: "Las caracteristicas de Acuario son: Intelectuales, Independientes, Amantes de la libertad, Amantes de la tecnología, Amantes de la naturaleza, Amantes de la música, Amantes de la aventura, Amantes de la libertad, Amantes de la libertad, Amantes de la libertad."
   }
   ,
   {  //1
      image: "Aries.jpg",
      name: "Aries",
      title: "Aries son los nacidos entre el 21 de marzo y el 20 de abril.",
      description: "Las caracteristicas de Aries son: Intelectuales, Independientes, Amantes de la libertad, Amantes de la tecnología, Amantes de la naturaleza, Amantes de la música, Amantes de la aventura, Amantes de la libertad, Amantes de la libertad, Amantes de la libertad."
   }
   ,
   {
      image: "Cancer.jpg",
      name: "Cancer",
      title: "Cancer son los nacidos entre el 21 de junio y el 22 de julio.",
      description: "Las caracteristicas de Cancer son: Intelectuales, Independientes, Amantes de la libertad, Amantes de la tecnología, Amantes de la naturaleza, Amantes de la música, Amantes de la aventura, Amantes de la libertad, Amantes de la libertad, Amantes de la libertad."

   }
   ,
   {
      image: "Capricornio.jpg",
      name: "Capricornio",
      title: "Capricornio son los nacidos entre el 22 de diciembre y el 20 de enero.",
      description: "Las caracteristicas de Capricornio son: Intelectuales, Independientes, Amantes de la libertad, Amantes de la tecnología, Amantes de la naturaleza, Amantes de la música, Amantes de la aventura, Amantes de la libertad, Amantes de la libertad, Amantes de la libertad."
   }
   ,

   {
      image: "Escorpio.jpg",
      name: "Escorpio",
      title: "Escorpio son los nacidos entre el 23 de octubre y el 22 de noviembre.",
      description: "Las caracteristicas de Escorpio son: Intelectuales, Independientes, Amantes de la libertad, Amantes de la tecnología, Amantes de la naturaleza, Amantes de la música, Amantes de la aventura, Amantes de la libertad, Amantes de la libertad, Amantes de la libertad."
   },
   
   {
      image: "Geminis.jpg",
      name: "Geminis",
      title: "Geminis son los nacidos entre el 21 de mayo y el 20 de junio.",
      description: "Las caracteristicas de Geminis son: Intelectuales, Independientes, Amantes de la libertad, Amantes de la tecnología, Amantes de la naturaleza, Amantes de la música, Amantes de la aventura, Amantes de la libertad, Amantes de la libertad, Amantes de la libertad."
   }
   ,

   {
      image: "Leo.jpg",
      name: "Leo",
      title: "Leo son los nacidos entre el 23 de julio y el 22 de agosto.",
      description: "Las caracteristicas de Leo son: Intelectuales, Independientes, Amantes de la libertad, Amantes de la tecnología, Amantes de la naturaleza, Amantes de la música, Amantes de la aventura, Amantes de la libertad, Amantes de la libertad, Amantes de la libertad."
   },
   
   {
      image: "Libra.jpg",
      name: "Libra",
      title: "Libra son los nacidos entre el 23 de septiembre y el 22 de octubre.",
      description: "Las caracteristicas de Libra son: Intelectuales, Independientes, Amantes de la libertad, Amantes de la tecnología, Amantes de la naturaleza, Amantes de la música, Amantes de la aventura, Amantes de la libertad, Amantes de la libertad, Amantes de la libertad."
   },

   {
      image: "Piscis.jpg",
      name: "Piscis",
      title: "Piscis son los nacidos entre el 20 de febrero y el 20 de marzo.",
      description: "Las caracteristicas de Piscis son: Intelectuales, Independientes, Amantes de la libertad, Amantes de la tecnología, Amantes de la naturaleza, Amantes de la música, Amantes de la aventura, Amantes de la libertad, Amantes de la libertad, Amantes de la libertad."
   },
   
   {
      image: "Sagitario.jpg",
      name: "Sagitario",
      title: "Sagitario son los nacidos entre el 23 de noviembre y el 21 de diciembre.",
      description: "Las caracteristicas de Sagitario son: Intelectuales, Independientes, Amantes de la libertad, Amantes de la tecnología, Amantes de la naturaleza, Amantes de la música, Amantes de la aventura, Amantes de la libertad, Amantes de la libertad, Amantes de la libertad."
   },
   
   {
      image: "Tauro.jpg",
      name: "Tauro",
      title: "Tauro son los nacidos entre el 21 de abril y el 20 de mayo.",
      description: "Las caracteristicas de Tauro son: Intelectuales, Independientes, Amantes de la libertad, Amantes de la tecnología, Amantes de la naturaleza, Amantes de la música, Amantes de la aventura, Amantes de la libertad, Amantes de la libertad, Amantes de la libertad."
   },
   
   {
      image: "Virgo.jpg",
      name: "Virgo",
      title: "Virgo son los nacidos entre el 23 de agosto y el 22 de septiembre.",
      description: "Las caracteristicas de Virgo son: Intelectuales, Independientes, Amantes de la libertad, Amantes de la tecnología, Amantes de la naturaleza, Amantes de la música, Amantes de la aventura, Amantes de la libertad, Amantes de la libertad, Amantes de la libertad."
   },
];

const TEMA = 'Signos del Zodiaco';
document.getElementById('tema').innerHTML = TEMA;
const RUTA = "./img/";


