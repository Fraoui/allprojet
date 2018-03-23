var user = new Vue({
	el: "#user",
	data: {
	    username: 'username',
	    password: 'password',
	    message: '',
	    page: 'signup',
	    token: '',
	    users: []
	
	},
	methods: {
		submit:function(){
			if(this.page == 'signup'){
				var user = {username: this.username, password: this.password}
		  		this.$http.post('http://localhost:8000/users/signup',user ).then(response => {
		  			this.message = response.body.message
		  			if(response.body.success == "yes"){
						this.page = 'login'
		  			}
		  		})
			}
			
			else if(this.page == 'login'){
				var user = {username: this.username, password: this.password}
				this.$http.post('http://localhost:8000/users/login',user ).then(response => {
					if(response.body.success == "yes"){
		  				this.message = response.body.message
		  				localStorage.setItem("token",response.body.token);
		  				this.page = 'users';
		  			}
		  		})
			}	
		},
		login: function(){
			this.page = 'login'
		},
		signup: function(){
			this.page = 'signup'
		},
		listUser: function(){
			this.$http.get('http://localhost:8000/users/messages',{headers:{'token': localStorage.getItem('token')}} ).then(response => {
				this.users = response.body;
			})
		}
	},
	
})