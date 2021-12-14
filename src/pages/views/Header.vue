<template>
	<header>
		<nav>
			<div>
				<a href="/" class="itens">Login</a>
				<a href="/#/home" class="itens">Lista de arquivos</a>
				<a href="/#/upload" class="itens">Upload de arquivos</a>
			</div>
		</nav>
	</header>
</template>

<script>


export default {
	name: 'Header',

	
}
</script>

<style scoped>

header {
	background-color: #0d6efd;
	width:100%;
	height: 60px;
}

.itens {
	margin-left: 20px;
	color:white;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
}

</style>
