<template>
  <div class="container mx-auto py-8">
    <h1 class="text-2xl font-bold mb-6">My List</h1>
    <table class="table-auto border-collapse border border-gray-400 w-full text-left">
      <thead>
        <tr>
          <th class="border border-gray-300 px-4 py-2 bg-gray-100">Name</th>
          <th class="border border-gray-300 px-4 py-2 bg-gray-100">Rating</th>
          <th class="border border-gray-300 px-4 py-2 bg-gray-100">Price</th>
          <th class="border border-gray-300 px-4 py-2 bg-gray-100">Address</th>
          <th class="border border-gray-300 px-4 py-2 bg-gray-100">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="business in myList" :key="business.id">
          <td class="border border-gray-300 px-4 py-2">{{ business.name }}</td>
          <td class="border border-gray-300 px-4 py-2">⭐️ {{ business.rating }}</td>
          <td class="border border-gray-300 px-4 py-2">{{ business.price || "N/A" }}</td>
          <td class="border border-gray-300 px-4 py-2">
            {{ business.location.display_address.join(", ") }}
          </td>
          <td class="border border-gray-300 px-4 py-2">
            <button
              @click="removeFromList(business.id)"
              class="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded"
            >
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useRestaurantStore } from "../stores/restaurants";

export default {
  computed: {
    myList() {
      const restaurants = useRestaurantStore();
      return restaurants.myList; // Lista reactiva desde el store
    },
  },
  methods: {
    removeFromList(id) {
      const restaurants = useRestaurantStore();
      restaurants.removeRestaurantFromList(id); // Acción para eliminar un restaurante
    },
  },
};
</script>

<style>
.container {
  max-width: 800px;
}
</style>
