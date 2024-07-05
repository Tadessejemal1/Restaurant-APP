<template>
  <header class="bg-gray-800 text-white text-center py-5 flex justify-end">
    <nav>
      <router-link to="/" class="text-white mx-2 no-underline hover:underline">Home</router-link>
      <router-link to="/login" class="text-white mx-2 no-underline hover:underline">Login</router-link>
      <router-link to="/sign-up" class="text-white mx-2 no-underline hover:underline">Sign Up</router-link>
      <router-link to="/add" class="text-white mx-2 no-underline hover:underline">Add Restaurant</router-link>
      <router-link to="/list" class="text-white mx-2 no-underline hover:underline">List Restaurants</router-link>
      <router-link to="/update" class="text-white mx-2 no-underline hover:underline">Update Restaurant</router-link>
      <router-link to="/logout" class="text-white mx-2 no-underline hover:underline">Logout</router-link>
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
  