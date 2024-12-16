<template>
  <!-- contenedor general  -->
  <div class="container mx-auto py-8 min-h-screen px-4 sm:px-8">
    <!-- botón para volver al buscador -->
    <p
      class="w-28 uppercase font-bold rounded-md px-4 sm:px-6 py-3 bg-slate-200 hover:bg-green-800 hover:text-slate-200 mb-4"
    >
      <router-link to="/Buscador">Return</router-link>
    </p>

    <!-- título -->
    <h1 class="text-xl sm:text-2xl font-bold mb-6 mt-4 sm:mt-10">My List</h1>

    <!-- tabla responsive -->
    <div class="overflow-x-auto">
      <table class="table-auto border-collapse border border-gray-400 w-full text-left hidden sm:table">
        <thead>
          <tr>
            <th class="border border-gray-300 px-4 py-2 bg-gray-100">Name</th>
            <th class="border border-gray-300 px-4 py-2 bg-gray-100">Rating</th>
            <th class="border border-gray-300 px-4 py-2 bg-gray-100">Price</th>
            <th class="border border-gray-300 px-4 py-2 bg-gray-100">Address</th>
            <th class="border border-gray-300 px-4 py-2 bg-gray-100">
              Telephone
            </th>
            <th class="border border-gray-300 px-4 py-2 bg-gray-100"></th>
          </tr>
        </thead>
        <tbody class="bg-gray-100">
          <tr v-for="business in myList" :key="business.id">
            <td class="border border-gray-300 px-4 py-2">{{ business.name }}</td>
            <td class="border border-gray-300 px-4 py-2">⭐️ {{ business.rating }}</td>
            <td class="border border-gray-300 px-4 py-2">{{ business.price || "N/A" }}</td>
            <td class="border border-gray-300 px-4 py-2">
              {{ business.location.display_address.join(", ") }}
            </td>
            <td class="border border-gray-300 px-4 py-2">{{ business.phone }}</td>
            <td class="border border-gray-300 px-4 py-2">
              <button
                @click="removeFromList(business.id)"
                class="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- diseño tipo tarjeta para móviles -->
      <div class="sm:hidden">
        <div
          v-for="business in myList"
          :key="business.id"
          class="bg-white shadow-md rounded-lg p-4 mb-4"
        >
          <p class="font-bold text-lg">{{ business.name }}</p>
          <p class="text-sm">⭐️ Rating: {{ business.rating }}</p>
          <p class="text-sm">💰 Price: {{ business.price || "N/A" }}</p>
          <p class="text-sm">📍 Address: {{ business.location.display_address.join(", ") }}</p>
          <p class="text-sm">📞 Telephone: {{ business.phone }}</p>
          <button
            @click="removeFromList(business.id)"
            class="mt-4 w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
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
      restaurants.removeRestaurantFromList(id); // Eliminar del array
      restaurants.unsetIsAdded(id); // Actualizar estado en el buscador
    },
  },
};
</script>

<style>
.container {
  max-width: 800px;
}
</style>
