//* 2. MAYORES DE EDAD
//*Sea el nombre y la edad de varias personas. Se necesita un programa que lea estos datos y reporte al final el porcentaje de personas que son mayores de edad.
//*Se tienen las siguientes personas: Luis (15), Ana (19), José (21), Carmen (17), Rosa (18), José (22), María (17), Luz (19), Rafael (23), Liz (15), Marcos (20) y Leo (16); la salida requerida presenta el siguiente formato:
//*Cantidad de personas: 12
//*Cantidad de personas mayor de edad: 7
//*Porcentaje de personas mayor de edad: 58.33%

import CL_mayor from "./CL_mayor.js";
import Cl_personas from "./CL_personas.js";

let persona1 = new Cl_personas ("Luis", 15);
let persona2 = new Cl_personas ("Ana", 19);
let persona3 = new Cl_personas ("Jose", 21);
let persona4 = new Cl_personas ("Carmen", 17);
let persona5 = new Cl_personas ("Rosa", 18);
let persona6 = new Cl_personas ("José", 22);
let persona7 = new Cl_personas ("María", 17);
let persona8 = new Cl_personas ("Luz", 19);
let persona9 = new Cl_personas ("Rafael", 23);
let persona10 = new Cl_personas ("Liz", 15);
let persona11 = new Cl_personas ("Marcos", 20);
let persona12 = new Cl_personas ("Leo", 16);

let mayor = new CL_mayor();

mayor.procesarPersonas(persona1);
mayor.procesarPersonas(persona2);
mayor.procesarPersonas(persona3);
mayor.procesarPersonas(persona4);
mayor.procesarPersonas(persona5);
mayor.procesarPersonas(persona6);
mayor.procesarPersonas(persona7);
mayor.procesarPersonas(persona8);
mayor.procesarPersonas(persona9);
mayor.procesarPersonas(persona10);
mayor.procesarPersonas(persona11);
mayor.procesarPersonas(persona12);

let salida = document.getElementById ("salida");
salida.innerHTML = `
<br>Cantidad de personas: ${mostrarcantpersonas()}
<br>Cantodad de personas mayor de edad: ${mostrarcantMayor()}
<br>Porcentaje de personas mayores de edad: ${porcentajeMayores ()}`;