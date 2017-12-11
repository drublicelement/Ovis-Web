function validar(){

	var nombre, email, telefono, empresa, consulta, expresion;

	nombre = document.getElementById("nombre").value;
	email = document.getElementById("email").value;
	telefono = document.getElementById("telefono").value;
	empresa = document.getElementById("empresa").value;
	consulta = document.getElementById("consulta").value;

	expresion = /\w+@\w+\.[a-z]/;

	if (nombre ==="" ) {

		alert("El campo nombre no puede estar vacio");
		return false;
	}else if (email ==="" ) {
		alert("El campo e-mail no puede estar vacio");
		return false;
	}else if (telefono ==="" ) {
		alert("El campo Teléfono no puede estar vacio");
		return false;
	}else if (empresa ==="" ) {
		alert("El campo Empresa no puede estar vacio");
		return false;
	}else if (consulta ==="" ) {
		alert("El campo consulta no puede estar vacio");
		return false;
	}else if (nombre.length>30) {
		
		alert("El Nombre es muy largo");
		return false;
	}
	else if (email.length>100) {
		
		alert("El e-mail es muy largo");
		return false;
	}
	else if (telefono.length>9) {
		
		alert("El Teléfono es muy largo");
		return false;
	}
	else if (isNaN(telefono)) {
		
		alert("El Teléfono es incorrecto");
		return false;
	}else if (!expresion.test(email)) {
		
		alert("El e-mail es incorrecto");
		return false;
	}


}
