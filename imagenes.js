// Variables
const TEMA = 'Ciudades favoritas';
const RUTA = './img/';

const imagenes = [
   {  //POSICIÓN 0
      imagen: "imgAcuario.jpg",
      nombre: "Acuario",
      title: "Acuario son los nacidos entre el 21 de enero y el 19 de febrero.",
      descripcion: "Las caracteristicas de Acuario son: Intelectuales, Independientes, Amantes de la libertad, Amantes de la tecnología, Amantes de la naturaleza, Amantes de la música, Amantes de la aventura, Amantes de la libertad, Amantes de la libertad, Amantes de la libertad."
   }
   ,
   {  //1
      imagen: "imgAries.jpg",
      nombre: "Aries",
      title: "Aries son los nacidos entre el 21 de marzo y el 20 de abril.",
      descripcion: "Las caracteristicas de Aries son: Intelectuales, Independientes, Amantes de la libertad, Amantes de la tecnología, Amantes de la naturaleza, Amantes de la música, Amantes de la aventura, Amantes de la libertad, Amantes de la libertad, Amantes de la libertad."
   }
   ,
   {
      imagen: "imgCancer.jpg",
      nombre: "Cancer",
      title: "Cancer son los nacidos entre el 21 de junio y el 22 de julio.",
      descripcion: "Las caracteristicas de Cancer son: Intelectuales, Independientes, Amantes de la libertad, Amantes de la tecnología, Amantes de la naturaleza, Amantes de la música, Amantes de la aventura, Amantes de la libertad, Amantes de la libertad, Amantes de la libertad."

   }
   ,
   {
      imagen: "imgCapricornio.jpg",
      nombre: "Capricornio",
      title: "Capricornio son los nacidos entre el 22 de diciembre y el 20 de enero.",
      descripcion: "Las caracteristicas de Capricornio son: Intelectuales, Independientes, Amantes de la libertad, Amantes de la tecnología, Amantes de la naturaleza, Amantes de la música, Amantes de la aventura, Amantes de la libertad, Amantes de la libertad, Amantes de la libertad."
   }
   ,

   {
      imagen: "imgEscorpio.jpg",
      nombre: "Escorpio",
      title: "Escorpio son los nacidos entre el 23 de octubre y el 22 de noviembre.",
      descripcion: "Las caracteristicas de Escorpio son: Intelectuales, Independientes, Amantes de la libertad, Amantes de la tecnología, Amantes de la naturaleza, Amantes de la música, Amantes de la aventura, Amantes de la libertad, Amantes de la libertad, Amantes de la libertad."
   },

   {
      imagen: "imgGeminis.jpg",
      nombre: "Geminis",
      title: "Geminis son los nacidos entre el 21 de mayo y el 20 de junio.",
      descripcion: "Las caracteristicas de Geminis son: Intelectuales, Independientes, Amantes de la libertad, Amantes de la tecnología, Amantes de la naturaleza, Amantes de la música, Amantes de la aventura, Amantes de la libertad, Amantes de la libertad, Amantes de la libertad."
   }
   ,

   {
      imagen: "imgLeo.jpg",
      nombre: "Leo",
      title: "Leo son los nacidos entre el 23 de julio y el 22 de agosto.",
      descripcion: "Las caracteristicas de Leo son: Intelectuales, Independientes, Amantes de la libertad, Amantes de la tecnología, Amantes de la naturaleza, Amantes de la música, Amantes de la aventura, Amantes de la libertad, Amantes de la libertad, Amantes de la libertad."
   },

   {
      imagen: "imgLibra.jpg",
      nombre: "Libra",
      title: "Libra son los nacidos entre el 23 de septiembre y el 22 de octubre.",
      descripcion: "Las caracteristicas de Libra son: Intelectuales, Independientes, Amantes de la libertad, Amantes de la tecnología, Amantes de la naturaleza, Amantes de la música, Amantes de la aventura, Amantes de la libertad, Amantes de la libertad, Amantes de la libertad."
   },

   {
      imagen: "imgPiscis.jpg",
      nombre: "Piscis",
      title: "Piscis son los nacidos entre el 20 de febrero y el 20 de marzo.",
      descripcion: "Las caracteristicas de Piscis son: Intelectuales, Independientes, Amantes de la libertad, Amantes de la tecnología, Amantes de la naturaleza, Amantes de la música, Amantes de la aventura, Amantes de la libertad, Amantes de la libertad, Amantes de la libertad."
   },

   {
      imagen: "imgSagitario.jpg",
      nombre: "Sagitario",
      title: "Sagitario son los nacidos entre el 23 de noviembre y el 21 de diciembre.",
      descripcion: "Las caracteristicas de Sagitario son: Intelectuales, Independientes, Amantes de la libertad, Amantes de la tecnología, Amantes de la naturaleza, Amantes de la música, Amantes de la aventura, Amantes de la libertad, Amantes de la libertad, Amantes de la libertad."
   },

   {
      imagen: "imgTauro.jpg",
      nombre: "Tauro",
      title: "Tauro son los nacidos entre el 21 de abril y el 20 de mayo.",
      descripcion: "Las caracteristicas de Tauro son: Intelectuales, Independientes, Amantes de la libertad, Amantes de la tecnología, Amantes de la naturaleza, Amantes de la música, Amantes de la aventura, Amantes de la libertad, Amantes de la libertad, Amantes de la libertad."
   },

   {
      imagen: "imgVirgo.jpg",
      nombre: "Virgo",
      title: "Virgo son los nacidos entre el 23 de agosto y el 22 de septiembre.",
      descripcion: "Las caracteristicas de Virgo son: Intelectuales, Independientes, Amantes de la libertad, Amantes de la tecnología, Amantes de la naturaleza, Amantes de la música, Amantes de la aventura, Amantes de la libertad, Amantes de la libertad, Amantes de la libertad."
   },
];