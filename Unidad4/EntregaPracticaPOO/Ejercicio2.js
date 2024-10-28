let pelicula = {
    titulo:"Inception",
    director:"Christopher Nolan",
    año:2010,
    genero:"Ciencia Ficcion",
    mostrar_informacion:function(){
        return `${this.titulo} es una película dirigida por ${this.director}, lanzada en ${this.año}, del género ${this.genero}.`
    }
}

// Uso el método de objeto
console.log(pelicula.mostrar_informacion());
