<template>
  <div>
    <Header />
    <div class="flex flex-col items-center h-screen pt-10">
      <h1 class="text-4xl font-medium mb-8">Add Restaurant</h1>
      <input type="text" v-model="name" placeholder="Name" class="p-4 mb-4 w-72 border rounded" />
      <input type="text" v-model="location" placeholder="Location" class="p-4 mb-4 w-72 border rounded" />
      <input type="text" v-model="price_range" placeholder="Price Range" class="p-4 mb-4 w-72 border rounded" />
      <button @click="addRestaurant" class="p-4 w-72 bg-green-500 text-white rounded hover:bg-green-600">
        Add
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import Header from './Header.vue';

export default {
  name: 'AddRestaurant',
  components: {
    Header
  },
  setup() {
    const name = ref('');
    const location = ref('');
    const price_range = ref('');
    const router = useRouter();

    const addRestaurant = async () => {
      try {
        if (!/^\d+(-\d+)?$/.test(price_range.value)) {
          alert('Invalid price range format. Use a single number or a range (e.g., "3" or "3-5").');
          return;
        }

        const token = localStorage.getItem('token');
        if (!token) {
          alert('Token not found. Please login again.');
          return;
        }
        const response = await axios.post(
          'http://localhost:5000/api/restaurants',
          {
            name: name.value,
            location: location.value,
            price_range: price_range.value
          },
          {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }
        );
        console.log(response);
        router.push({ name: 'ListRestaurants' });
      } catch (error) {
        console.error('Error adding restaurant:', error);
        alert('Failed to add restaurant');
      }
    };

    return { name, location, price_range, addRestaurant };
  }
};
</script>

