function calcul_moyenne(){
    var note1=prompt("Quelle est la premiere note? Coeff. 2");
    var note2=prompt("Quelle est la deuxieme note? Coeff. 2");
    var note3=prompt("Quelle est la troisieme note? Coeff. 2");
    var note4=prompt("Quelle est la quatrieme note? Coeff. 3");

    var somme= Number(note1*2) + Number(note2*2) + Number(note3*2) + Number(note4*3);

    var moyenne= somme/9;
    
    document.write("Voici la somme des notes: "+ somme+ "  |  ");
    
    document.write("Voici la moyenne des notes: "+ moyenne+ "  |  ");

    if (moyenne<10)
        document.write("Redoublement...");
        else
        document.write("Admis!")
}

function age_test(){
    var age=prompt("Quel est votre age?");
    
    document.write("Vous avez: "+ age+ " ans |  ");

    if (age<18)
        document.write("Vous etes donc mineur.");
        else
        document.write("Vous etes donc majeur.")
}

function affichage_simple(){
    var nom=prompt("Quel est votre nom?");
    var prenom=prompt("Quel est votre prenom?");

    document.write("<div style='background-color: #90AFC5; border: 2px solid #2A3132; height: 30px; width=25%; color: #2A3132;>; border-radius: 26px;text-align: center; font-weight: bold;'")
    document.write("<p1 style='color: black'>Bonjour "+ prenom +" "+nom+" !</p1>")
    document.write("</div>")
}

function test_color(){
    var couleur =prompt("Donner une couleur");
    if (couleur == "rouge"|| couleur == "Rouge"|| couleur == "ROUGE"|| couleur == "rOUGE")
        document.body.style.background="red"
    else if (couleur == "orange"|| couleur == "Orange"|| couleur == "ORANGE"|| couleur == "oRANGE")
        document.body.style.background="orange"
    else if (couleur == "jaune"|| couleur == "Jaune"|| couleur == "JAUNE"|| couleur == "jAUNE")
        document.body.style.background="yellow"
    else if (couleur == "vert"|| couleur == "Vert"|| couleur == "VERT"|| couleur == "vERT")
        document.body.style.background="green"
    else if (couleur == "bleu"|| couleur == "Bleu"|| couleur == "BLEU"|| couleur == "bLEU")
        document.body.style.background="blue"
    else if (couleur == "violet"|| couleur == "Violet"|| couleur == "VIOLET"|| couleur == "vIOLET")
        document.body.style.background="violet"
    else
        alert("Couleur non répertoriée")
    }

function somme(){
    var a= document.getElementById("t1").value;
    var b= document.getElementById("t2").value;
    var s= Number(a)+ Number(b);
    t3.value=s;
}

function soustraction(){
    var a= document.getElementById("t1").value;
    var b= document.getElementById("t2").value;
    var s= Number(a)- Number(b);
    t3.value=s;
}

function produit(){
    var a= document.getElementById("t1").value;
    var b= document.getElementById("t2").value;
    var s= Number(a)* Number(b);
    t3.value=s;
}

function division(){
    var a= document.getElementById("t1").value;
    var b= document.getElementById("t2").value;
    var s= Number(a)/ Number(b);
    t3.value=s;
}

function parite(){
    var x= Number(document.getElementById("t1").value);
    if (x%2==0)
        t3.value="Nombre pair"
    else
        t3.value="Nombre impair"
}

function permute(){
    var a= document.getElementById("t1").value;
        var tmp=0, x, nbr, y;
                nbr = Number(document.getElementById("t1").value);
                y = nbr;
                while(nbr > 0)
                {
                        x = nbr%10;
                        nbr = parseInt(nbr/10);
                        tmp = tmp*10+x;
                }
                t1.value=tmp;
    var b= document.getElementById("t2").value;
        var tmp=0, x, nbr, y;
        nbr = Number(document.getElementById("t2").value);
        y = nbr;
        while(nbr > 0)
        {
            x = nbr%10;
            nbr = parseInt(nbr/10);
            tmp = tmp*10+x;
        }
        t2.value=tmp;
}

