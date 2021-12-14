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

import api from '@/services/api.js';


export default {
	name: 'HomeComponent',

	data() {
		return {
			arquivos: ''
		}
	},

	methods: {
		list() {
			api.get('/arquivo').then(response => {
				console.log(response.data);
				this.arquivos = response.data;
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
