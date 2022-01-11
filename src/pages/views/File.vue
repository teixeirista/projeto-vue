<template>
	<div>
		<form class="main">
			<h1 class="mt-3">Exibição de arquivo</h1>	
			Nome: {{ file.name }}
			<br>
			Descrição: {{ file.description }}

			<iframe height="400" width="800" :src="'http://localhost:8000/storage/files/' + this.file.file" frameborder="0"></iframe>
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
			//Realiza uma requisição para receber a lista de arquivos através da api
			api.get('/file/' + this.$route.query.id).then(response => {
				this.file = response.data; //Salva a lista de arquivos na variável
			});
		},
		/*view(id) {
			api.get('view/{id}').then(response => {
				redirect('/')
			});
		}*/
	},
	beforeMount(){
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