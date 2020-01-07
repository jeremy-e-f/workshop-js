var villes= ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];
villes.forEach(function(ville){
    console.log(ville);
});

var contientA = function(element, index, array){
    return element.indexOf("a")>= 0;
}

var contientTiret = function(element, index, array){
    return element.indexOf("-")>= 0;
}

var contientPasTiretEspace = function(element, index, array){
    return element.indexOf("-") < 0 & element.indexOf(" ") < 0;
}

var derniereLettreS = function(element, index, array){
    return element.endsWith("s");
}

var lettreADansToutesLesVilles = villes.every(contientA);
console.log("lettreADansToutesLesVilles = "+lettreADansToutesLesVilles);

var auMoinsUneVilleAvecUnTiret = villes.some(contientTiret);
console.log("auMoinsUneVilleAvecUnTiret = "+auMoinsUneVilleAvecUnTiret);

var villesSansTiretSansEspace = villes.filter(contientPasTiretEspace);
villesSansTiretSansEspace.forEach(function(ville){
    console.log(ville);
})

var villesMajusculeSeTerminantParS = villes.filter(derniereLettreS).map(function (element, index, array) { return element.toUpperCase(); });
villesMajusculeSeTerminantParS.forEach(function(ville){
    console.log(ville);
})

