var formu = document.forms.formulario;
formu.onsubmit = function () {
	var nome = formu.nome.value;
	var senha = formu.senha.value;
	var csenha = formu.csenha.value;
	if (senha.length < 6) {
		alert("Senha com menos de 6 caracteres!");
		return false;
	}else if (senha != csenha) {
		alert("Confirmação de senha inválida!");
		return false;
	}else{
		return true;
	}
}
