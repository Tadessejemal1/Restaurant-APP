import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import SignUp from '../components/SignUp.vue';
import Login from '../components/Login.vue';
import Logout from '../components/Logout.vue';
import AddRestaurant from '../components/AddRestaurant.vue';
import UpdateRestaurant from '../components/UpdateRestaurant.vue';
import ListRestaurant from '../components/ListRestaurant.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/sign-up', name: 'SignUp', component: SignUp },
  { path: '/login', name: 'Login', component: Login },
  { path: '/add', name: 'AddRestaurant', component: AddRestaurant },
  { path: '/update/:id', name: 'UpdateRestaurant', component: UpdateRestaurant },
  { path: '/list', name: 'ListRestaurant', component: ListRestaurant },
  { path: '/logout', name: 'Logout', component: Logout }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
