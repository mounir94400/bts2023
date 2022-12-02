function affichagetab()
{
    document.write('<table border=2px width=30%')
    for(let i = 0 ; i <=5; i++){
        document.write('<tr><td>*</td><td>*</td><td>*</td></tr>')
    }
    document.write('</table>')
}

function affichagetab2(){
    document.write('<table border=2px width=30%')
    var ligne=prompt("Donner le nombre de ligne")
    for(let i = 1 ; i <=ligne; i++){
        document.write("<tr><td>"+i+"</td><td>*</td><td>*</td></tr>")
    }document.write('</table>')
}

function seconnecter(){
    var user=prompt("Donner le nom d'utilisateur")
    var mdp=prompt('Donner le mot de passe')

    if(user=="admin" && mdp=="admin"){
        document.write("Bienvenue : "+ user);
    }
    else
        alert("Accès refusé")
}
function seconnecter2(){
    var i = 0;
    do {
        var id=prompt("Donner votre nom d'utilisateur");
        var mdp=prompt("Entrez votre mot de passe");
        if (id=="admin" && mdp=="admin")
        {
            document.write("Bienvenue  :  "+ id);
            break
        }
        else
        alert('Acces Refusé');
        i+=1;
    } while(i<3);
    if (i==3)
    alert("Délai dépassé")
}
function cdc(){
    var chaine=prompt("Ecrire un mot")
    document.write(chaine.toUpperCase()+"<br>");
    document.write(chaine.toLowerCase()+"<br>");
    document.write("a chaine contient   "+ chaine.length+" caractères  " + "<br>");
    document.write("la premiere lettre est   "+ chaine.substr(0,1)+ "<br>");

}
function swich(){
    var couleur=prompt("Entrez une couleur")
    switch(couleur)
    {
        case "rouge" : document.body.style.background ="red;";
        break;
        case "ROUGE" : document.body.style.background ="red;";
        break;
        case "BLEU" : document.body.style.background ="red;";
        break;
        case "bleu" : document.body.style.background ="red;";
        break;
        default;alert("couleur non-défini")
    }
}