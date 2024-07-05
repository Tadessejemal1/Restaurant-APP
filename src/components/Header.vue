<template>
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/sign-up">Sign Up</router-link>
        <router-link to="/add">Add Restaurant</router-link>
        <router-link to="/list">List Restaurants</router-link>
        <router-link to="/update">Update Restaurant</router-link>
        <router-link to='/logout'>Logout</router-link>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header'
  }
  </script>
  
  <style scoped>
  header {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 20px;
    display: flex;
    justify-content: end;
  }
  nav a {
    color: white;
    margin: 0 10px;
    text-decoration: none;
  }
  nav a:hover {
    text-decoration: underline;
  }
  </style>
  