<template>
  <div class="signup-wrapper">

     <form>
      <h2 class="form-signin-heading">Sign Up Page</h2>

       <div class="container pt-5 col-lg-10 rounded-circle " id="bonjour"> 
          
    
      <input type="text" name="Username" placeholder="Username" v-model="User.username" class="form-control text-center" id="inputEmail">

      
      <input type="text" name="Password" placeholder="Password" v-model="User.password" class="form-control text-center" id="inputPassword"></br>

              
          <button type="submit" name="Signup" class="btn btn-block" @click="addToDb" id="signup">Submit</button></br>
          
    </div>
      
    </form>
     <center><span><li><router-link to="/login">You already have an account ? Click here</router-link></li></span></center>

    <div>
    <center></br>
    <span><li><router-link to="/">Go back Home Page</router-link></li></span></center>
   </div>
          
      </div>

</template>

<script>
import axios from 'axios';

export default {
  name: 'signup',
  data () {
    return {
      msg:'Welcome to our app Vuejs',
      User: {username:'',password:''},
    }
  }, 
  methods: {
     addToDb() {

      let newUser = {
        username: this.User.username,
        password:this.User.password,
      }

      console.log(newUser);
      axios.post('http://localhost:8000/users/signup',newUser).then(res => {
         console.log(res.data.message);
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
#signup {
  background-color: rgb(109 ,167 , 148);
  color: white;
}
#inputPassword {

  background-color : rgb(215 , 220 , 216);
 
}
</style>