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

import api from '@/services/api.js';

var em;
var pw;

export default {
	name: 'LoginComponent',

	data() {
		return {

		}
	},

	methods: {
		login() {
			console.log('Login');

			em = document.getElementById('email1').value
			pw = document.getElementById('password1').value;
			
			console.log(em);
			console.log(pw);

			api.post('/auth/login', {email: em, password: pw}).then(response => {
				console.log(response.data);
				localStorage.access_token = response.data.access_token;
				api.defaults.headers.common['Authorization'] = `Bearer ${localStorage.access_token}`
				this.$router.push('/home');
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