<template>
  <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->
   <div class="register">
    <h1>SignUp</h1>
    <input type="text" v-model="name" placeholder="Name" />
    <input type="email" v-model="email" placeholder="Email" />
    <input type="password" v-model="password" placeholder="Password" />
    <button @click="signup">SignUp</button>
    <p class="login">Already have an account? <router-link to="/login">Login</router-link></p>
   </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'SignUp',
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    signup() {
      console.log(this.name, this.email, this.password)
      const userData = {
        name: this.name,
        email: this.email,
        password:this.password
      };
      axios.post('http://localhost:5000/api/auth/signup', userData)
      .then((response) => {
        console.log(response);
        this.$router.push({ name: 'Login' });
      }).then((error) => {
        console.log(error);
      });
    }
  }
}
</script>

<style>
  .register {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    padding-top: 40px;
  }

  h1 {
    font-size: 2.6rem;
    font-weight: 500;
    margin-bottom: 2rem;
  }

  .register input {
    padding: 1rem;
    margin-bottom: 1rem;
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: auto;
    margin-left: auto;
  }
  .register button {
    padding: 1rem;
    width: 300px;
    border: none;
    border-radius: 5px;
    background-color: #333;
    color: white;
    cursor: pointer;
  }
  .login {
    color: #333;
  }
  
</style>