<template>
	<div class="main">
			<h1 class="mt-3">Upload de arquivos</h1>
			<br><br>
			<input @change="newfile" type="file">
			<br><br>
			<button type="submit" class="btn btn-primary" @click.prevent="upload">Upload</button>
	</div>
</template>

<script>

import api from '@/services/api.js';


export default {
	name: 'Upload',

	data() {
		return {
			file: '',
			name: ''
		}
	},

	methods: {
		newfile(event) {
			console.log(event);
			this.file = event.target.files[0];
		},
		
		upload() {
			var form = ''
			form = new FormData()
			form.append('file', this.file)
			form.append('name', this.file.name)

			api.post('arquivo/create', form, {headers:{
				'Content-Type': 'multipart/form-data'
			}}).then(response => {
				console.log(response);
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