function releve(){
    var a= document.getElementById("n1").value;
    var b= document.getElementById("n2").value;
    var c= document.getElementById("n3").value;

    var d= document.getElementById("o1").value;
    var e= document.getElementById("o2").value;
    var f= document.getElementById("o3").value;

    var s= Number(a)*Number(d) + Number(b)*Number(e) + Number(c)*Number(f);
    var t= Number(s)/(Number(d)+Number(e)+Number(f))

    p1.value=t;

    if (t<8)
        p2.value=("Redoublement...");
    else if (t<10)
        p2.value=("Rattrapages");
    else if (t<12)
        p2.value=("Admis Passable");
    else if (t<14)
        p2.value=("Admis Mention Assez bien");
    else if (t<16)
        p2.value=("Admis Mention Bien");
    else if (t<=20)
        p2.value=("Admis Mention Très bien");
    else if (t>20)
        alert("Erreur")
}


function affichagetab()
{
    document.write("<table border=2px width=30%");
    for(let i=0 ; i <= 5; i++)
    {
        document.write('<tr> <td>*</td> <td>*</td> <td>*</td> </tr>');
    }
    document.write('</table>');
}

function affichagetab2()
{
    var ligne = prompt("Donner le nombre de ligne");
    document.write("<table align=center border=2px width=30%" );
    for(let i=1; i <= ligne; i++) /* permet de compter ( fait un pas de un à un) */
    {
        document.write('<tr> <td>'+i+'</td> <td>je</td> <td>suis</td> </tr>');
    }
    document.write('</table>');
}

function seconnecter()
{
    var login = prompt("saisir votre identifiant");
    var pwd= prompt("saisir le mot de passe ");

    if (login == 'marie' && pwd == 'laure')
    document.write('Welcomen');
    else
    alert("saisir à nouveau les login et pwd");
    

}

function seconnecter2()
{
    var i =0
    do
    {
        var login = prompt("saisir votre identifiant");
        var pwd= prompt("saisir le mot de passe ");
        if (login == 'marie' && pwd == 'laure')
        {
            document.write("Bienvenue  :  "+id);
            break;
        }
        else 
        alert("Accès refusé");
        i+=1; /* correspond à i=i+1  çela la signifie que le i va prendre l'ancienne valeur plus 1*/
    }
    while (i<3);
{ 
    if (i==3)
    alert("Délai dépassé");
}

}

function cdc()
{
    var chaine = prompt("Donner un mot");
    document.write(chaine.toUpperCase()+"<br>"); /* pour mettre en majuscule */
    document.write(chaine.toLowerCase()+"<br>"); /* pour mettre en minuscule */
    document.write("a chaine continent  " + chaine.length+" caractères  " + "<br>"); /* lenght donne la taille du mot */
    document.write("la première lettre est   " + chaine.substr(0,1)+"<br>"); /* 0 correspond à la première lettre du mot, 1 correspond au nombre de lettre à afficher */
}

function switch2() /* switch = selon */
{ 
    var color = prompt ("entrer une couleur");
    switch(color)   
{ 
    case "rouge" : document.body.style.background = "red" ;
    break;
    case "ROUGE" : document.body.style.background = "red" ;
    break;
    case "bleu" : document.body.style.background = "blue" ;
    break;
    case "BLEU" : document.body.style.background = "blue" ;
    break;

    default:alert("couleur non définie");


}
}

function bonus()
{  
    var totalf = 0
    var total = ""
    var c = ""
    do{
        var article = prompt("Votre article")
        var price = prompt("Le prix")
        var quantite = prompt("La quantité")

        total = Number(price)*Number(quantite) 
        totalf += total 
        c += ("Article : " +article+" <br> PRIX : "+price +"€"+ " <br> Quantité : "+quantite+ " <br> Total : "+total+"€"+"<br><br><br>")
        

        next = prompt("Voulez vous continuer (OUI/STOP) ?")
    }
    while(next != "STOP");
    document.write(c);
    document.write(" TOTAL FINAL : "+totalf+"€");
    



}