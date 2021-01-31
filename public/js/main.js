// exo1
let magasin = {
    argent : 30,
    chocolat : 2,
    bonbon : 4,
    gauffre : 3,
    calcul (){
        console.log(`Il lui reste ${magasin.argent - magasin.chocolat - magasin.bonbon - magasin.gauffre} €`);
    }

}
console.log(magasin)
magasin.calcul()

// Créer un exercice ou une personne rentre dans un magasin avec une somme d'argent et a la fin il faut soustraire l'argent depensé
// ex: je rentre dans un magasin, j'ai 30€, j'achete un chocolat qui coute 2€, et une tartine qui coute 3,50€.
// Au final, j'ai 24,50€

// exo2, b
let vieille_dame = {
    age : 90,
    nom : {
        prenom: "catherine", 
        nomDeFamille : "dupont"
    },
    moral : "moral",
    objet : "canne",
    se_plaindre (){
        moral = prompt('ton moral?')
        if (moral == "mal") {
            alert("vous me derangez")
        } else if (moral == "bien") {
            alert(`Bonjour monsieur `)
        } else {
            alert("erreur")
        } 
    },
    se_promener (){
        vieille_dame["objet"] = "perdu"
    },
    adourcir (){
        moral = "bien"
    }
}
console.log(vieille_dame);
vieille_dame.se_plaindre()
vieille_dame.se_promener()
vieille_dame.adourcir()

// exo3

let vieille_homme = {
    nom : "Paul",
    nomDeFamille : "Dubois",
    age : 100,
    saluer (){
        console.log(`Bonjour ${vieille_dame.nom.prenom} ${vieille_dame.nom.nomDeFamille}`);
    },
    
}
console.log(vieille_homme);
vieille_homme.saluer()
