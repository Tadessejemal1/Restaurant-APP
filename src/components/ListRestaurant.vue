<template>
  <div class="list">
    <Header />
    <h1>List of Restaurants</h1>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Location</th>
          <th>Price Range</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="restaurant in restaurants" :key="restaurant.id">
          <td>{{ restaurant.name }}</td>
          <td>{{ restaurant.location }}</td>
          <td>{{ restaurant.price_range }}</td>
          <td>
            <button @click="editRestaurant(restaurant.id)">Edit</button>
            <button @click="deleteRestaurant(restaurant.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
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
        alert('Failed to fetch restaurants');
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
        fetchRestaurants(); // Refresh the list after deletion
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

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
}

h1 {
  font-size: 2.6rem;
  font-weight: 500;
  margin-bottom: 2rem;
}

table {
  width: 80%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
  font-weight: bold;
}

button {
  margin-right: 5px;
  padding: 5px 10px;
  border: none;
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

button:last-child {
  background-color: #f44336;
}

button:last-child:hover {
  background-color: #d32f2f;
}
</style>
