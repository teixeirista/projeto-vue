<template>
	<div>
		<form class="main">
			<h1 class="mt-3">Lista de arquivos</h1>

			<table border="1px">
				<tr>
				<th>Nome</th>
				<th>Descrição</th>
				<th>Arquivo</th>
				<th>Visualizar</th>
			</tr>

			<tr v-for="(arq, idx) in arquivos" :key="idx">
			<td>{{ arq.name }}</td>
				<td>{{ arq.description }}</td>
				<td>{{ arq.file }}</td>
				<td><a :href="'/#/view?id=' + arq.id" class="links">Ver</a></td>
				<!--<td><a @click.prevent="view(arq.id)">Ver</a></td>-->
			</tr>

			</table>

			<!--<ul id="lista-arquivos" class="list-group">
				<li v-for="arq in arquivos" :key="arq">
					{{ arq }}
				</li>
			</ul>-->
			<!--<button type="submit" class="btn btn-primary mt-3" @click.prevent="list">Listar</button>-->
		</form>
	</div>
</template>

<script>

import api from '@/services/api.js'; //Importa o endereço base da api

export default {
	name: 'List',

	data() {
		return {
			arquivos: '', //Variável que salva a lista de arquivos
		}
	},

	methods: {
		//Método que lista os arquivos
		list() {
			//Realiza uma requisição para receber a lista de arquivos através da api
			api.get('/arquivos').then(response => {
				this.arquivos = response.data; //Salva a lista de arquivos na variável
			});
		},
		/*view(id) {
			api.get('view/{id}').then(response => {
				redirect('/')
			});
		}*/
	},
	beforeMount(){
    this.list()
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
