<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
    <h1 class="text-4xl font-medium mb-8">Sign Up</h1>
    <input type="text" v-model="name" placeholder="Name" class="p-4 mb-4 w-72 border rounded" />
    <input type="email" v-model="email" placeholder="Email" class="p-4 mb-4 w-72 border rounded" />
    <input type="password" v-model="password" placeholder="Password" class="p-4 mb-4 w-72 border rounded" />
    <button @click="signup" class="p-4 w-72 bg-green-500 text-white rounded hover:bg-green-600">Sign Up</button>
    <p class="mt-4">Already have an account? <router-link to="/login" class="text-blue-500 hover:underline">Login</router-link></p>
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