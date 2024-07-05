<template>
  <header class="bg-gray-800 text-white p-4 flex justify-between items-center">
    <img src="../assets/image.svg" alt="Restaurant Logo" class="w-10 h-10">
    <button @click="toggleMenu" class="block md:hidden focus:outline-none">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>
    <nav class="hidden md:flex space-x-4">
      <router-link to="/home" class="hover:underline font-bold text-lg">Home</router-link>
      <!-- <router-link to="/login" class="hover:underline font-bold text-lg">Login</router-link>
      <router-link to="/sign-up" class="hover:underline font-bold text-lg">Sign Up</router-link> -->
      <router-link to="/add" class="hover:underline font-bold text-lg">Add Restaurant</router-link>
      <router-link to="/list" class="hover:underline font-bold text-lg">List Restaurants</router-link>
      <router-link to="/update/:id" class="hover:underline font-bold text-lg">Update Restaurant</router-link>
      <router-link :to="{ name: 'UpdateRestaurant', params: { id: 1 } }" class="hover:underline font-bold text-lg">Logout</router-link>
    </nav>
    <transition name="slide-fade">
      <div v-if="isMenuOpen" class="fixed inset-0 bg-gray-800 bg-opacity-75 z-50" @click="toggleMenu">
        <div class="fixed top-0 left-0 w-72 bg-white h-full shadow-md p-4 z-60" @click.stop>
          <div class="flex justify-between items-center mb-16 mt-8">
            <div class="flex items-center">
              <img src="../assets/image.svg" alt="Restaurant Logo" class="w-10 h-10 mr-2">
              <div class="text-xl font-bold text-gray-800">Menu</div>
            </div>
            <button @click="toggleMenu" class="focus:outline-none">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <nav class="space-y-4">
            <router-link to="/home" class="block text-gray-800 hover:text-blue-500 flex items-center font-bold text-lg border-b border-gray-200 pb-2">
              <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 20s8-4 8-10-4-8-8-8-8 4-8 8 8 10 8 10z"></path>
              </svg>
              Home
            </router-link>
            <!-- <router-link to="/login" class="block text-gray-800 hover:text-blue-500 flex items-center font-bold text-lg border-b border-gray-200 pb-2">
              <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 3a3 3 0 100 6 3 3 0 000-6zM4 9v1h2V9H4zm8-3v4h4V6h-4zM4 11v5h4v-5H4zm8 0v5h4v-5h-4z"></path>
              </svg>
              Login
            </router-link>
            <router-link to="/sign-up" class="block text-gray-800 hover:text-blue-500 flex items-center font-bold text-lg border-b border-gray-200 pb-2">
              <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 8V6a3 3 0 013-3h4a3 3 0 013 3v2a3 3 0 01-3 3H9a3 3 0 01-2-3zm-4 2h8V8H3v2zm4 4H3v-2h4v2zm0 2h8v-2H7v2zm-4-4h4v-2H3v2zm4-8h4v2H7V2zm0 0v2h4V2H7zm0 2v2h8V4H7z"></path>
              </svg>
              Sign Up
            </router-link> -->
            <router-link to="/add" class="block text-gray-800 hover:text-blue-500 flex items-center font-bold text-lg border-b border-gray-200 pb-2">
              <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 10a1 1 0 011-1h2V7a1 1 0 112 0v2h2a1 1 0 110 2H8v2a1 1 0 11-2 0v-2H4a1 1 0 01-1-1z"></path>
              </svg>
              Add Restaurant
            </router-link>
            <router-link to="/list" class="block text-gray-800 hover:text-blue-500 flex items-center font-bold text-lg border-b border-gray-200 pb-2">
              <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 4h6a1 1 0 110 2H9a1 1 0 110-2zm-2 2H5a1 1 0 000 2h2a1 1 0 000-2zm2 4h6a1 1 0 110 2H9a1 1 0 110-2zm-2 2H5a1 1 0 100 2h2a1 1 0 000-2zm2 4h6a1 1 0 110 2H9a1 1 0 110-2zm-2 2H5a1 1 0 000 2h2a1 1 0 000-2z"></path>
              </svg>
              List Restaurants
            </router-link>
            <router-link :to="{ name: 'UpdateRestaurant', params: { id: 1 } }" class="block text-gray-800 hover:text-blue-500 flex items-center font-bold text-lg border-b border-gray-200 pb-2">
              <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 10V8h-2v2H8v2h3v2h2v-2h2v-2h-2zm-1-6V3a1 1 0 00-2 0v1H8a1 1 0 000 2h2v2h2V6h2a1 1 0 000-2h-2zM6 10a1 1 0 011-1h2v2H8a1 1 0 00-1-1zm4 4a1 1 0 010-2h2v2H8a1 1 0 010-2z"></path>
              </svg>
              Update Restaurant
            </router-link>
            <router-link to="/logout" class="block text-gray-800 hover:text-blue-500 flex items-center font-bold text-lg border-b border-gray-200 pb-2">
              <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12H5a1 1 0 000 2h4a1 1 0 000-2zm3-3a1 1 0 100 2h2V9h-2zM5 3h8a1 1 0 000-2H5a1 1 0 000 2zm12 7a1 1 0 00-1-1H7a1 1 0 000 2h8a1 1 0 001-1zm-4 6H7a1 1 0 100 2h6a1 1 0 100-2z"></path>
              </svg>
              Logout
            </router-link>
          </nav>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
}
</script>

<style scoped>
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
