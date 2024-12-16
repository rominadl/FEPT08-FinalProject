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
    <!-- Botón para descargar Excel -->
    <button
      @click="downloadExcel"
      class="mb-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
    >
      Download Excel
    </button>

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
          <th class="border border-gray-300 px-4 py-2 bg-gray-100">Notes</th>
          <th class="border border-gray-300 px-4 py-2 bg-gray-100">Deal state</th>
          <th class="border border-gray-300 px-4 py-2 bg-gray-100"></th>
        </tr>
      </thead>
      <tbody class="bg-gray-100">
        <tr v-for="business in myList" :key="business.id">
          <td class="border border-gray-300 px-4 py-2">{{ business.name }}</td>
          <td class="border border-gray-300 px-4 py-2 text-center">
            {{ business.rating }}
          </td>
          <td class="border border-gray-300 px-4 py-2 text-center">
            {{ business.price || "N/A" }}
          </td>
          <td class="border border-gray-300 px-4 py-2">
            {{ business.location.display_address.join(", ") }}
          </td>
          <td class="border border-gray-300 px-4 py-2">{{ business.phone }}</td>

          <td class="border border-gray-300 px-4 py-2">
            <input
              v-model="business.notes"
              class="w-full border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Add note..."
            />
          </td>
          <td class="border border-gray-300 px-4 py-2">
            <select
              v-model="business.status"
              class="w-full border rounded px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="Por contactar" class="gray">To be contacted</option>
              <option value="En contacto" class="blue">In contact</option>
              <option value="Trato cerrado" class="green">Deal closed</option>
            </select>
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
  </div>
</template>

<script>
import { useRestaurantStore } from "../stores/restaurants";
import * as XLSX from "xlsx"; // Importar librería xslx

export default {
  computed: {
    myList() {
      const restaurants = useRestaurantStore();
      return restaurants.myList.map((business) => ({
        ...business,
        notes: business.notes || "", // Asegura que cada restaurante tenga una propiedad 'notes'
        status: business.status || "To be contacted", // Valor predeterminado pa
      }));
    },
  },
  methods: {
    removeFromList(id) {
      const restaurants = useRestaurantStore();
      restaurants.removeRestaurantFromList(id); // Eliminar del array
      restaurants.unsetIsAdded(id); // Actualizar estado en el buscador
    },
    downloadExcel() {
      // Convertir la lista a un formato adecuado para Excel
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

      // Crear el workbook y agregar el worksheet
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "My List");

      // Generar archivo Excel y descargarlo
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
