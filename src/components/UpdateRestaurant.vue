<template>
  <div class="update">
    <Header />
    <h1>Update Restaurant</h1>
    <input type="text" v-model="name" placeholder="Name" />
    <input type="text" v-model="location" placeholder="Location" />
    <input type="text" v-model="price_range" placeholder="Price Range" />
    <button @click="updateRestaurant">Update</button>
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
        alert('Failed to fetch restaurant');
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
        alert('Restaurant updated successfully');
        router.push({ name: 'ListRestaurant' });
      } catch (error) {
        console.error('Error updating restaurant:', error);
        alert('Failed to update restaurant');
      }
    };

    onMounted(() => {
      fetchRestaurant();
    });

    return { name, location, price_range, updateRestaurant };
  }
};
</script>

<style scoped>
.update {
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

input {
  padding: 1rem;
  margin-bottom: 1rem;
  width: 300px;
}
</style>
