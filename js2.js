function calculer()
		{
			var a = document.getElementById("t1").value;
			var b = document.getElementById("t2").value;
			var c = Number(a)+Number(b);
			t3.value = c;

		}
		function resultat()
		{
			var d = document.getElementById("n1").value;
			var e = document.getElementById("n2").value;
			var f = document.getElementById("n3").value;
			s = Number(d)+Number(e)+Number(f);
			m = Number(s)/3
			m1.value = m;

			if (m<10)
				r1.value = "Refusé";
			else if (m<12)
				r1.value = "Admis Passable";
			else if (m<15)
				r1.value = "Admis Bien";
			else
				r1.value = "Très Bien";



		}
	