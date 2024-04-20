import { Animales, Leon, Lobo, Oso, Serpiente, Aguila } from "./animales.module.js";


(()=> {

    const getData = async () => {
        try {
            const response = await fetch("animales.json");
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
            return [];
        }
    };

    const pintarAnimalesDom = document.querySelector("#Animales");
    const botonRegistrar = document.querySelector("#btnRegistrar");
    const previewAnimalDom = document.querySelector("#preview");

    const nombreAnimal = document.querySelector("#animal");

    nombreAnimal.addEventListener('change', async (e) => {
        const valor = e.target.value;
        const data = await getData();
        const { animales } = data;
        const previewAnimals = animales.find((animal) => animal.name === valor);
        previewAnimalDom.style.backgroundImage = `url("./assets/imgs/${previewAnimals.imagen}")`;
    });

    function tarjetaAnimal(animal) {
        return `  
        <div class="cardss container">        
            <div class="">
                <img src="${animal.img}" alt="${animal.nombre}" width="300px">
                <p class="text-light comentario">${animal.comentario}</p>
            </div>
            <div>
                <button id ="buttonSonido" class="btn btn-warning m-4 p-2 "><img src="./assets/imgs/audio.svg" alt="audio-icono" width="50px"></button>
                <audio src="${animal.sonido}"></audio>
            </div>
         </div>`;
    }

    botonRegistrar.addEventListener('click', async () => {
        const nombreAnimal = document.querySelector("#animal").value;
        const edadAnimal = document.querySelector("#edad").value;
        const comentarioAnimal = document.querySelector("#comentarios").value;

        const data = await getData();
        const { animales } = data;
        const busquedaAnimal = animales.find((animal) => animal.name === nombreAnimal);
        let nuevoAnimal;

        if (nombreAnimal && edadAnimal && comentarioAnimal) {
            switch (nombreAnimal) {
                case "Leon":
                    nuevoAnimal = new Leon(nombreAnimal, edadAnimal, busquedaAnimal.imagen, comentarioAnimal, busquedaAnimal.sonido);
                    break;
                case "Lobo":
                    nuevoAnimal = new Lobo(nombreAnimal, edadAnimal, busquedaAnimal.imagen, comentarioAnimal, busquedaAnimal.sonido);
                    break;
                case "Oso":
                    nuevoAnimal = new Oso(nombreAnimal, edadAnimal, busquedaAnimal.imagen, comentarioAnimal, busquedaAnimal.sonido);
                    break;
                case "Serpiente":
                    nuevoAnimal = new Serpiente(nombreAnimal, edadAnimal, busquedaAnimal.imagen, comentarioAnimal, busquedaAnimal.sonido);
                    break;
                case "Aguila":
                    nuevoAnimal = new Aguila(nombreAnimal, edadAnimal, busquedaAnimal.imagen, comentarioAnimal, busquedaAnimal.sonido);
                    break;
            }
        } else {
            alert("Por favor, agregue un comentario antes de agregar.");
        }

        const tarjetaAnimales = tarjetaAnimal(nuevoAnimal);
        pintarAnimalesDom.innerHTML += tarjetaAnimales;

        const allCards = document.querySelectorAll(".cardss");
        allCards.forEach(function (item) {
            item.addEventListener('click', function (e) {
                const audio = item.querySelector("audio");
                const buttonSonido = item.querySelector("#buttonSonido");

                buttonSonido.addEventListener('click', function (e) {
                    audio.play();
                })
            });
        });

        document.querySelector("#animal").selectedIndex = 0;
        document.querySelector("#edad").selectedIndex = 0;
        document.querySelector("#comentarios").value = "";

    });
})();