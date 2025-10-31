var Raccourcis = new Map();
Raccourcis.set("GC", "Georges Canguilhem");
Raccourcis.set("D", "Descartes");
Raccourcis.set("CB", "Claude Bernard");

function ChangerRaccourci(AC){
    let EltsAC = document.getElementsByClassName(AC)
    for (i=0; i<EltsAC.length; i++){
        EltsAC[i].innerHTML = Raccourcis.get(AC)
    }
}