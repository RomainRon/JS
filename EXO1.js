//exo3
let prenom = prompt("Votre Prénom")

alert("Bonjour," + prenom + "!")

//exo4
let nom = prompt("Votre Nom")
let prénom = prompt("Votre Prénom")
let city = prompt("Votre Ville")
alert("Votre Nom: " + nom + "\nVotre Prénom:" + prenom + "Votre Ville:" + city) 
//exo5
let nombre  = prompt ("met un chifre")
  let chiffre = prompt ("met un autre chifre ")
  let nombretrunc = Math.trunc(nombre)
  let multi = (nombretrunc*chiffre)
  alert("résultat de "+nombretrunc+"*"+chiffre+"="+multi)
  //exo6
  let divi = reste(8,7);
  console.log(divi)
  function reste(chiffre1, chiffre2){
    return chiffre1 % chiffre2;
}
//exo7
let pointure = prompt ("met un chifre")
let année = prompt ("Année de naissances")
alert("le calcul est :  " + calcul(pointure,année))
function calcul (cc,slt){
pointure= pointure*2
pointure= pointure+5
pointure= pointure*50
pointure= pointure-année
pointure= pointure+1766
return pointure
}

//exo8

let age = prompt("Votre age")

if(age>= 18){
    alert ("Majeur")

}   else {
    alert ("Mineur")
}         


//exo9

let numbS = prompt ("choisis un chfire")
let resultat = ""
for(let index= 0; index<= 10; index++)
resultat += `la multiplication par ` + index + ` est egale a ` + (numb*index) + `\n`
alert(resultat)




//exo 10

let word = 'javascript'

let result = ""

for (let index = 0; index < word.length; index++) {
    result += word[index] + '\n'
}

alert(result)





//exo11
let number = prompt('Choisi un chiffre')


if (number < 5 ) {
    alert('Le nombre saisi est inférieur à 5')
} else if(number == 5) {
    alert('Le nombre saisi est égal à 5')
} else {
    alert("Le nombre saisi est supérieur à 5")
}
//exo12
function carre(a) {
  alert(a * a)
}

let number1 = prompt('Choisi un chiffre')
carre(number1)

let number2 = prompt('Choisi un autre chiffre')
carre(number2)