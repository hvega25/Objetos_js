import cicle from './CIcles.js';

import {afegirCicle, afegirModul, actualitzarSelector, removeCicle, netejarFormularis, printLlistat, editCicle, calculoHores, afegirModulaLlistaModul} from './CIcles.js';

;

let llistatCicles = [];
let llistatModulos = [];

let Cicle, modul;


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btnAfegirCicle").addEventListener("click", afegirCicle);
    document.getElementById("btnAfegirModul").addEventListener("click", afegirModul);

});

netejarFormularis();
document.getElementById("editCicle").value = -1;

