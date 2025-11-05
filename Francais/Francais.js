var Raccourcis = new Map();
Raccourcis.set("GC", "Georges Canguilhem");
Raccourcis.set("D", "Descartes");
Raccourcis.set("CB", "Claude Bernard");

var AntiRaccourcis = new Map();
AntiRaccourcis.set("Georges Canguilhem","GC");
AntiRaccourcis.set("Descartes","D");
AntiRaccourcis.set("Claude Bernard","CB");

function ChangerRaccourci(AC){
    let EltsAC = document.getElementsByClassName(AC)
    for (i=0; i<EltsAC.length; i++){
        if (EltsAC[i].innerHTML.length<=2){EltsAC[i].innerHTML = Raccourcis.get(AC)}
        else {EltsAC[i].innerHTML = AntiRaccourcis.get(EltsAC[i].innerHTML)}
        }
}