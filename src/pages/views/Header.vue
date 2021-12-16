<template>
	<header>
		<nav>
			<div class="itens">
				<a href="/#/" class="links">Login</a>
				<a href="/#/home" class="links">Lista de arquivos</a>
				<a href="/#/upload" class="links">Upload de arquivos</a>
				<a href="/#/" @click="deslogar" class="links">Logout</a>
			</div>
		</nav>
	</header>
</template>

<script>

import api from '@/services/api.js'; //Importa o endereço base da api

export default {
	name: 'Header',
	data() {
		return {
			logado: false //Variável usada para mostrar ou esconder os botões de login e logout, a depender de qual deles está ativo
		}
	},
	methods: {
		//Método que desloga
		deslogar() {
			//Realiza uma requisição para deslogar através da api
			api.post('/auth/logout').then(response => {
				console.log(response.data); //Printa uma mensagem indicando que deslogou
			})
		},
	},
}
</script>

<style scoped>

header {
	background-color: #0d6efd;
	width:100%;
	height: 60px;
}

.itens {
	display: flex;
	height: 60px;
	align-items: center;
}

.links {
	color:white;
	margin-left: 20px;
}
</style>