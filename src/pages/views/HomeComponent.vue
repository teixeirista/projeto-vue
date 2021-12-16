<template>
	<div>
		<form class="main">
			<h1 class="mt-3">Lista de arquivos</h1>
			<ul id="lista-arquivos" class="list-group">
				<li v-for="arq in arquivos" :key="arq">
					{{ arq }}
				</li>
			</ul>
			<button type="submit" class="btn btn-primary mt-3" @click.prevent="list">Listar</button>
		</form>
	</div>
</template>

<script>

import api from '@/services/api.js'; //Importa o endereço base da api

export default {
	name: 'HomeComponent',

	data() {
		return {
			arquivos: '' //Variável que salva a lista de arquivos
		}
	},

	methods: {
		//Método que lista os arquivos
		list() {
			//Realiza uma requisição para receber a lista de arquivos através da api
			api.get('/arquivo').then(response => {
				this.arquivos = response.data; //Salva a lista de arquivos na variável
			});
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

</style>
