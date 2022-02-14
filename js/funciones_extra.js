function nombre_provincia(cp) {
	switch (cp) {
		case "01":
			return "Alava"
		case "02":
			return "Albacete"
		case "03":
			return "Alicante"
		case "04":
			return "Almeria"
		case "05":
			return "Avila"
		case "06":
			return "Badajoz"
		case "07":
			return "Islas Baleares"
		case "08":
			return "Barcelona"
		case "09":
			return "Burgos"
		case "10":
			return "Caceres"
		case "11":
			return "Cadiz"
		case "12":
			return "Castellon"
		case "13":
			return "Ciudad Real"
		case "14":
			return "Cordoba"
		case "15":
			return "La Coruna"
		case "16":
			return "Cuenca"
		case "17":
			return "Gerona"
		case "18":
			return "Granada"
		case "19":
			return "Guadalajara"
		case "20":
			return "Guipuzcoa"
		case "21":
			return "Huelva"
		case "22":
			return "Huesca"
		case "23":
			return "Jaen"
		case "24":
			return "Leon"
		case "25":
			return "Lerida"
		case "26":
			return "La Rioja"
		case "27":
			return "Lugo"
		case "28":
			return "Madrid"
		case "29":
			return "Malaga"
		case "30":
			return "Murcia"
		case "31":
			return "Navarra"
		case "32":
			return "Orense"
		case "33":
			return "Asturias"
		case "34":
			return "Palencia"
		case "35":
			return "Las Palmas"
		case "36":
			return "Pontevedra"
		case "37":
			return "Salamanca"
		case "38":
			return "Santa Cruz de Tenerife"
		case "39":
			return "Cantabria"
		case "40":
			return "Segovia"
		case "41":
			return "Sevilla"
		case "42":
			return "Soria"
		case "43":
			return "Tarragona"
		case "44":
			return "Teruel"
		case "45":
			return "Toledo"
		case "46":
			return "Valencia"
		case "47":
			return "Valladolid"
		case "48":
			return "Vizcaya"
		case "49":
			return "Zamora"
		case "50":
			return "Zaragoza"
		case "51":
			return "Ceuta"
		case "52":
			return "Melilla"
		default:
			return false;
	}
}
function tiene_letras(texto) {
	const letras = "abcdefghyjklmnñopqrstuvwxyz";
	texto = texto.toLowerCase();
	for (i = 0; i < texto.length; i++) {
		if (letras.indexOf(texto.charAt(i), 0) != -1) {
			return true;
		}
	}
	return false;
}