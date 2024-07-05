<template>
  <div class="home">
    <Header />
    <h1>Home</h1>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Header from './Header.vue';

export default {
  name: 'Home',
  components: {
    Header
  },
  setup() {
    const router = useRouter();

    onMounted(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push({ name: 'SignUp' });
      }
    });
  }
};
</script>
