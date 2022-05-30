//déclaration
let variable = "jean";
console.log(variable);
let color = "red";
console.log(color);
color = "black";
console.log(color);
console.log(typeof (variable))


variable = 1;
console.log(variable);
//type des variables
console.log(typeof (variable));

//let p = document.getElementById("toto");
//p.style.backgroundColor="red";
//console.log(p);
//p.style.backgroundColor="green";
let tableau = [1, 2, 4, 5];
console.log(tableau[2]);
tableau = [];
tableau[0] = "jean";
tableau[1] = "nina";
console.log(tableau);


let tab = ["voiture", 1, true];
//afficher
console.log(tab[0], tab[1], tab[2]);

//tab=[true, "personne",1];
tab = [true, "personne", 1];
console.log(tab[0], tab[1], tab[2]);

//let message = "<h1>mon message</h1>";
//document.write(message);

// afficher sur le document avec document.write
let divH1 = "<div><h1>Introduction</h1><img src='https://images.pexels.com/photos/12139705/pexels-photo-12139705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></div>";
document.write(divH1);

let prenom = "Williams";
let age = "21";
document.write('je suis ' + prenom + " j'ai " + age + "ans");
prenom = "Taiga";
document.write('<br>je suis ' + prenom);

let x = 4;
let y = 5;
let t = x + y;
console.log(t)


let i = 0;
i = i++;
//conditions

//if(condition est vrai){todo}else{todo};
let isCorrect = false;
if (isCorrect == true) {
    document.write('<h2>section2</h2>');
} else {
    console.log("pas d'entree")
}

//déclaration une variable couleur = rouge (string)
// si la couleur est rouge alors j'aurais une div p a(google)
//sinon j'aurai une div avec une image (telecharger) span (4 mots)

color = "red";

if (color == "red") {
    document.write("<br><div><p><a href='https://myanimelist.net/profile/Luffydou'>lien</a></div>");
} else {
    document.write("<br><div><img src='https://images.pexels.com/photos/12139705/pexels-photo-12139705.jpeg?auto=compress&cs=tinysrgb&w=550&h=350&dpr=1'><br><span>4 mots</span>")

}

// déclarer 2 variable mail et mdp initialiser les 2 variables
let mail="mail@mail.mail";
let mdp="mot de passe";
//vérifier la condition mail et mdp (si mail ET (&&) mdp sont ok alors j 'affiche un une section main avec un message et une photo profil sinon h2 erreur de connexion)

if(mail=="mail@mail.mail" && mdp=="mot de passe"){
    document.write("<section><h2>bonjour</h2><img src='https://static.miraheze.org/bluearchivewiki/thumb/8/83/Hina.png/266px-Hina.png'></section>")
}else{
    document.write("<h2>erreur de connexion</h2>")
}
