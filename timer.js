function timer(){
			var data = new Date();
			var miesiac = data.getMonth()+1;
			var dzien = data.getDate();
			var rok = data.getFullYear();
			var godzina = data.getHours();
			var minuta = data.getMinutes();
			var sekunda = data.getSeconds();

			if(godzina < 10){
				godzina = "0" + godzina;
			}
			if(minuta < 10){
				minuta = "0" + minuta;
			}
			if(sekunda < 10){
				sekunda = "0" + sekunda;
			}
			if(dzien < 10){
				dzien = "0" + dzien;
			}
			if(miesiac < 10){
				miesiac = "0" + miesiac;
			}
			


			var czas = "Godzina: " + godzina + ":" + minuta + ":" + sekunda;
			var czas2 = "Miesiac: " + dzien + ":" + miesiac + ":" + rok;

			document.getElementById("timeDiv").innerHTML = czas;
			document.getElementById("dataDiv").innerHTML = czas2;

			setTimeout("timer()" , 1000);
			}