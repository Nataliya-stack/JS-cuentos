const cuentosClasicos = [
  {
    name: "Caperucita Roja",
    autor: "Charles Perrault / Hermanos Grimm",
    image: "./img/caperucita_roja.jpg",
    info: [
      "Año de publicación: 1697",
      "Personaje principal: Una niña con una capa roja",
      "Famoso por: El lobo feroz y la abuela en la cama",
      "Moraleja oficial: No confiar en extraños"
    ]
  },
  {
    name: "Cenicienta",
    autor: "Charles Perrault / Hermanos Grimm",
    image: "./img/cenicienta.jpg",
    info: [        
      "Año de publicación: 1697",
      "Personaje principal: Una joven huérfana sirvienta",
      "Famoso por: El zapato de cristal y el carruaje de calabaza",
      "Moraleja oficial: La bondad siempre es recompensada"
    ]
  },
  {
    name: "Alicia en el País de las Maravillas",
    autor: "Lewis Carroll",
    image: "./img/alicia.jpg",
    info: [        
      "Año de publicación: 1865",
      "Personaje principal: Una niña curiosa y aventurera",
      "Famoso por: El Gato de Cheshire y el Sombrerero Loco",
      "Moraleja oficial: La curiosidad expande la imaginación"
    ]
  },
  {
    name: "Peter Pan",
    autor: "J. M. Barrie",
    image: "./img/peter_pan.jpg",
    info: [        
      "Año de publicación: 1904",
      "Personaje principal: El niño que no quería crecer",
      "Famoso por: El País de Nunca Jamás y el Capitán Garfio",
      "Año de publicación: 1904",
      "Moraleja oficial: La infancia es eterna en el corazón"
    ]
  },
  {
    name: "Blancanieves",
    autor: "Hermanos Grimm",
    image: "./img/blancanieves.jpg",
    info: [        
      "Año de publicación: 1812",
      "Personaje principal: Una princesa de piel blanca como la nieve",
      "Famoso por: El espejo mágico y los siete enanitos",
      "Moraleja oficial: La belleza interior supera a la envidia"
    ]
  },
  {
    name: "La Sirenita",
    autor: "Hans Christian Andersen",
    image: "./img/sirenita.jpg",
    info: [        
      "Año de publicación: 1837",
      "Personaje principal: Una joven sirena que busca un alma humana",
      "Famoso por: Su hermosa voz y el trato con la bruja del mar",
      "Moraleja oficial: El verdadero amor exige grandes sacrificios"
    ]
  },
  {
    name: "La Bella Durmiente",
    autor: "Charles Perrault / Hermanos Grimm",
    image: "./img/bella_durmiente.jpg",
    info: [        
      "Año de publicación: 1697",
      "Personaje principal: Una princesa maldita al nacer",
      "Famoso por: El huso de la rueca y los cien años de sueño",
      "Moraleja oficial: El destino no se puede evitar pero el amor vence al mal"
    ]
  },
  {
    name: "El Gato con Botas",
    autor: "Charles Perrault",
    image: "./img/gato_con_botas.jpg",
    info: [        
      "Año de publicación: 1697",
      "Personaje principal: Un felino astuto y parlante",
      "Famoso por: Engañar al rey y derrotar al ogro",
      "Moraleja oficial: El ingenio vale más que la herencia"
    ]
  },
  {
    name: "El Patito Feo",
    autor: "Hans Christian Andersen",
    image: "./img/patito_feo.jpg",
    info: [        
      "Año de publicación: 1843",
      "Personaje principal: Una cría de ave rechazada por su aspecto",
      "Famoso por: Su transformación final en un hermoso cisne",
      "Moraleja oficial: No juzgar a nadie por su aparência actual"
    ]
  },
  {
    name: "Juan y las Habichuelas Mágicas",
    autor: "Cuento popular inglés",
    image: "./img/juan_habichuelas.jpg",
    info: [        
      "Año de publicación: 1734",
      "Personaje principal: Un niño pobre que vende su vaca",
      "Famoso por: La planta gigante y el castillo del ogro",
      "Moraleja oficial: La valentía y astucia traen la fortuna"
    ]
  },
  {
    name: "Ricitos de Oro y los Tres Osos",
    autor: "Robert Southey",
    image: "./img/ricitos_oro.jpg",
    info: [        
      "Año de publicación: 1837",
      "Personaje principal: Una niña rubia muy curiosa",
      "Famoso por: Probar las sopas, sillas y camas ajenas",
      "Moraleja oficial: Respeta la privacidad y propiedad ajena"
    ]
  },
  {
    name: "Pulgarcita",
    autor: "Hans Christian Andersen",
    image: "./img/pulgarcita.jpg",
    info: [        
      "Año de publicación: 1835",
      "Personaje principal: Una niña del tamaño de un pulgar",
      "Famoso por: Nacer de una flor y escapar de los sapos",
      "Moraleja oficial: La libertad se encuentra al seguir tu propio camino"
    ]
  },
  {
    name: "Los Músicos de Bremen",
    autor: "Hermanos Grimm",
    image: "./img/musicos_bremen.jpg",
    info: [        
      "Año de publicación: 1819",
      "Personaje principal: Cuatro animales viejos fugitivos",
      "Famoso por: Hacer una torre humana para espantar ladrones",
      "Moraleja oficial: La unión y el trabajo en equipo hacen la fuerza"
    ]
  },
  {
    name: "La Reina de las Nieves",
    autor: "Hans Christian Andersen",
    image: "./img/reina_nieves.jpg",
    info: [        
      "Año de publicación: 1844",
      "Personaje principal: Una niña llamada Gerda buscando a su amigo",
      "Famoso por: El palacio de hielo y los espejos rotos",
      "Moraleja oficial: La lealtad y el amor puro vencen cualquier frialdad"
    ]
  },
  {
    name: "Rapunzel",
    autor: "Hermanos Grimm",
    image: "./img/rapunzel.jpg",
    info: [        
      "Año de publicación: 1812",
      "Personaje principal: Una joven encerrada en una alta torre",
      "Famoso por: Su larguísimo cabello dorado",
      "Moraleja oficial: El amor verdadero siempre encuentra una salida"
    ]
  }
];

