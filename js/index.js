const form = document.getElementById("form");
const cp = document.getElementById("cp");
const provincia = document.getElementById("provincia");
const valoracion = document.getElementById("valoracion");
//variable input cuenta bancaria(objeto)
const pais = document.getElementById("pais");
const iban = document.getElementById("iban");
const entidad = document.getElementById("entidad");
const sucursal = document.getElementById("sucursal");
const dc = document.getElementById("dc");
const cuenta = document.getElementById("cuenta");
//variable fecha(objeto)
const fecha = document.getElementById("fecha");
//variable botones(objeto)
const btn_valoracion = document.getElementById("btn_valoracion");
const btn_cuenta = document.getElementById("btn_cuenta");
const btn_dia_semana = document.getElementById("btn_dia_semana");
//eventos botones
btn_valoracion.addEventListener("click", function () {
	alert(`Has valorado con ${valoracion.value} puntos`);
});
btn_cuenta.addEventListener("click", function () {
	alert(`Le informamos que su cuenta bancaria es: ${pais.value}${iban.value}-${entidad.value}-${sucursal.value}-${dc.value}-${cuenta.value}`);
});
btn_dia_semana.addEventListener("click", function () {
	const dias = [
		'Domingo',
		'Lunes',
		'Martes',
		'Miércoles',
		'Jueves',
		'Viernes',
		'Sábado',
	];
	const numero_dia = new Date(fecha.value).getDay();
	const nombre_dia = dias[numero_dia];
	alert(`La fecha seleccionada en el elemento de fecha en un ${nombre_dia}`);
});

//evento envio de formulario 
form.addEventListener("submit", function (e) {
	//que no envie el formulario al action para mostrar los mensajes
	e.preventDefault();
	
	if (cp.value.length == 0) {
		const res = '<div class="texto_incorrecto">El campo Código Postal no puede estar vacío</div>';
		document.getElementById("resultado").innerHTML = res;
	}

	else if (tiene_letras(cp.value)) {
		const res = '<div class="texto_incorrecto">El campo Código Postal no puede contener letras</div>';
		document.getElementById("resultado").innerHTML = res;
		//alerta en el DOM(.html) sale un mensaje como error si contiene letras 
	}

	else {
		//funcion que lee los dos primeros digitos 
		const n_provincia = nombre_provincia(cp.value.substr(0, 2));
		if (n_provincia == false) {
			//alerta en el DOM(html) mensaje sale como error de que la provincia no existe
			const res = '<div class="texto_incorrecto"> El Código Postal no existe</div>';
			document.getElementById("resultado").innerHTML = res;
		}
		else if (n_provincia.toLowerCase() === provincia.value.toLowerCase()) {
			const res = '<div class="texto_correcto"> El Código postal coincide con la provincia </div>';
			document.getElementById("resultado").innerHTML = res;
		}
		else {
			const res = '<div class="texto_incorrecto"> El Código postal no coincide con la provincia </div>';
			document.getElementById("resultado").innerHTML = res;
		}

	}
})
