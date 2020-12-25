function timer(){
			var data = new Date();
			var miesiac = data.getMonth()+1;
			var dzien = data.getDate();
			var rok = data.getFullYear();
			var godzina = data.getHours();
			var minuta = data.getMinutes();
			var sekunda = data.getSeconds();

			var czas = "Godzina: " + godzina + ":" + minuta + ":" + sekunda;
			var czas2 = "Miesiac: " + dzien + ":" + miesiac + ":" + rok;

			document.getElementById("timeDiv").innerHTML = czas;
			document.getElementById("dataDiv").innerHTML = czas2;

			setTimeout("timer()" , 1000);
			}