<template>
	<div class="main">
			<h1 class="mt-3">Upload de arquivos</h1>
			<br>
			<input @change="newfile" type="file">
			<br><br>
			<button type="submit" class="btn btn-primary" @click.prevent="upload">Upload</button>
			<p id="mensagem">Mensagem</p>
	</div>
</template>

<script>

import api from '@/services/api.js'; //Importa o endereço base da api


export default {
	name: 'Upload',

	data() {
		return {
			file: '', //Variável que salva o arquivo a ser enviado
			name: '' //Variável que salva o nome do arquivo a ser enviado
		}
	},

	methods: {
		newfile(event) {
			console.log(event);
			this.file = event.target.files[0];
		},
		
		upload() {
			//Cria um novo formulário para enviar o arquivo
			var form = ''
			form = new FormData()
			form.append('file', this.file)
			form.append('name', this.file.name)

			//Realiza o upload de arquivos através da api
			api.post('arquivo/create', form, {headers:{
				'Content-Type': 'multipart/form-data'
			}}).then(response => {
				console.log(response.data);
				//document.getElementById("mensagem").value = response.data; //Avisa que o arquivo foi carregado com sucesso
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