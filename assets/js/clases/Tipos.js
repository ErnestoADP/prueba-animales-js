import Animal from "./Animal.js";

function reproducirSonido(sonido) {
    let player = document.getElementById("player");
    const rutaObjeto = `./assets/sounds/${sonido}`;
    player.setAttribute("src", rutaObjeto);
    player.play();
}

//León
class Leon extends Animal {
    Rugir() {
        reproducirSonido(this.sonido);
    }
}

//Lobo
class Lobo extends Animal {
    Aullar() {
        reproducirSonido(this.sonido);
    }
}

//Oso
class Oso extends Animal {
    Gruñido() {
        reproducirSonido(this.sonido);
    }
}

//Serpiente
class Serpiente extends Animal {
    Sisear() {
        reproducirSonido(this.sonido);
    }
}

//Águila
class Aguila extends Animal {
    Chillar() {
        reproducirSonido(this.sonido);
    }
}
class Sounds extends Animal {
    EmitirSonido() {
        reproducirSonido(this.sonido);
    }
}

export { Leon, Lobo, Aguila, Oso, Serpiente, Sounds };