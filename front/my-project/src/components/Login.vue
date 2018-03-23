<template>
<div class="signup-wrapper">

    <form>
      <h2 class="form-signin-heading">Login</h2>

      <div class="container pt-5 col-lg-10 rounded-circle " id="bonjour"> 

      

      <input v-model="User.username" type="email" id="inputEmail" class="form-control text-center" placeholder="Email address" required autofocus>

  

      <input v-model="User.password" type="password" id="inputPassword" class="form-control text-center" placeholder="Password" required></br>

      <button class="btn btn-lg btn-primary btn-block" type="submit" @click="goBackToDb" id="login">Sign in</button>

      </div>

    </form></br>
    <center><span><li><router-link to="/signup">You don't have an account with us.</router-link></li></span></center>

   <div></br>
    <center><span><li><router-link to="/">Go back Home Page</router-link></li></span></center>
   </div>

  </div>
</template>

<script>

import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      msg: "Welcome Back dear User",
      User: {username:'', passsword:''},
    }
  },
  methods: {
     goBackToDb() {

      let existingUser = {
        username: this.User.username,
        password:this.User.password,
      }

      console.log(existingUser);
      axios.post('http://localhost:8000/users/login',existingUser).then(res => {
         console.log(res.data.message,res.data.token);
         localStorage.setItem("token" , res.data.token)
         this.$router.push({name:'accueil'})
      })
    }
  }
    
  }
</script>

<style lang="css">
body {
  background-image: url("../../lol.jpg");
  background-size: cover;
  color: white;
}
#inputEmail {

  background-color : rgb(150 , 220 , 216);
  border-radius: 16px 16px 0px 0px;
  
}
#login {
  background-color: rgb(109 ,167 , 148);
  color: white;
}
#inputPassword {

  background-color : rgb(215 , 220 , 216);
  
}


</style>