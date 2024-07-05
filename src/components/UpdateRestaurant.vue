<template>
  <div>
    <Header />
    <div class="flex flex-col items-center h-screen pt-10">
      <h1 class="text-4xl font-medium mb-8">Update Restaurant</h1>
      <input type="text" v-model="name" placeholder="Name" class="p-4 mb-4 w-72 border rounded" />
      <input type="text" v-model="location" placeholder="Location" class="p-4 mb-4 w-72 border rounded" />
      <input type="text" v-model="price_range" placeholder="Price Range" class="p-4 mb-4 w-72 border rounded" />
      <button @click="updateRestaurant" class="p-4 w-72 bg-green-500 text-white rounded hover:bg-green-600">
        Update
      </button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';
import Header from './Header.vue';

export default {
  name: 'UpdateRestaurant',
  components: {
    Header
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const name = ref('');
    const location = ref('');
    const price_range = ref('');

    const fetchRestaurant = async () => {
      try {
        const token = localStorage.getItem('token');
        const id = route.params.id;
        if (!id) {
          console.error('Restaurant ID is missing');
          alert('Restaurant ID is missing');
          return;
        }
        const response = await axios.get(`http://localhost:5000/api/restaurants/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const restaurant = response.data;
        name.value = restaurant.name;
        location.value = restaurant.location;
        price_range.value = restaurant.price_range;
      } catch (error) {
        console.error('Error fetching restaurant:', error);
      }
    };

    const updateRestaurant = async () => {
      try {
        const token = localStorage.getItem('token');
        const id = route.params.id;
        if (!id) {
          console.error('Restaurant ID is missing');
          alert('Restaurant ID is missing');
          return;
        }
        const response = await axios.put(`http://localhost:5000/api/restaurants/${id}`, {
          name: name.value,
          location: location.value,
          price_range: price_range.value
        }, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        console.log(response);
        router.push({ name: 'ListRestaurants' });
      } catch (error) {
        console.error('Error updating restaurant:', error);
      }
    };

    onMounted(() => {
      fetchRestaurant();
    });

    return { name, location, price_range, updateRestaurant };
  }
};
</script>
