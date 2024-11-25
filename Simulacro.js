//Fran Braulio
//Tipo de examen: B


//Clase Padre
class Publicacion{
    static ISBN = 1;
    constructor(titulo, autor, tipo){
        this.ISBN = Publicacion.ISBN;
        this.titulo = titulo;
        this.autor = autor;
        this.tipo = tipo;
        this.a_prestamos = new Array();
        let diasPrestamos = new Array(31);
        for(let i = 0;i < 12; i++){
            this.a_prestamos.push( diasPrestamos);
            for(let j = 0; j < diasPrestamos.length; j++){
                diasPrestamos[j] = 0;
            }
        }
        Publicacion.ISBN = Publicacion.ISBN +1;
    }

    get getTipo(){
        return this.tipo;
    }

    get getISBN(){
        return this.ISBN;
    }

    mostrar(){
        console.log(`ISBN: ${this.ISBN}`);
        console.log(`Titulo: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Tipo: ${this.tipo}`);
    }

    
    vecesPrestado(){
        let contador = 0;
        for(let i = 0;i > this.a_prestamos.length; i++){
            for(let i = 0;i > this.a_prestamos.length; i++){
                let a_mes = this.a_prestamos[i];
                if(a_mes[j] > 0){
                    contador ++;
                }
            }
        }
        return contador;
    }
        
}   

//Clases que heredan del Padre
class Comic extends Publicacion{
    constructor(titulo, autor, tipo, ilustrador){
        super(titulo, autor, tipo);
        this.ilustrador = ilustrador;
    }

    mostrar(){
        super.mostrar();
        console.log(`Ilustrador: ${this.ilustrador}`)
    }
}

class Revista extends Publicacion{
    constructor(titulo, autor, tipo, a_prestamos, numRevista, director){
        super(titulo, autor, tipo, a_prestamos);
        this.numRevista = numRevista;
        this.director = director;
    }

    mostrar(){
        super.mostrar();
        console.log(`Numero de revista: ${this.numRevista}`)
        console.log(`Director: ${this.director}`)
    }
}

class Libro extends Publicacion{
    constructor(titulo, autor, tipo, a_prestamos, editorial, idioma){
        super(titulo, autor, tipo, a_prestamos);
        this.editorial = editorial;
        this.idioma = idioma;
    }

    mostrar(){
        super.mostrar();
        console.log(`Editorial: ${this.editorial}`)
        console.log(`Idioma: ${this.idioma}`)
    }
}


class Bibiloteca{
    constructor(a_publicaciones){
        this.a_publicaciones = a_publicaciones;
    }
    

    agrergarPublicacion(publicacion){
        this.a_publicaciones.push(publicacion);
    }
    
    mostrarPublicaciones(){
        console.log("Mostrar Publicaciones")
        for(let i = 0; i < a_publicaciones.length; i++){
            a_publicaciones[i].mostrar();
        }
    }

    registrarPrestamo(ISBN, mes, dia){
        for(let i = 0; i < a_publicaciones.length; i++){
            if(this.a_publicaciones[i].getISBN == ISBN){
                for(let j = 0; j < this.a_publicaciones[i].a_prestamos.length; j++){
                    if(this.a_publicaciones[i].a_prestamos[j] == mes){
                        for(let m = 0; m < this.a_publicaciones[i].a_prestamos[j].length; m++){
                            if(this.a_publicaciones[i].a_prestamos[j].diasPrestamos[m] == dia){
                                this.a_publicaciones[i].a_prestamos[j].diasPrestamos[m] += 1;
                                console.log(`Prestamo registrado el dia ${dia} del mes ${mes} en la publicacion con ISBN ${ISBN}`)
                            }
                        }
                    }
                }
                
            }
        }
    }


}




comic = new Publicacion("as","asd","comic",);
comic.mostrar();
comic2 = new Comic("as","asd","comic","s");
comic2.mostrar();
a_publicaciones = new Array();
biblio = new Bibiloteca(a_publicaciones);
biblio.agrergarPublicacion(comic);
biblio.agrergarPublicacion(comic2);
biblio.mostrarPublicaciones();
biblio.registrarPrestamo(1,2,2);
