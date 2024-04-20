export class Animales {
    #nombre
    #edad
    #img
    #comentario
    #sonido

    constructor(nombre, edad, img, comentario, sonido) {
        this.#nombre = nombre
        this.#edad = edad
        this.#img = `./assets/imgs/${img}`
        this.#comentario = comentario
        this.#sonido = `./assets/sounds/${sonido}`
    }

    get nombre() {
        return this.#nombre
    }
    get edad() {
        return this.#edad
    }
    get img() {
        return this.#img
    }
    set newImg(newImg) {
        return this.#img = newImg
    }
    get comentario() {
        return this.#comentario
    }
    set newComentario(newComentario) {
        return this.#comentario = newComentario
    }
    get sonido() {
        return this.#sonido
    }
    set sonido(newSonido) {
        this.#sonido = newSonido;
    }

}

export class Leon extends Animales {
    ruidoLeon() {
        reproducirSonido(this);
    }
}
export class Lobo extends Animales {
    ruidoLobo() {
        reproducirSonido(this);
    }
}
export class Oso extends Animales {
    ruidoOso() {
        reproducirSonido(this);
    }
}
export class Serpiente extends Animales {
    ruidoCulebra() {
        reproducirSonido(this);
    }
}
export class Aguila extends Animales {
    ruidoAguila() {
        reproducirSonido(this);
    }
}