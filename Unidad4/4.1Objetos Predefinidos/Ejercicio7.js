//a) Extrae un número de una cadena. 
let textoA = "Tengo 10 manzanas";
let regExpA = /\d+/;
let resultadoA = regExpA.exec(textoA);
console.log(resultadoA[0]);
//b) Buscar una palabra específica en una cadena. Busca la subcadena "ACGT"
let textoB = "El DNA está formado por las bases ACGT, que se combinan para almacenar la información genética.";
let regExpB = /(ACGT)+/;
let resultadoB = regExpB.exec(textoB);
console.log(resultadoB[0]);
//c) Encuentra todas las coincidencias de una palabra. Busca todas las 'a' en la cadena
let textoC = "La casa es amarilla";
let regExpC = /a/g;
let resultadoC = textoC.match(regExpC);
console.log(resultadoC.length);
//d) Extrae la fecha de un texto (en formato dd-mm-yyyy). 
let textoD = "La fecha es 15-08-2024";
let regExpD =/(\d{1,2})-(\d{1,2})-(\d{1,4})/;
let resultadoD = regExpD.exec(textoD);
console.log(`Dia: ${resultadoD[1]}, Mes: ${resultadoD[2]}, Año: ${resultadoD[3]}`);
//e) Reemplazar todas las ocurrencias de una palabra. 
let textoE = "Glucosa y ácido láctico son dos metabolitos clave en el proceso de la glucólisis";
let regExpE = /láctico/g;
let resultadoE = textoE.replace(regExpE, "pirúvico");
console.log(resultadoE);
//f) Busca una URL (http o https). 
let textoF = "Visita nuestro sitio en https://www.ejemplo.com";
let regExpF = /https?:\/\/[^\s]+/;
let resultadoF = regExpF.exec(textoF);
console.log(resultadoF[0]);