<template>
  <!-- contenedor general -->
  <div
    class="flex flex-col py-10 min-h-screen  bg-graylight"
  >
    <p
      class="w-28 self-end mx-8 uppercase font-bold rounded-md px-6 py-3 bg-gray-100 hover:bg-green-800 hover:text-gray-100"
    >
      <router-link to="/MiLista">My List</router-link>
</p>
    <h1 class="flex justify-center text-xl font-bold font-sans my-12">The Restaurant Finder</h1>
    
    <!-- contenedor del buscador y la lista de resultados -->
    <div class="flex justify-center gap-20">
      <!-- contenedor del buscador  -->
      <div class="flex-col">
        <form
          @submit.prevent="submit"
          class="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 my-4 h-82 w-80"
        >
          <label
            class="block text-gray-700 font-semibold mb-2"
            for="RestaurantType"
          >
            Enter restaurant type:
          </label>
          <input
            v-model="restType"
            class="shadow appearance-none border rounded w-full py-2 px-2 mt-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Ex. Indú"
          />
          <label
            class="block text-gray-700 font-semibold mt-6 mb-2"
            for="restaurantLocation"
          >
            Enter restaurant location:
          </label>
          <input
            v-model="location"
            class="shadow appearance-none border rounded w-full py-2 px-2 mt-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Ex. Barcelona"
          />
          <button
            class="my-8 bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            :disabled="loading"
          >
            {{ loading ? "Cargando..." : "Submit" }}
          </button>
        </form>
      </div>
      <!-- contenedor de resultados  -->
      <div
        class="flex-col items-center justify-between  px-4 py-3 sm:px-6"
      >
        <h2 class="font-semibold">
          📍 Results for
          {{ displayRestType ? ` ${displayRestType}` : "" }} restaurants
          {{ displayLocation ? `in ${displayLocation}` : "" }}
        </h2>
        <div v-if="loading">Cargando...</div>
        <div v-else-if="error" class="text-red-500">{{ error }}</div>
        <div v-else-if="restaurants && restaurants.businesses.length === 0">
          We could'nt find the results.
        </div>
        <div v-else>
          <div
            v-for="business in paginatedRestaurants"
            :key="business.id"
            class="my-4"
          >

        <!-- Lista en forma de tarjetas de los resultados  -->
            <div class="bg-gray-300 shadow-lg rounded-md p-5">
              <span class="font-semibold"> {{ business.name }} </span><br />
              <span class="text-sm">⭐️ {{ business.rating }} </span>
              <span class="text-sm"> 💰{{ business.price || "N/A" }} </span
              ><br />
              <span class="text-sm">
                {{ business.location.display_address.join(", ") }} </span
              ><br />
              <a
                :href="business.url"
                target="_blank"
                class="text-sm text-gray-100 underline"
              >
                See more details
              </a>

              <!-- Botón agregar a mi lista -->
              <button
                v-if="!business.isAdded"
                @click.prevent="sendRestToList(business)"
                class="text-sm bg-green-600 hover:bg-green-700 text-white font-semibold py-1 px-2 rounded ml-24 mt-5"
              >
                Add to my list
              </button>

              <!-- Icono de tilde cuando el elemento está agregado -->
              <span
                v-else
                class="text-green-500 text-2xl font-bold flex items-center space-x-2"
              >
                ✓
              </span>
            </div>
          </div>

          <!-- indicador de las paginas de resultados  -->
          <div class="pagination flex justify-center mt-5">
            <button
              :disabled="currentPage === 1"
              @click="changePage(-1)"
              class="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-l"
            >
              Previous
            </button>
            <span class="px-4 py-2">Página {{ currentPage }}</span>
            <button
              :disabled="currentPage === totalPages"
              @click="changePage(1)"
              class="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-r"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useRestaurantStore } from "../stores/restaurants";

export default {
  name: "App",
  data() {
    return {
      location: "",
      restType: "",
      currentPage: 1,
      resultsPerPage: 5,
      displayLocation: "",
      displayRestType: "",
    };
  },
  computed: {
    ...mapState(useRestaurantStore, ["restaurants", "loading", "error"]),
    paginatedRestaurants() {
      if (!this.restaurants || !this.restaurants.businesses) return [];
      const start = (this.currentPage - 1) * this.resultsPerPage;
      const end = start + this.resultsPerPage;
      return this.restaurants.businesses.slice(start, end);
    },
    totalPages() {
      if (!this.restaurants || !this.restaurants.businesses) return 1;
      return Math.ceil(
        this.restaurants.businesses.length / this.resultsPerPage
      );
    },
  },
  methods: {
    async submit() {
      const restaurants = useRestaurantStore();
      this.currentPage = 1;
      await restaurants.getRestaurants(this.location, this.restType);
      if (!restaurants.error) {
        this.displayLocation = this.location;
        this.displayRestType = this.restType;
      }
    },
    changePage(direction) {
      this.currentPage += direction;
    },
    sendRestToList(business) {
      const restaurants = useRestaurantStore(); // Obtén el store
      restaurants.addRestaurantToList(business); // Agrega a la lista
    },
  },
};
</script>
