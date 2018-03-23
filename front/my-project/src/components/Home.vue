<template>
  <div id="app">
	<nav>	
	<h2 class="form-signin-heading">Home page</h2></br>

		    <router-link to="/signup"><button id="myButton" class="foo bar btn btn-primary">Signup !</button></router-link>
			 
			 <span></span>

			<router-link to="/login"><button id="myButton" class="foo bar btn btn-primary">Login !</button></router-link>
			
			<router-view></router-view>
			
		
	</nav>

  </div>

 </template>
	<script>
	import axios from 'axios'

		export default {
			name:'Home'
		}

	</script>

	<style>

body {
  background-image: url("../../lol.jpg");
  background-size: cover;
  color: white;
}
	</style>
