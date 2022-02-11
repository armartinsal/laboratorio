function nombre_provincia(cp) {
	switch (cp) {
		case "01":
			return "Alava"
		case "02":
			return "Albacete"
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