<template>
  <!-- contenedor general  -->
  <div class="container mx-auto py-8 min-h-screen">
    <!-- boton para volver al buscador  -->
    <p
      class="w-28 uppercase font-bold rounded-md px-6 py-3 bg-slate-200 hover:bg-green-800 hover:text-slate-200"
    >
      <router-link to="/Buscador">Volver</router-link>
    </p>
    <!-- titulo  -->
    <h1 class="text-2xl font-bold mb-6 mt-10">My List</h1>

    <!-- tabla de la lista  -->
    <table
      class="table-auto border-collapse border border-gray-400 w-full text-left"
    >
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
          <td class="border border-gray-300 px-4 py-2">
            ⭐️ {{ business.rating }}
          </td>
          <td class="border border-gray-300 px-4 py-2">
            {{ business.price || "N/A" }}
          </td>
          <td class="border border-gray-300 px-4 py-2">
            {{ business.location.display_address.join(", ") }}
          </td>
          <td class="border border-gray-300 px-4 py-2">{{ business.phone }}</td>
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