const next = document.querySelector("#next");  
const back = document.querySelector("#back"); 
const first = document.querySelector("#first");
const last = document.querySelector("#last");
const btnTimer = document.querySelector("#btn-timer");

let i = 0;  
let temporizador = null; 

function renderCity() {
    const cuentoActual = cuentosClasicos[i];
    
    document.querySelector("#picture").src = cuentoActual.image; 
    document.querySelector("#cuento-name").innerText = cuentoActual.name;
    document.querySelector("#cuento-autor").innerText = cuentoActual.autor;

    const infoContainer = document.querySelector("#cuento-info");
    infoContainer.innerHTML = cuentoActual.info.map(linea => `
        <li class="list-none border-b border-slate-700/20 pb-1 last:border-0">${linea}</li>
    `).join('');
}

function irAlSiguiente() {
    i++;  
    if (i > cuentosClasicos.length - 1) { 
        i = 0; 
    }
    renderCity();
}

function irAlAnterior() {
    i--; 
    if (i < 0) { 
        i = cuentosClasicos.length - 1; 
    }
    renderCity();
}

next.addEventListener("click", irAlSiguiente);
back.addEventListener("click", irAlAnterior);

first.addEventListener("click", () => {
    i = 0;
    renderCity();
});

last.addEventListener("click", () => {
    i = cuentosClasicos.length - 1;
    renderCity();
});

btnTimer.addEventListener("click", () => {
    if (temporizador === null) {
        temporizador = setInterval(irAlSiguiente, 3000);
      
        btnTimer.textContent = "■ STOP";
        btnTimer.classList.add("active");
    } else {
        clearInterval(temporizador);
        temporizador = null; 
       
        btnTimer.textContent = "▶ PLAY";
        btnTimer.classList.remove("active");
    }
});

renderCity();