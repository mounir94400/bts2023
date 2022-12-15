résultat de la fonction()

{

    var a = document.getElementById("n1").value;
    var b = document.getElementById("n2").value;
    var c = document.getElementById("n3").value;

    var d = document.getElementById("c1").value;
    var e = document.getElementById("c2").value;
    var f = document.getElementById("c3").value;

    var g = document.getElementById("m1").value;
    var h = document.getElementById("m2").value;

    var somme = Nombre(a) * Nombre(d) + Nombre(b) * Nombre(e) + Nombre(c) * Nombre(f);
    var coef = Nombre(d)+ Nombre(e)+ Nombre(f)

    var tkt = somme / coef ;
    m1.value=tkt ;

 

    si(tkt<10)

        m2.value = ("Redoublant");

    sinon si(tkt<15)

        m2.value = ("Admis");

    autre

        m2.value = ("Admis Bien");  

}