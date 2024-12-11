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
            v-model="searchText"
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
            @click="buscarRestaurantes"
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
      <Map ref="mapa"/>
    </div>
  </div>

  <div class="col-span-2 h-[600px] overflow-auto">
    <ul>
      <li
        v-for="restaurante in resultados"
        :key="restaurante.id"
        class="border p-3 mb-3"
      >
        <h3>{{ restaurante.name }}</h3>
        <p>{{ restaurante.location.address1 }}</p>
        <p>Rating: {{ restaurante.rating }} ⭐</p>
        <button
          class="bg-green-500 text-white py-1 px-3 rounded"
          @click="agregarAMiLista(restaurante)"
        >
          Añadir a mi lista
        </button>
      </li>
    </ul>
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
      searchText: "", // Texto de búsqueda
      resultados: [], // Array para guardar los resultados
    };
  },
  methods: {
    async buscarRestaurantes() {
      try {
        const radioKm = parseInt(this.selectedRadio.replace("km", ""));
        const url = `https://api.yelp.com/v3/businesses/search?term=${
          this.searchText
        }&location=Barcelona&radius=${radioKm * 1000}`;

        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer j3cEDqmhJfemNvM6UoxpmzTI65dPPWjy7z5hspQtPhaTh7wrP3thWI5M0MObGomvPlqGS_b14VsdcM3JGBIlBpGZkua6PoIQgFpTflsY4HPWKdICuZV6aAHIMHBRZ3Yx`,
          },
        });

        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.status}`);
        }

        const data = await response.json();
        this.resultados = data.businesses;

        // Agregar marcadores al mapa
        this.$refs.mapa.agregarMarcadores(this.resultados);
      } catch (error) {
        console.error("Error buscando restaurantes:", error);
      }
    },
    agregarAMiLista(restaurante) {
      // Lógica para agregar el restaurante a la lista
    },
  },
};
</script>
<style scoped></style>
