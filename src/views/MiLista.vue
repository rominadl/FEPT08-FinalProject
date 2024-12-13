<template>
  <div class="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
    <h3 class="text-xl font-semibold mb-4">Mis Restaurantes Favoritos</h3>

    <!-- Mostrar mensaje si no hay restaurantes favoritos -->
    <div v-if="favRestaurants.length === 0" class="text-gray-500">
      No tienes restaurantes favoritos aún.
    </div>

    <!-- Mostrar la lista de favoritos -->
    <ul v-else>
      <li v-for="(restaurant, index) in favRestaurants" :key="restaurant.id" class="my-4 p-4 border-b border-gray-200">
        <div>
          <span class="font-semibold text-lg">{{ restaurant.name }}</span><br />
          <span class="text-sm text-yellow-500">⭐️ {{ restaurant.rating }} | 💰 {{ restaurant.price }}</span>
          <p class="text-sm text-gray-600">{{ restaurant.location.address1 }}, {{ restaurant.location.city }}</p>
          <a
            :href="restaurant.url"
            target="_blank"
            class="text-sm text-blue-500 underline mt-2 block"
          >
            Ver más detalles
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { useRestaurantStore } from "../stores/restaurants";

export default {
  name: "MiLista",
  computed: {
    // Usamos el getter para obtener los restaurantes favoritos
    favRestaurants() {
      const restaurantStore = useRestaurantStore();
      return restaurantStore.getFavRestaurants; // Devuelve los restaurantes favoritos
    },
  },
};
</script>

