class Libro{
    //Recordatorio: la _ antes de los nombres significa que es un input
    constructor(_titulo, _autor, _anyoPublicacion){
        //Atributos de Libro
        this.titulo = _titulo;
        this.autor = _autor;
        this.anyoPublicacion = _anyoPublicacion;
    }

    mostrar_info(){
        console.log(`${this.titulo} de ${this.autor}, publicado en ${this.anyoPublicacion}.`);
    }

    es_clasico(){
        if((new Date().getFullYear() - this.anyoPublicacion) >= 50){
            console.log(`${this.titulo} de ${this.autor}, es clasico.`);
        } 
        else{
            console.log(`${this.titulo} de ${this.autor}, NO es clasico.`);
        }
    }
}

//Ejemplo de uso

//Crea un objeto vacío. Rellena el título y la autora o autor
let libro1 = new Libro("bobi","marc",1900);

//Muestra su información y si es o no un clásico.
libro1.mostrar_info();
//Muestra el objeto

libro1.es_clasico();
console.log(libro1);
//Modifica una propiedad del objeto
libro1.autor = "Fran";
//Recorre las propiedades de objeto y muéstralas
//No hace falta hacer el if con TypeOf porque eso solo hace falta si el objeto es literal 
for (let propiedades in libro1){
    console.log(`${propiedades} = ${libro1[propiedades]}`);
}