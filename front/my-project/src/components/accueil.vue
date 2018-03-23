<template>
  <div id="app">
	<nav>	
	<h2 class="form-signin-heading">Home page</h2></br>			
 	 <ul id="example-1">
 	 La liste des utilisateurs {{msg}}
  		<li v-for="item in users">
   			 {{ item.username }}
  		</li>
	 </ul>
		
	</nav>

  </div>

 </template>
<script>
import axios from 'axios'

	export default {
		name:'accueil',
		data () {
	    	return {
	      		msg:'Welcome to our app Vuejs',
	      		users: [],
	    	}
	  	}, 
	  	beforeMount: function(){
	  		axios.get('http://localhost:8000/users', {headers:{token: localStorage.getItem("token")}}).then(res =>{
	  			this.users = res.data 
	  		})

	  	}
	}

</script>

	<style>

body {
  background-image: url("../../lol.jpg");
  background-size: cover;
  color: white;
}
	</style>
