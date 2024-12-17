<template>
  <!-- Contenedor general -->
  <div class="mx-auto py-8 min-h-screen px-4 sm:px-8">
    <!-- Botón para volver al buscador -->
    <p
      class="w-28 uppercase font-bold rounded-md px-4 sm:px-6 py-3 bg-slate-200 hover:bg-green-800 hover:text-slate-200 mb-4"
    >
      <router-link to="/Buscador">Volver</router-link>
    </p>

    <!-- Título -->
    <h1 class="text-2xl font-bold mb-6 mt-10">My List</h1>

    <!-- Botón para descargar Excel -->
    <button
      @click="downloadExcel"
      class="mb-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
    >
      Download Excel
    </button>

    <!-- Tabla o diseño tipo tarjeta -->
    <div class="overflow-x-auto">
      <!-- Tabla para pantallas grandes -->
      <table class="table-auto border-collapse border border-gray-400 w-full text-left hidden sm:table">
        <thead>
          <tr>
            <th class="border border-gray-300 px-4 py-2 bg-gray-100">Name</th>
            <th class="border border-gray-300 px-4 py-2 bg-gray-100">Rating</th>
            <th class="border border-gray-300 px-4 py-2 bg-gray-100">Price</th>
            <th class="border border-gray-300 px-4 py-2 bg-gray-100">Address</th>
            <th class="border border-gray-300 px-4 py-2 bg-gray-100">Telephone</th>
            <th class="border border-gray-300 px-4 py-2 bg-gray-100">Category</th>
            <th class="border border-gray-300 px-4 py-2 bg-gray-100">Deal State</th>
            <th class="border border-gray-300 px-4 py-2 bg-gray-100">Menu</th>
            <th class="border border-gray-300 px-4 py-2 bg-gray-100">Notes</th>
            <th class="border border-gray-300 px-4 py-2 bg-gray-100"></th>
          </tr>
        </thead>
        <tbody class="bg-gray-100">
          <!-- Fila de ejemplo cuando la lista está vacía -->
          <tr v-if="myList.length === 0">
            <td class="border border-gray-300 px-4 py-2" colspan="8">
              <p class="text-center text-gray-500">
                No restaurants added yet. 
              </p>
            </td>
          </tr>
          <!-- Fila con datos reales cuando la lista tiene restaurantes -->
          <tr v-for="business in myList" :key="business.id">
            <td class="border border-gray-300 px-4 py-2">            <a
              :href="business.url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-600 hover:underline"
            >
              {{ business.name }}
            </a></td>
            <td class="border border-gray-300 px-4 py-2 text-center">
              ⭐️ {{ business.rating }}
            </td>
            <td class="border border-gray-300 px-4 py-2 text-center">
              {{ business.price || "N/A" }}
            </td>
            <td class="border border-gray-300 px-4 py-2">
              {{ business.location.display_address.join(", ") }}
            </td>
            <td class="border border-gray-300 px-4 py-2">{{ business.phone }}</td>
            <td class="border border-gray-300 px-4 py-2">{{ business.categories.map(category => `${category.alias}, ${category.title}`).join(' | ') }}</td>
            <td class="border border-gray-300 px-4 py-2">
              <select
                v-model="business.status"
                class="w-full border rounded px-4 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                <option value="Por contactar">To be contacted</option>
                <option value="En contacto">In contact</option>
                <option value="Trato cerrado">Deal closed</option>
              </select>
            </td>
            <td class="border border-gray-300 px-4 py-2">
              <input
                v-model="business.menu"
                class="px-2 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Paste link to menu"
              />
            </td>
            <td class="border border-gray-300 px-4 py-2">
              <input
                v-model="business.notes"
                class="px-2 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Add note..."
              />
            </td>
            
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

      <!-- Vista tipo tarjeta para pantallas pequeñas -->
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
          <div class="my-2">
            <input
              v-model="business.notes"
              class="w-full border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Add note..."
            />
          </div>
          <div class="my-2">
            <select
              v-model="business.status"
              class="w-full border rounded px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="Por contactar">To be contacted</option>
              <option value="En contacto">In contact</option>
              <option value="Trato cerrado">Deal closed</option>
            </select>
          </div>
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
import * as XLSX from "xlsx";

export default {
  computed: {
    myList() {
      const restaurants = useRestaurantStore();
      return restaurants.myList.map((business) => ({
        ...business,
        notes: business.notes || "",
        menu: business.menu || "",
        status: business.status || "To be contacted",
      }));
    },
  },
  methods: {
    removeFromList(id) {
      const restaurants = useRestaurantStore();
      restaurants.removeRestaurantFromList(id);
      restaurants.unsetIsAdded(id);
    },
    downloadExcel() {
      const worksheet = XLSX.utils.json_to_sheet(
        this.myList.map((business) => ({
          Name: business.name,
          Rating: business.rating,
          Price: business.price || "N/A",
          Address: business.location.display_address.join(", "),
          Telephone: business.phone,
          State: business.status || "To be contacted",
          Notes: business.notes || "",
        }))
      );

      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "My List");
      XLSX.writeFile(workbook, "My_List.xlsx");
    },
  },
};
</script>

<style>
.container {
  max-width: 800px;
}
</style>
