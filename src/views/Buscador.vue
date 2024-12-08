<template>
  <h1 class="mx-3 my-5">Encuentra tu próximo cliente!</h1>
  <div class="grid grid-cols-5 gap-2 p-3">
    
    <!-- BUSCADOR -->
    <div class="col-span-2 h-[600px]">

      <!-- Incio del formulario de búsqueda  -->
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-[400px]">

        <!-- Barra de búsqueda -->
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="búsqueda"
          >
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 text-xs leading-tight focus:outline-none focus:shadow-outline"
            id="Búsqueda"
            type="text"
            placeholder="🔍  Nombre del lugar, tipo de producto..."
          />
        </div>

        <!-- Desplegable de radio -->
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="radio">
            Radio de búsqueda
          </label>
          <select
            id="radio"
            class="text-xs block appearance-none w-full bg-white border border-gray-300 text-gray-500 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            v-model="selectedRadio"
          >
            <option value="1km">1km</option>
            <option value="2km">2km</option>
            <option value="3km">3km</option>
          </select>
          <p class="mt-2 text-gray-500 text-xs">
            Has seleccionado: {{ selectedRadio }}
          </p>
        </div>
        <!-- Aquí acaba la configuración del desplegable de radio -->

        <!-- Botón de buscar -->
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Buscar
          </button>
        </div>
      </form>
    </div>

    <!-- Mapa -->
    <div id="mapp" class="col-span-3">
      <Map />
    </div>
  </div>
</template>
<script>
import Map from "../components/Map.vue";
export default {
  name: "Buscador en mapa",
  components: { Map },
  data() {
    return {
      selectedRadio: "1km", // Opción predeterminada
    };
  },
};
</script>
<style scoped></style>
