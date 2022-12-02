function calcul_moyenne()
{
var note1=prompt("Donner une premiere note svp");
var note2=prompt("Donner une deuxieme note svp");
var note3=prompt("Donner une troisième note svp");
var note4=prompt("Donner une troisième note svp");


var somme = Number(note1)*2 + Number(note2)*2 + Number(note3)*3;
var moyenne= somme / 9;

document.write("voici la somme: "+somme + "       ");

document.write("voici la moyenne: "+moyenne);

if (moyenne<10)
document.write("vous etes edoublant");
else
document.write("vous etes admis");

}

function age_test()

{

    var age = prompt("Entrer votre age:");
    if(age<18)
    document.write("vous etes mineur");
    else document.write("vous etes majeur");

}

function simple_affichage()
{
var nom=prompt("Quel est votre nom?");
var prenom=prompt("Quel est votre prénom");

document.write("<div style='backkgroudn-color:red; border:2px solid blue; height:30px;'>");
document.write("<p1 style='color:red';>Bonjour  "+ prenom+" "+nom+ "</p1>");
document.write("</div>");
}

function test_color()
  {
    var couleur = prompt("donner une couleur");

    if (couleur == "rouge" || couleur=="ROUGE"||  couleur=="R")
    document.body.style.background="red";
    else if (couleur == 'bleu'|| couleur=='BLUE'|| couleur=='B')
    document.body.style.background="blue";
    else if (couleur == 'vert' || couleur=='VERT'||couleur=='V')
    document.body.style.background="green";
    else
    alert("couleur inconnue ! ....");
  }
  function somme()
  {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var s = Number(a)+Number(b);
    t3.value = s;
  }
  function soustraction()
  {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var s = Number(a)-Number(b);
    t3.value = s;
  }
  function produit()
  {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var s = Number(a)*Number(b);
    t3.value = s;
  }
  function division()
  {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var s = Number(a)/Number(b);
    t3.value = s;
  }
  function parite()
  {
    var x = Number(document.getElementById("t1").value)
    if (x%2==0){
    alert("Le Nombre Est Paire");}
    else
    {
    alert("Le Nombre Est Impaire")
    }
  }