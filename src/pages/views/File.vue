<template>
	<div>
		<form class="main">
			<h1 class="mt-3">Exibição de arquivo</h1>	
			Nome: {{ file.name }}
			<br>
			Descrição: {{ file.description }}

			<iframe height="450" width="800" :src="'http://localhost:8000/storage/files/' + this.file.file" frameborder="0"></iframe>
		</form>
	</div>
</template>

<script>

import api from '@/services/api.js'; //Importa o endereço base da api

export default {
	name: 'File',

	data() {
		return {
			file: '', //Variável que salva a lista de arquivos
		}
	},

	methods: {
		show() {
			api.defaults.headers.common['Authorization'] = `Bearer ${localStorage.access_token}`
			//Realiza uma requisição para receber as informações de um arquivo através da api
			api.get('/file/' + this.$route.query.id).then(response => {
				this.file = response.data; //Salva o arquivo na variável
			});
		},
	},
	beforeMount() { //Chama os métodos assim que a página é carregada
    this.show() 
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