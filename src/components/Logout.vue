<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
    <h1 class="text-4xl font-medium mb-8">Logout</h1>
    <button @click="logout" class="p-4 w-72 bg-red-500 text-white rounded hover:bg-red-600">Logout</button>
  </div>
</template>
  
  <script>
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'Logout',
    setup() {
      const router = useRouter();
  
      const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        router.push({ name: 'Login' });
      };
  
      return { logout };
    }
  }
  </script>
  
  <style scoped>
  .logout {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f5f5f5;
    padding: 20px;
  }
  
  .logout h1 {
    font-size: 2.6rem;
    font-weight: 500;
    margin-bottom: 2rem;
  }
  
  .logout button {
    padding: 1rem;
    width: 300px;
    border: none;
    border-radius: 5px;
    background-color: #333;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .logout button:hover {
    background-color: #555;
  }
  </style>
  