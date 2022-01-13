<template>
	<header>
		<nav>
			<div class="itens">
				<div v-if="!notLogged">
					<a href="/#/" class="links">Login</a>
					<a href="/#/register" class="links">Registrar</a>
				</div>
				<div v-else>
					<a href="/#/home" class="links">Lista de arquivos</a>
					<a href="/#/upload" class="links">Upload de arquivos</a>
					<a href="/#/" @click="logout" class="links">Logout</a>
				</div>
			</div>
		</nav>
	</header>
</template>

<script>

import api from '@/services/api.js'; //Importa o endereço base da api

export default {
	name: 'Header',


  computed: {
    notLogged() {
			if(this.$route.name !== 'login' && this.$route.name !== 'register') {
				return true;
			}
			return false;
			
      //return this.$route.name !== 'login';
    }
  },

	data() {
		return {
			logged: false //Variável usada para mostrar ou esconder os botões de login e logout, a depender de qual deles está ativo
		}
	},
	methods: {
		//Método que desloga
		logout() {
			//Realiza uma requisição para deslogar através da api
			api.post('/auth/logout').then(response => {
				console.log(response.data); //Printa uma mensagem indicando que deslogou
				localStorage.removeItem('access_token');
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