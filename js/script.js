//déclaration
let variable = "jean";
console.log(variable);
let color = "red";
console.log(color);
color = "black";
console.log(color);
console.log(typeof (variable));


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
let divH1 = "<div><h1>Introduction</h1><img src='https://lwi.nexon.com/m_ba/brand/media/img_01.png'></div>";
document.write(divH1);

let prenom = "Williams";
let age = "21";
document.write('je suis ' + prenom + " j'ai " + age + "ans");
prenom = "Taiga";
document.write('<br>je suis ' + prenom);

let x = 4;
let y = 5;
let t = x + y;
console.log(t);


let i = 0;
i = i++;
//conditions

//if(condition est vrai){todo}else{todo};
let isCorrect = false;
if (isCorrect == true) {
    document.write('<h2>section2</h2>');
} else {
    console.log("pas d'entree");
}

//déclaration une variable couleur = rouge (string)
// si la couleur est rouge alors j'aurais une div p a(google)
//sinon j'aurai une div avec une image (telecharger) span (4 mots)

color = "red";

if (color == "red") {
    document.write("<br><div><p><a href='https://myanimelist.net/profile/Luffydou'>lien</a></div>");
} else {
    document.write("<br><div><img src='https://images.pexels.com/photos/12139705/pexels-photo-12139705.jpeg?auto=compress&cs=tinysrgb&w=550&h=350&dpr=1'><br><span>4 mots</span>");

}

// déclarer 2 variable mail et mdp initialiser les 2 variables
let mail = "mail@mail.mail";
let mdp = "mot de passe";
//vérifier la condition mail et mdp (si mail ET (&&) mdp sont ok alors j 'affiche un une section main avec un message et une photo profil sinon h2 erreur de connexion)

if (mail == "mail@mail.mail" && mdp == "mot de passe") {
    document.write("<section><h2>bonjour</h2><img src='https://static.miraheze.org/bluearchivewiki/thumb/8/83/Hina.png/266px-Hina.png'></section>");
} else {
    document.write("<h2>erreur de connexion</h2>");
}

document.write("<br><hr><br>");

let tabJour = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
document.write("le jour est " + tabJour[1]);
document.write("<br><br>");

// initialement x est vrai et y = 15 , si x est vrai et y est supérieur a 15, afficher vous aver la bonne reponse sinon afficher votre reponse est incorrecte
// ET == &&, OU == || 

x = true;
y = 15;

if (x == true && y > 15) {
    document.write("Vous avez la bonne reponse");
} else {
    document.write("Votre reponse est incorrecte");
}
document.write("<br>");
if (x == true || y > 15) {
    document.write("Vous avez la bonne reponse");
} else {
    document.write("Votre reponse est incorrecte");
}

//if(condition{}elseif{condition})

let a = "vert";
let b = 74;
if (a == "vert") {
    console.log("la couleur est vert");
} else if (b > 70) {
    console.log("la valeur est > 70");
} else {
    console.log("rien a ecrire");
}

// si x=15 afficher le message valeur est 15 sinon si prenom=axel afficher votre prenom est axel sinon afficher pas de message

x = 15;
prenom = "axel";

if (x == 15) {
    console.log("le message valeur est 15");
} else if (prenom == "axel") {
    console.log("votre prenom est axel");
} else {
    console.log("pas de message");
}

document.write("<br>");

// taille 5 ,commence 0

for (let i = 0; i < 5; i++) {
    document.write("coucou ");
}

document.write("<br>");
//refaire exemble avec 10 afficher le i

for (i = 0; i < 10; i++) {
    document.write(i + " ");
}

for (i = 0; i < 3; i++) {
    document.write("<br>");
}

let tabChiffre = [4, 7, 5, 8, 4, 7];
console.log(tabChiffre.length);
for (i = 0; i < tabChiffre.length; i++) {
    document.write(tabChiffre[i] + "<br>");
}

for (i = 0; i < tabJour.length; i++) {
    document.write(tabJour[i] + "<br>");
}

//afficher la somme de tabChiffre

let sommeTabChiffre = 0;

console.log(tabChiffre.length);
for (i = 0; i < tabChiffre.length; i++) {
    sommeTabChiffre += tabChiffre[i];
}
document.write(sommeTabChiffre + "<br>");

for (i = 0; i < 7; i++) {
    if (i > 4) {
        document.write(i + "<br>");
    }
}

let j = 0;
while (j < 10) {
    console.log(j);
    j++;
}

j = 0;
while (j < tabJour.length) {
    console.log(tabJour[j]);
    j++;
}
couleur = "bleu";
switch (couleur) {
    case "rouge":
        console.log("la couleur est rouge");
        break;
    case "vert":
        console.log("la couleur est vert");
        break;
    case "bleu":
        console.log("la couleur est bleu");
        break;
    default:
        console.log("pas de couleur");
        break;
}

//la boucle foreach
tableau = ['toto', false, 1];

//tableau[0] =>element
//tableau[1] =>element
tableau.forEach(element => {
    document.write("<p>" + element + "</p>");
    document.write("<style>p{color:red;}</style>");
});
// la boucle for in
for (element in tableau) {
    console.log("afficher l'indice " + element + " valeur " + tableau[element]);
}

//constante
const PIE = 3.14;
console.log(PIE);
//PIE=4;
//console.log(PIE);


let voiture = {
    marque: "mini",
    couleur: "jaune"
}

console.log(voiture["marque"]);

let personne = {
    nom: "Sunaookami",
    prenom: "Shiroko",
    genre: "feminin",
    age: 16,
    photo: "https://static.miraheze.org/bluearchivewiki/thumb/6/63/Shiroko.png/266px-Shiroko.png"
}


document.write("<div class=personne>" + personne["nom"] + "<br>" + personne["prenom"] + "<br>" + personne["genre"] + "<br>" + personne["age"] + "ans" + "<br>" + "<img src=" + personne["photo"] + ">" + "</div>");
document.write("<style>.personne{color:purple;}</style>");

//fonction

function bonjour() {
    document.write("<br><h2>Bonjour</h2>");
}

bonjour();
//fontion d'addition

function addition(a, b) {
    let somme = a + b;
    document.write(somme + "<br>");
}

addition(54, 96);
addition(94, 12);
addition(48, 78);

console.log(window);

console.log(document);

console.log(window.innerWidth);
console.log(window.scrollY);
//window.alert("la largeur de mon écran est "+window.innerWidth+" px");
console.log("le chemin de mon document est :" + window.location);

let title = document.getElementById("title");
console.log(title);
console.log(title.innerHTML);

console.log(document.getElementById("title").innerHTML)
title.innerHTML = "<strong>nouveau titre</strong>"

section = document.getElementsByClassName('titre');
console.log(section);
console.log(section[0]);

let pALL =document.querySelectorAll('p');
console.log(pALL);

a=document.querySelector('.google');
console.log(a);
a.getAttribute("href");
console.log(a.getAttribute("href"));

a.setAttribute("href", "https://bluearchive.nexon.com/home");