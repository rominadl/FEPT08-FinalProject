<template>
  <div
    class="justify-center py-10 justify-items-center min-h-screen bg-cover bg-center"
    style=""
  >
    <!-- Título:  -->
    <h1 class="text-xl font-bold font-mono my-12">The Restaurant finder</h1>
    <div class="flex gap-10">
      <div>
        <!-- Formulario:  -->
        <form
          @submit.prevent="getRestaurants"
          class="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 my-4 h-82 w-80"
        >
          <label
            class="justify-self-start block text-gray-700 font-semibold mb-2"
            for="RestaurantType"
          >
            Enter restaurant type:
          </label>
          <!-- Input rest type:  -->
          <input
            v-model="restType"
            class="shadow appearance-none border rounded w-full py-2 px-2 mt-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Ex. Indú"
          />
          <label
            class="justify-self-start block text-gray-700 font-semibold mt-6 mb-2"
            for="restaurantLocation"
          >
            Enter restaurant location:
          </label>
          <!-- Input location:  -->
          <input
            v-model="location"
            class="shadow appearance-none border rounded w-full py-2 px-2 mt-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Ex. Barcelona"
          />
          <button
            class="my-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            :disabled="loading"
          >
            {{ loading ? "Cargando..." : "Submit" }}
          </button>
        </form>
      </div>
      <!-- List of restaurants:  -->
      <div
        class="flex flex-col items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
      >
        <h2 class="font-semibold">
          📍 Results for
          {{ displayRestType ? ` ${displayRestType}` : "" }} restaurants
          {{ displayLocation ? `in ${displayLocation}` : "" }}
        </h2>
        <div v-if="loading">Loading...</div>
        <div v-if="error" class="text-red-500">{{ error }}</div>
        <div v-if="restaurants">
          <div
            v-for="business in paginatedRestaurants"
            :key="business.id"
            class="my-4"
          >
            <p>
              <span class="font-semibold"> {{ business.name }} </span><br />
              <span class="text-sm">⭐️ {{ business.rating }} </span>
              <span class="text-sm"> 💰{{ business.price }} </span><br />
              <span class="text-sm"
                >{{ business.location.display_address[0] }},
                {{ business.location.display_address[1] }},
                {{ business.location.display_address[2] }}</span
              ><br />

              <a
                :href="business.url"
                target="_blank"
                class="text-sm text-blue-500 underline"
              >
                Ver más detalles
              </a>
              <button @click.prevent="sendRestToList" >
                ➕ Agregar a mi lista
              </button>
            </p>
          </div>
          <div class="pagination flex justify-center mt-5">
            <button
              :disabled="currentPage === 1"
              @click="changePage(-1)"
              class="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-l"
            >
              Anterior
            </button>
            <span class="px-4 py-2">Página {{ currentPage }}</span>
            <button
              :disabled="currentPage === totalPages"
              @click="changePage(1)"
              class="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-r"
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      loading: false,
      location: "",
      name:"",
      businesses: null,
      error: "",
      restaurants: null,
      restType: "",
      currentPage: 1,
      resultsPerPage: 5,
      displayLocation: "", // Para mostrar en el título
      displayRestType: "", // Para mostrar en el título
    };
  },

  computed: {
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
      sendRestToList() {
        this.displayLocation = this.business.location.display_address[0];
        this.displayName = this.business.name;
        this.$emit("addRestaurant", {
          name: this.displayName,
          location: this.displayLocation,
        });
      },

    getRestaurants() {
      this.loading = true;
      this.error = false;
      this.restaurants = null;
      const myApiKey = "60b16db3779fdc4bd524139845db8d57";
      const url = `https://api.yelp.com/v3/businesses/search?term=${this.restType}&location=${this.location}`;
      this.displayLocation = this.location;
      this.displayRestType = this.restType;

      fetch(url, {
        headers: {
          Authorization:
            "Bearer j3cEDqmhJfemNvM6UoxpmzTI65dPPWjy7z5hspQtPhaTh7wrP3thWI5M0MObGomvPlqGS_b14VsdcM3JGBIlBpGZkua6PoIQgFpTflsY4HPWKdICuZV6aAHIMHBRZ3Yx",
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error en la respuesta de la API");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          this.restaurants = data;
          this.loading = false;
        })
        .catch(() => {
          this.error = "Failed to fetch restaurants. Please try again.";
          this.loading = false;
        });
    },
    changePage(direction) {
      this.currentPage += direction;
    },
  },
};


</script>

<style></style>
