let llistatCicles = [];
let llistatModulos = [];

let Cicle, modul;
export default class cicle {

    ////2. Crea el constructor de la classe cicle i modifica la manera de crear l’objecte al codi donat
    constructor(nom, categoria, numAlumnes, abreviatura, llistatModulos) {
        this.nom = nom;
        this.categoria = categoria;
        this.numAlumnes = numAlumnes;
        this.abreviatura = abreviatura;
        //3. Al constructor de la classe cicle afegeix-li una variable que sigui numEdicions. El seu valor serà 0
        // inicialment i no se rep al constructor.
        this.numEdicions = 0;


        //7. Al constructor crea l’array de mòduls, inicialment buida
        this.llistatModulos = [];
    }


    //6. Crea una funció toString() que imprimeixi tota la informació del cicle
    //9. Modifica la funció toString per a que també imprimeixi els mòduls de cada cicle, fes que aquests
    // apareguin ordenats pel seu número
    toString1(cicle) {
        let retorno = '';

        retorno = `Nombre: ${llistatCicles[cicle].nom}, Categoria: ${llistatCicles[cicle].categoria}, Número de alumnos: ${llistatCicles[cicle].numAlumnes}, Abreviatura: ${llistatCicles[cicle].abreviatura} `;

        llistatModulos.sort((a, b) => a.num - b.num);
        if (llistatModulos.length >= 1) {
            for (let a = 0; a < llistatModulos.length; a++) {
                if (parseInt(cicle) == parseInt(llistatModulos[a].cicle)) {
                    retorno += ` - ID cicle: ${llistatModulos[a].cicle}, Nombre módulo: ${llistatModulos[a].nom}, Número de módulo: ${llistatModulos[a].num}, Horas: ${llistatModulos[a].hores}`;
                }
            }

        }

        console.log(retorno);
    }

    //4. Crea el mètode setNumEdicions i fes que aquest valor incrementi cada vegada que edites el cicle.
    setNumEdicions() {
        this.numEdicions++;


        //5. Guarda la data de l’última vegada que has editat el cicle.
        this.data = new Date();

        console.log(`Se ha editado un total de: ${this.numEdicions} y su última fecha ${this.data}`)
    }


}


function afegirModul() {
    let cicle = document.getElementById("modul_cicle").value;
    let modul_nom = document.getElementById("modul_nom").value;
    let modul_num = document.getElementById("modul_num").value;
    let modul_hores = document.getElementById("modul_hores").value;


    //let modul = {cicle: cicle, nom: modul_nom, num: modul_num, hores: modul_hores}
    modul = new Modul(cicle, modul_nom, modul_num, modul_hores);

    //8. Crea una funció que permeti afegir un mòdul a la llista de mòduls
    afegirModulaLlistaModul(modul);

    Cicle.toString1(cicle);


    //Printem la llista
    //printLlistat();

    //Netegem els formularis
    netejarFormularis();
    //console.table(llistatModulos)

}


function afegirCicle() {

    let nom = document.getElementById("cicle_nom").value;
    let categoria = document.getElementById("cicle_categoria").value;
    let numAlumnes = document.getElementById("cicle_alumnes").value;
    let abreviatura = document.getElementById("cicle_abr").value;

    //let cicle = {nom: nom, categoria: categoria, numAlumnes: numAlumnes, abreviatura: abreviatura}


    if (document.getElementById("editCicle").value === "-1") {
        //Afegim el cicle al llistat
        Cicle = new cicle(nom, categoria, numAlumnes, abreviatura, llistatModulos);
        llistatCicles.push(Cicle);


    } else {
        //Editar cicle
        let indice = parseInt(document.getElementById("editCicle").value);
        let editar = llistatCicles[indice];
        editar.nom = nom;
        editar.categoria = categoria;
        editar.numAlumnes = numAlumnes;
        editar.abreviatura = abreviatura;
    }


    //Actualitzem el selector
    actualitzarSelector();

    //Printem la llista
    printLlistat(llistatCicles);

    //Netegem els formularis
    netejarFormularis();

    document.getElementById("editCicle").value = -1;

    //Prueba
    //console.table(llistatCicles);
}

function actualitzarSelector() {
    let select = document.getElementById('modul_cicle');
    select.innerHTML = "";
    llistatCicles.forEach(function (element, index) {
        let opt = document.createElement('option');
        opt.value = index;
        opt.text = element.nom;
        select.appendChild(opt);
    });
}

//Funció per eliminar un cicle
function removeCicle(i) {
    llistatCicles.splice(i, 1);
    printLlistat(llistatCicles);

}

//Funció per llistar els cicles
function printLlistat(llistat) {
    let str = "";
    llistat.forEach(function (element, index) {
        str += `<div class="block p-6 mb-3 w-full bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">${element.abreviatura.toUpperCase()}. ${element.nom}</h5>
                    <h6 class="text-gray-700">${element.categoria}</h6>
                    <p class="font-normal text-gray-700">Num d'alumnes: ${element.numAlumnes}</p>

                   
                    <button type="button" id="removeBtn_${index}" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Eliminar</button>
                    <button type="button" id="editBtn_${index}" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Editar</button>
                    <button type="button" id="calculoBtn_${index}" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Càlcul hores</button>


                </div>`;
    });

    document.getElementById("llistat").innerHTML = str;

    llistat.forEach(function (element, index) {
        document.getElementById(`removeBtn_${index}`).addEventListener("click", function () {
            removeCicle(index);
        });
        document.getElementById(`editBtn_${index}`).addEventListener("click", function () {
            editCicle(index);
        });
        document.getElementById(`calculoBtn_${index}`).addEventListener("click", function () {
            calculoHores(index);
        });
    });
}

//Funció per netejar els formularis
function netejarFormularis() {
    var inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }

    var selects = document.getElementsByTagName("select");
    for (let i = 0; i < selects.length; i++) {
        selects[i].value = 0;
    }
}


//Funció per editar un cicle
function editCicle(i) {
    llistatCicles[i].setNumEdicions();

    document.getElementById("cicle_nom").value = llistatCicles[i].nom;
    document.getElementById("cicle_categoria").value = llistatCicles[i].categoria;
    document.getElementById("cicle_alumnes").value = llistatCicles[i].numAlumnes;
    document.getElementById("cicle_abr").value = llistatCicles[i].abreviatura;

    document.getElementById("editCicle").value = i;


}


function calculoHores(index) {
    let contador = 0;

    if (llistatModulos.length >= 1) {
        for (let a = 0; a < llistatModulos.length; a++) {
            if (parseInt(index) == parseInt(llistatModulos[a].cicle)) {
                contador += parseInt(`${llistatModulos[a].hores}`);
            }
        }
    }

    //console.log(contador);
    alert(contador);
}


// 10. Crea una funció que calculi les hores que té el cicle en funció dels mòduls afegits


//1. Crea la classe Cicle


//1. Crea la classe Modul
class Modul {
    //2. Crea el constructor de la classe
    constructor(cicle, nom, num, hores) {
        this.cicle = cicle;
        this.nom = nom;
        this.num = num;
        this.hores = hores;
    }

    toString2() {
        let retorno = '';
        retorno = `MP  ${this.num}. ${this.nom} ${this.hores}h`
    }

}


function afegirModulaLlistaModul(arreglo) {
    llistatModulos.push(arreglo);
}


//Funció per actualitzar el selector de cicles cada vegada que afegim un cicle


export {afegirCicle, afegirModul, actualitzarSelector, removeCicle, netejarFormularis, printLlistat, editCicle, calculoHores, afegirModulaLlistaModul};


