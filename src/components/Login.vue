<template>
  <div class="login">
    <h1>Login</h1>
    <input type="email" v-model="email" placeholder="Email" />
    <input type="password" v-model="password" placeholder="Password" />
    <button @click="login">Login</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
  name: 'Login',
  setup() {
    const email = ref('');
    const password = ref('');
    const router = useRouter();

    const login = async () => {
      try {
        const response = await axios.post('http://localhost:5000/api/auth/login', {
          email: email.value,
          password: password.value,
        });
        localStorage.setItem('token', response.data.token);
        router.push({ name: 'Home' });
      } catch (error) {
        console.error(error);
        alert('Error logging in');
      }
    };

    return { email, password, login };
  },
};
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
}

.login h1 {
  font-size: 2.6rem;
  font-weight: 500;
  margin-bottom: 2rem;
}

.login input {
  padding: 1rem;
  margin-bottom: 1rem;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.login button {
  padding: 1rem;
  width: 300px;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login button:hover {
  background-color: #555;
}
</style>
