export default {
	auth(to, from, next) {
		console.log(to, from, next)

		console.log(localStorage.access_token)
		
		if(!localStorage.access_token) {
			next('/');
		}

		next();
	}
}