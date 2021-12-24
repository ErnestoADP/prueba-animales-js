export default class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        this.nombre = nombre;
        this.edad = edad;
        this.img = img;
        this.comentarios = comentarios;
        this.sonido = sonido;
    }

    get Nombre() {
        return this.nombre;
    }

    get Edad() {
        return this.edad;
    }

    get Img() {
        return this.img;
    }

    get Comentarios() {
        return this.comentarios;
    }

    get Sonido() {
        return this.sonido;
    }

    set Nombre(nombreNew) {
        this.nombre = nombreNew;
    }
    set Edad(edadNew) {
        this.edad = edadNew;
    }
    set Img(imgNew) {
        this.img = imgNew;
    }
    set Comentarios(comentariosNew) {
        this.comentarios = comentariosNew;
    }
    set Sonido(sonidoNew) {
        this.sonido = sonidoNew;
    }
}