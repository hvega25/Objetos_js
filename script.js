let llistatCicles = [];
let llistaModulos = [];


function calculHores() {
    console.log("hola")
}

//1. Crea la classe Cicle

class cicle {

    ////2. Crea el constructor de la classe cicle i modifica la manera de crear l’objecte al codi donat
    constructor(nom, categoria, numAlumnes, abreviatura,llistaModulos) {
        this.nom = nom;
        this.categoria = categoria;
        this.numAlumnes = numAlumnes;
        this.abreviatura = abreviatura;
        //3. Al constructor de la classe cicle afegeix-li una variable que sigui numEdicions. El seu valor serà 0
        // inicialment i no se rep al constructor.
        this.numEdicions = 0;


        //7. Al constructor crea l’array de mòduls, inicialment buida
        this.llistaModulos = [];
    }


    //6. Crea una funció toString() que imprimeixi tota la informació del cicle
    toString() {
        let retorno = `${this.nom} ${this.categoria} ${this.numAlumnes} ${this.abreviatura}}`;
        console.log(retorno);
    }

    setNumEdicions() {
        //4. Crea el mètode setNumEdicions i fes que aquest valor incrementi cada vegada que edites el cicle.
        this.numEdicions++;

        //5. Guarda la data de l’última vegada que has editat el cicle.
        this.data = new Date();

        //cambiar
        //  console.log(`${this.setNumEdicions}  ${this.data}`);
    }
}


function afegirCicle() {
    let nom = document.getElementById("cicle_nom").value;
    let categoria = document.getElementById("cicle_categoria").value;
    let numAlumnes = document.getElementById("cicle_alumnes").value;
    let abreviatura = document.getElementById("cicle_abr").value;

    //let cicle = {nom: nom, categoria: categoria, numAlumnes: numAlumnes, abreviatura: abreviatura}
    let Cicle = new cicle(nom, categoria, numAlumnes, abreviatura, llistaModulos);


    if (document.getElementById("editCicle").value === "-1") {
        //Afegim el cicle al llistat
        llistatCicles.push(Cicle);


    } else {
        //Editar cicle
        Cicle.setNumEdicions();

    }

    //Actualitzem el selector
    actualitzarSelector();

    //Printem la llista
    printLlistat(llistatCicles);

    //Netegem els formularis
    netejarFormularis();

    document.getElementById("editCicle").value = -1;
}

function afegirModul() {
    let cicle = document.getElementById("modul_cicle").value;
    let modul_nom = document.getElementById("modul_nom").value;
    let modul_num = document.getElementById("modul_num").value;
    let modul_hores = document.getElementById("modul_hores").value;

    let modul = {cicle: cicle, nom: modul_nom, num: modul_num, hores: modul_hores}

    //8. Crea una funció que permeti afegir un mòdul a la llista de mòduls
    afegirModulos(modul);


    //Printem la llista
//    printLlistat();

    //Netegem els formularis
    netejarFormularis();
    //console.log(llistatCicles);
}

function afegirModulos(valor) {
    llistaModulos.push(valor);
    console.log("Estoy desde afegirModulos");
    console.table(llistaModulos);
    console.table(llistatCicles);
}

//Funció per llistar els cicles
function printLlistat(llistat) {
    let str = "";
    llistat.forEach(function (element, index) {
        str += `<div class="block p-6 mb-3 w-full bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">${element.abreviatura.toUpperCase()}. ${element.nom}</h5>
                    <h6 class="text-gray-700">${element.categoria}</h6>
                    <p class="font-normal text-gray-700">Num d'alumnes: ${element.numAlumnes}</p>

                    <button type="button" onClick="removeCicle(${index})" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Eliminar</button>
                    <button type="button" onClick="editCicle(${index})" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Editar</button>
                    <button type="button" onClick="calculHores(${index})" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Càlcul hores</button>


                </div>`;
    });

    document.getElementById("llistat").innerHTML = str;
}

//Funció per actualitzar el selector de cicles cada vegada que afegim un cicle
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

}

//Funció per editar un cicle
function editCicle(i) {
    document.getElementById("cicle_nom").value = llistatCicles[i].nom;
    document.getElementById("cicle_categoria").value = llistatCicles[i].categoria;
    document.getElementById("cicle_alumnes").value = llistatCicles[i].numAlumnes;
    document.getElementById("cicle_abr").value = llistatCicles[i].abreviatura;

    document.getElementById("editCicle").value = i;
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