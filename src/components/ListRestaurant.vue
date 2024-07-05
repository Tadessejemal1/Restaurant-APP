<template>
  <div>
    <Header />
    <div class="flex flex-col items-center pt-10 w-full">
      <h1 class="text-4xl font-medium mb-8 mt-4">List of Restaurants</h1>
      <div class="overflow-x-auto w-4/5">
        <table class="min-w-full border-collapse">
          <thead>
            <tr>
              <th class="border p-2 bg-gray-200 font-bold text-center">Name</th>
              <th class="border p-2 bg-gray-200 font-bold text-center">Location</th>
              <th class="border p-2 bg-gray-200 font-bold text-center">Price Range($)</th>
              <th class="border p-2 bg-gray-200 font-bold text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="restaurant in restaurants" :key="restaurant.id" class="border-b">
              <td class="border p-2 text-center">{{ restaurant.name }}</td>
              <td class="border p-2 text-center">{{ restaurant.location }}</td>
              <td class="border p-2 text-center">{{ restaurant.price_range }}</td>
              <td class="border p-2 text-center">
                <button @click="editRestaurant(restaurant.id)" class="mr-2 p-2 bg-green-500 text-white rounded hover:bg-green-600">Edit</button>
                <button @click="deleteRestaurant(restaurant.id)" class="p-2 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import Header from './Header.vue';

export default {
  name: 'ListRestaurants',
  components: {
    Header
  },
  setup() {
    const restaurants = ref([]);
    const router = useRouter();

    const fetchRestaurants = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/restaurants', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        restaurants.value = response.data;
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      }
    };

    const editRestaurant = (id) => {
      router.push({ name: 'UpdateRestaurant', params: { id } });
    };

    const deleteRestaurant = async (id) => {
      try {
        const token = localStorage.getItem('token');
        await axios.delete(`http://localhost:5000/api/restaurants/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        fetchRestaurants();
        alert('Restaurant deleted successfully');
      } catch (error) {
        console.error('Error deleting restaurant:', error);
        alert('Failed to delete restaurant');
      }
    };

    onMounted(() => {
      fetchRestaurants();
    });

    return { restaurants, editRestaurant, deleteRestaurant };
  }
};
</script>
