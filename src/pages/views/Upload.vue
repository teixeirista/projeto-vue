<template>
	<div class="main">
			<h1 class="mt-3">Upload de arquivos</h1>
			<br>
			<input type="text" id="name" placeholder="Nome">
			<br>
			<input type="text" id="desc" placeholder="Descrição">
			<br>
			<input @change="newfile" type="file">
			<br><br>
			<button type="submit" class="btn btn-primary" @click.prevent="upload">Upload</button>
			<p id="message">{{ message }}</p>
	</div>
</template>

<script>

import api from '@/services/api.js'; //Importa o endereço base da api


export default {
	name: 'Upload',

	data() {
		return {
			file: '', //Variável que salva o arquivo a ser enviado
			name: '', //Variável que salva o nome do arquivo a ser enviado
			description: '', //Variável que salva a descrição do arquivo a ser enviado
			message: '', //Variável que exibe a mensagem de sucesso
		}
	},

	methods: {
		newfile(event) {
			this.file = event.target.files[0];
		},
		
		upload() {
			api.defaults.headers.common['Authorization'] = `Bearer ${localStorage.access_token}`

			this.name = document.getElementById('name').value; //Recebe o nome do arquivo
			this.description = document.getElementById('desc').value; //Recebe a descrição do arquivo

			//Cria um novo formulário para enviar o arquivo
			var form = ''
			form = new FormData()
			form.append('file', this.file)
			form.append('name', this.name)
			form.append('description', this.description)

			//Realiza o upload de arquivos através da api
			api.post('file/create', form, {headers:{
				'Content-Type': 'multipart/form-data'
			}}).then(response => {
				this.message = response.data //Avisa que o arquivo foi carregado com sucesso
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

</style>