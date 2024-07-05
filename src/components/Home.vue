<template>
  <Header />
  <div class="home flex flex-col items-center bg-gray-100 min-h-screen">
    <div class="container mx-auto text-center py-16">
      <h1 class="text-5xl font-bold mb-8 text-gray-800">Welcome to Restaurant Manager</h1>
      <p class="text-lg text-gray-600 mb-8">
        Manage your restaurant efficiently with our powerful tools. Add, update, and list your restaurant details seamlessly.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-bold mb-4">Add Restaurant</h2>
          <p class="text-gray-600 mb-4">Easily add new restaurants to your list with detailed information.</p>
          <router-link to="/add" class="text-blue-500 hover:underline">Add Now</router-link>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-bold mb-4">List Restaurants</h2>
          <p class="text-gray-600 mb-4">View all your restaurants in one place with the option to edit or delete.</p>
          <router-link to="/list" class="text-blue-500 hover:underline">View List</router-link>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-bold mb-4">Update Restaurant</h2>
          <p class="text-gray-600 mb-4">Update the details of your existing restaurants easily.</p>
          <router-link :to="{ name: 'UpdateRestaurant', params: { id: 1 } }" class="text-blue-500 hover:underline">Update Now</router-link>
          <!-- Replace `id: 1` with the actual ID of the restaurant you want to update -->
        </div>
      </div>
    </div>
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
