<template>
	<div class="login">
		<form class="main">
			<h1 class="mt-3">Cadastro de usuário</h1>
			<div class="form-group">

				<label class="titulo">Nome</label>
				<input type="text" class="form-control" id="name" placeholder="Insira seu nome">

				<label for="exampleInputEmail1" class="titulo">E-mail</label>
				<input type="email" class="form-control" id="email1" aria-describedby="emailHelp" placeholder="Email">

			</div>
			<div class="form-group">
				<label for="exampleInputPassword1" class="titulo">Senha</label>
				<input type="password" class="form-control" id="password1" placeholder="Senha">

				<label for="exampleInputPassword2" class="titulo">Confirmar senha</label>
				<input type="password" class="form-control" id="password2" placeholder="Confirme sua senha">
			</div>
			<button type="submit" class="btn btn-primary mt-3" @click.prevent="register">Cadastrar</button>
		</form>
	</div>
</template>

<script>

import api from '@/services/api.js'; //Importa o endereço base da api

var em, pw, nm; //Variáveis auxiliares para guardar o e-mail e a senha digitados pelo usuário

export default {
	name: 'Register',

	data() {
		return {

		}
	},

	methods: {
		register() { //Método de cadastro de novo usuário
			nm = document.getElementById('name').value;
			em = document.getElementById('email1').value; //Recebe o e-mail do formulário
			pw = document.getElementById('password1').value; //Recebe a senha do formulário

			//Realiza o login através da api utilizando o método post
			api.post('/auth/create', {name: nm, email: em, password: pw});
		}
	}
}
</script>

<style scoped>

.main {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	
}

.titulo {
	display: block; 
	margin-top: 20px;
	margin-bottom: 3px;
}

</style>