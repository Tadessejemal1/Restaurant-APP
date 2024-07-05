<template>
  <div class="add">
    <Header />
    <h1>Add Restaurant</h1>
    <input type="text" v-model="name" placeholder="Name" />
    <input type="text" v-model="location" placeholder="Location" />
    <input type="text" v-model="price_range" placeholder="Price Range" />
    <button @click="addRestaurant">Add</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
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
        alert('Restaurant added successfully');
      } catch (error) {
        console.error('Error adding restaurant:', error);
        alert('Failed to add restaurant');
      }
    };

    return { name, location, price_range, addRestaurant };
  }
};
</script>

<style scoped>
.add {
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

.add input {
  padding: 1rem;
  margin-bottom: 1rem;
  width: 300px;
}
</style>
