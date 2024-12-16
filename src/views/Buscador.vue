<template>
  <!-- contenedor general -->
  <div class="flex flex-col py-10 min-h-screen bg-graylight">
    <!-- Botón "My List" -->
    <p
      class="w-28 self-end mx-4 sm:mx-8 uppercase font-bold rounded-md px-4 sm:px-6 py-3 bg-gray-100 hover:bg-green-800 hover:text-gray-100"
    >
      <router-link to="/MiLista">My List</router-link>
    </p>

    <!-- Título -->
    <h1
      class="text-center text-lg sm:text-2xl lg:text-3xl font-bold font-sans my-6 sm:my-12"
    >
      The Restaurant Finder
    </h1>

    <!-- Contenedor del buscador y los resultados -->
    <div class="flex flex-col justify-center gap-10 sm:flex-row px-4 sm:px-10">
      <!-- Contenedor del buscador -->
      <div class="w-full sm:w-auto">
        <form
          @submit.prevent="submit"
          class="bg-white shadow-lg rounded-lg px-6 sm:px-8 py-6 sm:py-8 mb-6 sm:mb-4 w-full max-w-md mx-auto"
        >
          <label
            class="block text-gray-700 font-semibold mb-2"
            for="RestaurantType"
          >
            Enter restaurant type:
          </label>
          <input
            v-model="restType"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Ex. Barcelona"
          />

          <button
            class="mt-6 w-full bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition"
            type="submit"
            :disabled="loading"
          >
            {{ loading ? "Cargando..." : "Submit" }}
          </button>
        </form>
      </div>

      <!-- Contenedor de resultados -->
      <div class="w-full sm:w-2/3">
        <h2 class="font-semibold text-center sm:text-left mb-4">
          📍 Results for
          {{ displayRestType ? ` ${displayRestType}` : "" }} restaurants
          {{ displayLocation ? `in ${displayLocation}` : "" }}
        </h2>

        <!-- Mensajes de estado -->
        <div v-if="loading" class="text-center">Cargando...</div>
        <div v-else-if="error" class="text-red-500 text-center">
          {{ error }}
        </div>
        <div
          v-else-if="restaurants && restaurants.businesses.length === 0"
          class="text-center"
        >
          We couldn't find the results.
        </div>

        <!-- Lista de resultados -->
        <div v-else>
          <div
            v-for="business in paginatedRestaurants"
            :key="business.id"
            class="my-4"
          >
            <!-- Tarjeta de restaurante -->
            <div class="bg-gray-300 shadow-lg rounded-md p-5 lg:w-[400px]">
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
                class="text-sm text-blue-500 underline"
              >
                See more details
              </a>

              <!-- Botón agregar a mi lista -->
              <button
                v-if="!business.isAdded"
                @click.prevent="sendRestToList(business)"
                class="text-sm bg-green-600 hover:bg-green-700 text-white font-semibold py-1 px-2 rounded ml-0 sm:ml-24 mt-5"
              >
                Add to my list
              </button>

              <!-- Icono de tilde -->
              <span
                v-else
                class="text-green-500 text-2xl font-bold flex items-center space-x-2"
              >
                ✓
              </span>
            </div>
          </div>

          <!-- indicador de las paginas de resultados  -->
          <div
            v-if="
              restaurants &&
              restaurants.businesses &&
              restaurants.businesses.length > 0
            "
            class="pagination flex justify-center mt-5"
          >
            <!-- Paginación -->
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
      isButtonVisible: true, // Estado inicial: el botón es visible
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
        if (restaurants.restaurants?.businesses?.length > 0) {
          this.restaurants.businesses.forEach((business) => {
            business.isAdded = this.myList.some((r) => r.id === business.id);
          });
          this.displayLocation = this.location;
          this.displayRestType = this.restType;
        }
      }
    },
    changePage(direction) {
      this.currentPage += direction;
    },
    sendRestToList(business) {
      const restaurants = useRestaurantStore(); // Obtén el store
      restaurants.addRestaurantToList(business); // Agrega a la lista
      business.isAdded = true; // Solo afecta al restaurante clickeado
    },
  },
};
</script>
