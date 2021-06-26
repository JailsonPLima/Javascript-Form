const validarForm = () => {
	// Selecionando os itens 
	const nomeText = document.querySelector('.input__nome').value
	const sobrenomeText = document.querySelector('.input__sobrenome').value
	const emailText = document.querySelector('.input__email').value
	const telefoneText = document.querySelector('.input__telefone').value
	const mensagemText = document.querySelector('.input--mensagem').value
	
	const error = document.querySelector('.myform__error')
	const errorText = document.querySelector('.error')

	// Patterns
	const nomeCompletoPattern = /^[A-Z]{1}[a-z]{1,}$/;
	const emailPattern = /^([0-9a-zA-Z_.]{1,})+@+([a-zA-Z.]{1,})$/;
	const telefonePattern = /^\([0-9]{2}\)[0-9]{4,5}-[0-9]{4}$/;

	// Validações
	if((nomeText == '' || nomeText.match(nomeCompletoPattern) == null) ||
			(sobrenomeText == '' || sobrenomeText.match(nomeCompletoPattern) == null)) {
		errorText.innerHTML = 'Nome ou sobrenome inválido*'
		error.style.display = 'block'
		return false
	} else if (emailText == '' || emailText.match(emailPattern) == null) {
		errorText.innerHTML = 'Email inválido*'
		error.style.display = 'block'
		return false
	} else if(telefoneText == '' || telefoneText.match(telefonePattern) == null) {
		errorText.innerHTML = 'Telefone inválido*'
		error.style.display = 'block'
		return false
	} else if ((mensagemText == '' || mensagemText == null) || (mensagemText.length < 20)) {
		// Verificou se a mensagem tinha no minímo 20 caracteres
		errorText.innerHTML = 'Escreva no minímo 20 caracteres na mensagem*'
		error.style.display = 'block'
		return false
	} else {
		// formulário vai ser enviado
		alert('Formulário enviado com sucesso.')		
		return true
	}
	// Return false para o formulário não ser enviado
	return false
}

// Ao clicar em qualquer lugar o erro some
const body = document.querySelector('body')
const error = document.querySelector('.myform__error')

body.addEventListener('click', () => {
	error.style.display = "none";	
})


console.log(window.innerWidth + "\n" + window.innerHeight )