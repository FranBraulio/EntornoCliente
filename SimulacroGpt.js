class Publicacion {
    static contadorISBN = 1; // Contador estático para el ISBN autoincremental
  
    constructor(titulo, autor, tipo) {
      this.isbn = Publicacion.contadorISBN++; // Asigna y autoincrementa el ISBN
      this.titulo = titulo; // Título de la publicación
      this.autor = autor; // Autor
      this.tipo = tipo; // Tipo de publicación (libro, cómic, revista)
      this.prestamos = Array(12).fill(null).map(() => Array(31).fill(0)); // Matriz de préstamos por mes/día
    }
  
    // Método para obtener el tipo de la publicación
    getTipo() {
      return this.tipo;
    }
  
    // Método para mostrar los datos de la publicación
    mostrar() {
      return `ISBN: ${this.isbn}
      Título: ${this.titulo}
      Autor: ${this.autor}
      Tipo: ${this.tipo}
      `;
    }
  
    // Método para registrar un préstamo en una fecha específica
    registrarPrestamo(mes, dia) {
      if (mes >= 1 && mes <= 12 && dia >= 1 && dia <= 31) {
        this.prestamos[mes - 1][dia - 1]++;
        return `Préstamo registrado para el día ${dia} del mes ${mes} para la publicación con ISBN ${this.isbn}.`;
      } else {
        return `Fecha inválida. No se puede registrar el préstamo.`;
      }
    }
  
    // Método para calcular el número total de préstamos en todo el año
    vecesPrestado() {
        let total = 0;
      
        // Recorrer los meses
        for (let i = 0; i < this.prestamos.length; i++) {
          const mes = this.prestamos[i];
      
          // Recorrer los días del mes
          for (let j = 0; j < mes.length; j++) {
            total += mes[j]; // Sumar los préstamos del día
          }
        }
      
        return total;
      }
      
  }
  

  class Comic extends Publicacion {
    constructor(titulo, autor, ilustrador) {
      super(titulo, autor, "Cómic");
      this.ilustrador = ilustrador;
    }
  
    mostrar() {
      return super.mostrar() + `Ilustrador: ${this.ilustrador}`;
    }
  }
  
  class Revista extends Publicacion {
    constructor(titulo, autor, numero, editorial) {
      super(titulo, autor, "Revista");
      this.numero = numero;
      this.editorial = editorial;
    }
  
    mostrar() {
      return super.mostrar() + `Número: ${this.numero} \n\tEditorial: ${this.editorial}`;
    }
  }
  
  class Libro extends Publicacion {
    constructor(titulo, autor, editorial, idioma) {
      super(titulo, autor, "Libro");
      this.editorial = editorial;
      this.idioma = idioma;
    }
  
    mostrar() {
      return super.mostrar() + `Editorial: ${this.editorial} \n\tIdioma: ${this.idioma}`;
    }
  }
  

  class Biblioteca {
    constructor() {
      this.publicaciones = [];
    }
  
    agregarPublicacion(publicacion) {
      this.publicaciones.push(publicacion);
    }
  
    mostrarPublicaciones() {
        let resultado = "";
      
        for (let i = 0; i < this.publicaciones.length; i++) {
          const pub = this.publicaciones[i];
          resultado += pub.mostrar(); // Añadir la representación de la publicación
      
          // Añadir un separador entre publicaciones (excepto para la última)
          if (i < this.publicaciones.length - 1) {
            resultado += "\n\n";
          }
        }
      
        return resultado;
      }
      
  
      registrarPrestamo(isbn, mes, dia) {
        let publicacion = null;
      
        // Buscar la publicación con el ISBN dado
        for (let i = 0; i < this.publicaciones.length; i++) {
          if (this.publicaciones[i].isbn === isbn) {
            publicacion = this.publicaciones[i];
            break; // Salimos del bucle cuando encontramos la publicación
          }
        }
      
        // Si se encontró la publicación
        if (publicacion) {
          return publicacion.registrarPrestamo(mes, dia);
        } else {
          // Si no se encontró
          return `No se encontró una publicación con el ISBN ${isbn}.`;
        }
      }
      
  
    bestSellers() {
        // Crear un array para almacenar el ranking
        const ranking = [];
      
        // Construir el array de objetos con los datos necesarios
        for (let i = 0; i < this.publicaciones.length; i++) {
          const pub = this.publicaciones[i];
          ranking.push({
            isbn: pub.isbn,
            titulo: pub.titulo,
            tipo: pub.tipo,
            vecesPrestado: pub.vecesPrestado(),
          });
        }
      
        // Ordenar el array de mayor a menor por vecesPrestado
        for (let i = 0; i < ranking.length - 1; i++) {
          for (let j = i + 1; j < ranking.length; j++) {
            if (ranking[i].vecesPrestado < ranking[j].vecesPrestado) {
              const temp = ranking[i];
              ranking[i] = ranking[j];
              ranking[j] = temp;
            }
          }
        }
      
        // Seleccionar los 5 primeros elementos del ranking
        const top5 = [];
        for (let i = 0; i < Math.min(5, ranking.length); i++) {
          top5.push(ranking[i]);
        }
      
        // Construir el resultado final
        let resultado = "";
        for (let i = 0; i < top5.length; i++) {
          const pub = top5[i];
          resultado += `${i + 1}. ISBN: ${pub.isbn}, Título: ${pub.titulo} (${pub.tipo}) - Prestado ${pub.vecesPrestado} veces\n`;
        }
      
        return resultado.trim();
    }
      
  
    diaConMasPrestamos() {
        // Crear la matriz para almacenar los préstamos totales
        const prestamosTotales = [];
        for (let i = 0; i < 12; i++) {
          prestamosTotales[i] = [];
          for (let j = 0; j < 31; j++) {
            prestamosTotales[i][j] = 0;
          }
        }
      
        // Sumar los préstamos de cada publicación
        for (let i = 0; i < this.publicaciones.length; i++) {
          const pub = this.publicaciones[i];
          for (let mes = 0; mes < 12; mes++) {
            for (let dia = 0; dia < 31; dia++) {
              prestamosTotales[mes][dia] += pub.prestamos[mes][dia];
            }
          }
        }
      
        // Buscar el día con más préstamos
        let maxPrestamos = 0;
        let diaMax = { mes: 0, dia: 0 };
      
        for (let mes = 0; mes < 12; mes++) {
          for (let dia = 0; dia < 31; dia++) {
            if (prestamosTotales[mes][dia] > maxPrestamos) {
              maxPrestamos = prestamosTotales[mes][dia];
              diaMax = { mes: mes + 1, dia: dia + 1 }; // Ajustar para representar meses y días como 1-indexados
            }
          }
        }
      
        return `El día con más préstamos es el ${diaMax.dia} del mes ${diaMax.mes}, con un total de ${maxPrestamos} préstamos.`;
      }
      
  }

  const biblioteca = new Biblioteca();

const p1 = new Comic("Sandman", "Neil Gaiman", "Sam Kieth");
const p2 = new Revista("Métode", "Universidad de Valencia", 12, "Marti Domingez");
const p3 = new Libro("Opiniones de un payaso", "Heinrich Boll", "Seix Barral", "es");
const p4 = new Libro("Apuntes del subsuelo", "Dostoyevski", "Alianza", "es");


biblioteca.agregarPublicacion(p1);
biblioteca.agregarPublicacion(p2);
biblioteca.agregarPublicacion(p3);
biblioteca.agregarPublicacion(p4);

console.log(biblioteca.mostrarPublicaciones());
biblioteca.registrarPrestamo(p1.isbn, 5, 15);
biblioteca.registrarPrestamo(p3.isbn, 5, 15);
biblioteca.registrarPrestamo(p2.isbn, 6, 10);
biblioteca.registrarPrestamo(p4.isbn, 6, 10);

console.log(biblioteca.bestSellers());
console.log(biblioteca.diaConMasPrestamos());
