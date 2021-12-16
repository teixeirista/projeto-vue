//Esse middleware é usado para verificar se o usuário está logado

import api from '@/services/api.js'; //Importa o endereço base da api

export default {
	auth(to, from, next) {

		//Verifica, através da api, se o usuário está logado
		api.get('auth/token').then(response => {
			if(response.data.token == 'false') { //Caso não esteja logado, volta para a tela de login
				next('/');
			} else if(response.data.token == 'true') { //Caso esteja logado, continua para a página que o usuário escolher ir
				next();
			}
		});
	}
}