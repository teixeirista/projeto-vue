<template>
	<div class="login">
		<form class="main">
			<h1 class="mt-3">Login</h1>
			<div class="form-group">
				<label for="exampleInputEmail1" class="titulo">Email</label>
				<input type="email" class="form-control" id="email1" aria-describedby="emailHelp" placeholder="Email">
			</div>
			<div class="form-group">
				<label for="exampleInputPassword1" class="titulo">Senha</label>
				<input type="password" class="form-control" id="password1" placeholder="Senha">
			</div>
			<button type="submit" class="btn btn-primary mt-3" @click.prevent="login">Entrar</button>
		</form>
	</div>
</template>

<script>

import api from '@/services/api.js'; //Importa o endereço base da api

var em, pw; //Variáveis auxiliares para guardar o e-mail e a senha digitados pelo usuário

export default {
	name: 'LoginComponent',

	data() {
		return {

		}
	},

	methods: {
		login() { //Método de login
			em = document.getElementById('email1').value; //Recebe o e-mail do formulário
			pw = document.getElementById('password1').value; //Recebe a senha do formulário

			//Realiza o login através da api utilizando o método post
			api.post('/auth/login', {email: em, password: pw}).then(response => {
				localStorage.access_token = response.data.access_token; //Salva o token em uma variável local
				//Salva o token nas configurações padrão da api usando o axios
				api.defaults.headers.common['Authorization'] = `Bearer ${localStorage.access_token}`
				this.$router.push('/home'); //Muda a rota para a tela que exibe os arquivos
			})
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