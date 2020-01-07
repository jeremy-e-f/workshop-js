function Personne(nom, prenom, pseudo){
    this.nom= nom;
    this.prenom= prenom;
    this.pseudo= pseudo;
    this.getNomComplet= function(){
        return this.nom+" "+this.prenom+" "+this.pseudo;
    }

}

var jules= new Personne("LEMAIRE","Jules","jules77");
var paul= new Personne("LEMAIRE","Paul","paul44");

console.log(jules.nom);
console.log(jules.prenom);
console.log(jules.pseudo);
console.log(jules.getNomComplet());

function afficherPersonne(personne){
    console.log(personne.nom);
    console.log(personne.prenom);
    console.log(personne.pseudo);
    console.log(personne.getNomComplet());
}
afficherPersonne(paul);

jules.pseudo= "jules44";
console.log(jules.getNomComplet());

console.log(jules.age);
Personne.prototype.age= "NON RENSEIGNE";
console.log(jules.age);
jules.age= 30;
console.log(jules.age);

Personne.prototype.getInitiales= function(){
    return this.prenom.toUpperCase().charAt(0)+this.nom.toUpperCase().charAt(0);
}
console.log(jules.getInitiales());

var robert= {
    prenom:"Robert",
    nom:"LEPREFET",
    pseudo:"robert77",
    getNomComplet(){
        return this.prenom+" "+this.nom+" "+this.pseudo;
    }
}
afficherPersonne(robert);

function Client(nom, prenom, pseudo, numeroClient){
    Personne.call(this, nom, prenom, pseudo);
    this.numeroClient= numeroClient;
    this.getNomComplet= function(){
        return  this.nom+" "+this.prenom+" "+this.pseudo;
    };
    this.getInfos= function(){
        return this.numeroClient+" "+this.nom+" "+this.prenom;
    };
}

var steve= new Client("LUCAS","Steve","steve44","A01");
afficherPersonne(steve);
console.log(steve.numeroClient);
console.log(steve.getInfos());